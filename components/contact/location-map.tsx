import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LocationMap() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="bg-[#F8F5F2] border-b">
        <CardTitle className="text-xl font-heading">Our Location</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-[400px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.3219685937953!2d-2.438659223743468!3d52.72179987203883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a817ade775549%3A0x86af44adfd0b64c9!2sHouse%20Of%20Beauty%2C%20Wellington%20Rd%2C%20Donnington%2C%20Telford%20TF2%208AH!5e0!3m2!1sen!2suk!4v1716721657835!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full rounded"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-center">
              <h3 className="font-medium text-lg mb-1">Elen.MakeUp.Telford</h3>
              <p className="text-gray-600 text-sm"> House Of Beauty, Wellington Rd, Donnington, Telford TF2 8AH</p>
              <a
                href="https://www.google.com/maps/dir/52.7045817,-2.4822575/House+Of+Beauty,+Wellington+Rd,+Donnington,+Telford+TF2+8AH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
