-- Single script: paste into Supabase → SQL Editor → Run (or `supabase db push`).
-- Production: visitors may INSERT via the contact form only; admin reads use SUPABASE_SERVICE_ROLE_KEY.

create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

comment on table public.contacts is 'Inbound messages from the public contact form.';

create index if not exists contacts_created_at_idx on public.contacts (created_at desc);

alter table public.contacts enable row level security;

drop policy if exists "contacts_anon_insert" on public.contacts;
drop policy if exists "contacts_anon_select" on public.contacts;

create policy "contacts_anon_insert"
  on public.contacts
  for insert
  to anon
  with check (true);

revoke all on table public.contacts from anon;
grant insert on table public.contacts to anon;
grant all on table public.contacts to service_role;
