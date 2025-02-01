interface WhatsAppMessage {
  to: string;
  from: string;
  sms: string;
  type: string;
  channel: string;
  api_key: string;
}

function formatNigerianPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  let cleanNumber = phone.replace(/\D/g, '');
  
  // Remove leading '0' if present
  if (cleanNumber.startsWith('0')) {
    cleanNumber = cleanNumber.substring(1);
  }
  
  // Add '234' prefix if not present
  if (!cleanNumber.startsWith('234')) {
    cleanNumber = '234' + cleanNumber;
  }
  
  return cleanNumber;
}

export async function sendWhatsAppNotification(phone: string, message: string) {
  const formattedPhone = formatNigerianPhoneNumber(phone);
  
  const payload: WhatsAppMessage = {
    to: formattedPhone,
    from: process.env.TERMII_SENDER_ID || 'Diboruwa',
    sms: message,
    type: 'plain',
    channel: 'whatsapp',
    api_key: process.env.TERMII_API_KEY || '',
  };

  try {
    const response = await fetch(`${process.env.TERMI_BASE_URL}/api/sms/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // First check if response is ok
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Termii API error: ${errorText}`);
    }

    // Try to parse as JSON, but handle non-JSON responses
    try {
      return await response.json();
    } catch (parseError) {
      const textResponse = await response.text();
      console.log('Raw response:', textResponse);
      return { status: 'success', rawResponse: textResponse };
    }
  } catch (error) {
    console.error('WhatsApp notification error:', error);
    return {
      status: 'error',
      error: error.message
    };
  }
}
