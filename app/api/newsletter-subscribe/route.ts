import {type NextRequest, NextResponse} from  'next/server';


export async function POST(request: NextRequest) {
    try {
        const {email} = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                {error: 'Please provide a valid email' },
                {status: 400}
            )
        }

        // Check if we're using Google Sheets API
        if (process.env.GOOGLE_APPS_SCRIPT_URL) {
            // Google Apps Script approach (simpler)

            const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    isoDate: new Date().toISOString(),
                    timestamp: new Date().toLocaleString()
                })
            })

            if(!response.ok) {
                throw new Error('Failed to subscribe to Google Sheets')
            }
        } else if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_API_KEY) {
            // Google sheets API approach

            const GOOGLE_SHEETS_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/Sheet1:append`

            const currentDate = new Date().toISOString()
            const timestamp = new Date().toLocaleString()

            // Prepare data for Google Sheets
            const values = [
                [email, timestamp, currentDate] // Email, Timestamp, ISO Date
            ]

            const response = await fetch(`${GOOGLE_SHEETS_URL}?valueInputOption=RAW&key=${process.env.GOOGLE_API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "applciation/json"
                },
                body: JSON.stringify({
                    values: values
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Google Sheets API error:", errorData)
                throw new Error('Failed to subscribe to Google Sheets')
            }
        } else {
            // Fallback: Just log the email (for testing)
            console.log(`New newsletter subscription: ${email}`)
        }

        return NextResponse.json(
            {
                message: "Successfully subscribed!",
                email: email
            },
            {status: 200}
        )
    } catch (error) {
        console.error("Newsletter subscription error:", error)
        return NextResponse.json(
            {
                error: "Failed to subscribe. Please try again"
            }, 
            {status: 500}
        )
    }
}