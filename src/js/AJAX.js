class AJAX {
    constructor() {
        this.users = 'http://127.0.0.1:3000/users';
    }

    post() {
        let site_name = document.getElementById('site_name').value,
            email = document.getElementById('email').value;

        let postData = {
            site_name: site_name,
            email: email
        };
        axios.post(this.users,
            JSON.stringify(postData),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function (response) {
                // console.log(response);
                console.log(response.data.email, 'email', response.data.site_name, 'site name');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    postFooterForm() {
        let site_name_footer = document.getElementById('siteName_footer').value,
            email_footer_form = document.getElementById('email_footer').value;

        let postData = {
            site_name_footer: site_name_footer,
            email_footer_form: email_footer_form
        };
        axios.post(this.users,
            JSON.stringify(postData),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function (response) {
                // console.log(response);
                console.log(response.data.email_footer_form, 'email', response.data.site_name_footer, 'site name');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}

export let ajax = new AJAX();