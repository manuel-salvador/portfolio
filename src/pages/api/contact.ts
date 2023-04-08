import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(400).json({ message: 'Bad request' });

  const { name, email, message } = JSON.parse(req.body);

  const data = {
    service_id: process.env.EMAIL_SERVICE_ID,
    template_id: process.env.EMAIL_TEMPLATE_ID,
    user_id: process.env.EMAIL_PUBLIC_KEY,
    template_params: {
      name,
      email,
      message,
    },
    accessToken: process.env.EMAIL_PRIVATE_KEY,
  };

  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 200) res.status(200).json({ message: 'OK' });
      if (response.status === 400) res.status(402).json({ message: 'Something went wrong' });
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
}
