import React from 'react';

const Footer = () => {
    return (
        <footer class='bg-dark text-center text-white'>
            <div class='container p-4'>
                <section class='mb-3'>
                    <a
                        class='btn btn-outline-light btn-floating m-2'
                        href='https://www.facebook.com/jorgedaniel.gonzalezestrada.5/'
                        role='button'>
                        <i class='fab fa-facebook-f'></i>
                    </a>

                    <a
                        class='btn btn-outline-light btn-floating m-2'
                        href='https://www.instagram.com/danielg502/'
                        role='button'>
                        <i class='fab fa-instagram'></i>
                    </a>

                    <a
                        class='btn btn-outline-light btn-floating m-2'
                        href='https://www.linkedin.com/in/jorge-gonz%C3%A1lez-gt502/'
                        role='button'>
                        <i class='fab fa-linkedin-in'></i>
                    </a>

                    <a
                        class='btn btn-outline-light btn-floating m-2'
                        href='https://github.com/DanielG502'
                        role='button'>
                        <i class='fab fa-github'></i>
                    </a>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
