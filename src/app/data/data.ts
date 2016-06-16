import {Injectable} from '@angular/core';
import {ServicesComponent, ContactUsComponent, HomeComponent, DataComponent, GeeksComponent, AboutUsComponent, HeaderComponent, RouteComponent} from './interfaces.ts';

//This class contains the contents displayed on the HTML pages.

export class Data implements DataComponent {
    /******************************************** Page: Home ****************************************************************/
    homeComponent: HomeComponent = {
        //Running text [string]
        intro: `We are an end to end IT consulting company focussed on offering specialized 
            and highly customized technology solutions for small and medium sized businesses. 
            We offer expertise in building systems ground up or migrating to newer platforms 
            to best serve the needs of your business.`,
        //flipping cards
        //front => One side of the cards [String]
        //back => Other side of the card [Array of string]
        cards: [
            { front: "Strategies and Planning", back: ['Planning', 'Project Management', 'Testing', 'Training and Implementation'] },
            { front: "Technology Assessments", back: ['Analyze your IT infrastructure', 'Identify the vulnerabilities', 'Set priorities'] },
            { front: "Implementation", back: ['Test', 'Re-test', 'Implement'] },
            { front: "Strategies and Planning", back: ['Our experts can take care of your project budgeting', 'We can suggest the best solutions to suite your objectives and budget'] },
        ]
    };


    /******************************************** Page: Meet the Geeks ****************************************************************/
    geeksComponent: GeeksComponent = {
        //Title on top of the page[String]
        title: "Meet Our Geeks",
        //Each person is a an entry in the array
        //name => name of the person[String]
        //imagePath => image name[String]
        //position => the position of the person [String]
        //geekMagnets => The person's interests [String]
        //description => the description of the person [String]
        persons: [
            {
                name: "Prasanna Rajendran",
                imagePath: "prasanna.jpg",
                position: "Managing Director and a passionate Teacher",
                geekMagnets: "GIS, Remotesensing",
                description: "When he is not grooming the future Geologists, he loves to kick a soccer ball around."
            },
            {
                name: "Narayanan Asokan",
                imagePath: "narayanan.jpg",
                position: "Managing Director and a problem solver",
                geekMagnets: "Information Technology",
                description: "When he is not building the coolest thing out there......well... he always is."
            }]
    };


    /******************************************** Page: A sneak peak ****************************************************************/
    aboutUsComponent: AboutUsComponent = {
        //Page title[String]
        title: "A Sneak Peak",
        //Image path[String]
        imagePath: "about-us.jpg",
        //Rest of the text on the screen -This is capable of taking HTML. [String]
        description: `Ask Us Global Solutions is an innovative and rapidly growing end to end IT consulting firm. We offer solutions to most challenging
    issues in the complex IT world, by applying the technical and domain expertise we have gained over the years.
    <BR/><BR/>
    We have been offering products and solutions to businesses in Chennai and beyond. Our creations stand out of the crowd, since we 
    are experts in choosing the right technology for the job and customizing it to the needs of the clients.
    <BR/><BR/>
    You can trust our experts on a range of areas including but not limited to IT guidance, management and support there by saving
    your precious time to develop the core area of your business while we have your IT covered.
    <BR/><BR/>
    <hr>
    <b> We are recogonized by the Industry </b><BR/><BR/>
      We have been recogonized by major organizations and clients in the industry.
    <BR/>
    <hr>  

    <b>We're connected</b><BR/><BR/>
    The success of your IT company also lies in its strategic alliances and partnerships. 
    Ask Us Global Solutions has cultivated relationships with some of the major industry players to provide you a 
    complete technical support team.`
    };


    /******************************************** Page: Header ****************************************************************/
    headerComponent: HeaderComponent = {
        //The ask us global logo image path
        imagePath: "logo.jpg",
        //This is complex!! Better not to mess around with this.
        //Contact Vinod Mohanan if any changes are needed with routes.
        routeComponent: [{
            name: "Home",
            routes: ['Home']
        }, {
                name: "Masters of some",
                routes: ['Services']
            }, {
                name: "Meet the Geeks",
                routes: ['OurGeeks']
            }, {
                name: "A sneak Peak",
                routes: ['AboutUs']
            },/*{
            name:"What's tending?",
            routes:['Trending']
        },*/{
                name: "The Workshop",
                routes: ['ContactUs']
            }]
    };

    /******************************************** Page: The Workshop ****************************************************************/
    contactUsComponent: ContactUsComponent = {
        title: "The Workshop",
        addressText: "Our Humans break ground here:",
        address: `Ask Us Global Solutions<BR/>
        No 5, Old Fort Street, Near Be Well Hospital, Poonamalle,<BR/>
        Chennai, Tamil Nadu 600056`,
        phoneText: "Conversely, if you wish to honor Alexander Graham Bell like we do, ring us at:",
        phoneNo: "7373635553/9994010222",
        otherContactsText: "We are also accessible through other good stuff:",
        otherContacts: [
            { imagePath: "mail.png", link: "mailto:askusglobal@gmail.com" },
            { imagePath: "fb.png", link: "https://www.facebook.com/askusglobal/" }
        ]
    };
    /******************************************** Page: Masters of some ****************************************************************/
    servicesComponent: ServicesComponent = {
        title: "Masters of some",
        services: [
            {
                header: "Strategies and Planning:",
                description: `Getting reliable results from a telecommunications system requires in-depth planning, installation and management. Our team of IT experts understands every aspect of telecommunications — from planning to project management, installation, testing, training and implementation.`,
                imagePath: "strategies.jpg"
            },
            {
                header: "Technology Assessments:",
                description: `The quality, performance and security of your network can be vastly improved with our technology audits. Working together with your in-house teams, we analyze your IT infrastructure in order to identify vulnerabilities. Then we set priorities that match your personnel and budget requirements.`,
                imagePath: "tech-assessments.jpg"
            },
            {
                header: "Implementation:",
                description: `Installing and testing your new platforms can cause nightmares for even the most seasoned IT professional. Ask Us Global Solutions thoroughly tests and re-tests all devices and software prior to your switch-over date. You can rest assured that from the moment you connect your new system, all data and communications will function as you need it to.`,
                imagePath: "strategies.jpg"
            },
            {
                header: "IT Budget Planning:",
                description: `The highly trained and experienced project managers at Ask Us Global Solutions can help you acquire the technology you require to reach your business objectives within a budget that works for you.`,
                imagePath: "strategies.jpg"
            }
        ],
        otherServices: ['Application development',
            'Application Maintenance',
            'Application or network enhancement',
            'Platform migration']
    }
}