export async function post() {
    const MAILERLIT_API_KEY = process.env['MAILERLIT_API_KEY']
    try {
      const res = await fetch(
        'https://api.mailerlite.com/api/v2/groups/109948418/subscribers',
        {
          method: 'POST',
          headers: {
            Authorization: `Token ${MAILERLIT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            double_opt_in: true,
          }),
        }
      )
      if (res.ok) {
        return {
          status: 200,
          body: JSON.stringify({
            message: 'email sent!',
          }),
        }
      }
      if (res.status !== 200) {
        return {
          status: 400,
          body: JSON.stringify({
            message: 'bad request',
          }),
        }
      }
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({
          message: 'something went wrong with the email submit!',
        }),
      }
    }
  }