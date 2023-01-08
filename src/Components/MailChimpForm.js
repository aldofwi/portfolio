import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { NewsLetter } from './NewsLetter'

export const MailChimpForm = () => {

    console.log("URL : ", process.env.REACT_APP_MAILCHIMP_URL);

    // Fill the fields in .env file from MailChimp Account.
    const postURL = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            <MailchimpSubscribe 
                url={postURL}
                render={({ subscribe, status, message }) => (
                    <NewsLetter 
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    )
}
