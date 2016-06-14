import {Injectable} from '@angular/core';
import {HomeComponent, DataComponent, GeeksComponent, AboutUsComponent, HeaderComponent, RouteComponent} from './interfaces.ts';

export class Data implements DataComponent {
    //Page: Home 
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

    //Page: Meet the Geeks
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

    //Page: A sneak peak
    aboutUsComponent: AboutUsComponent = {
        title: "A Sneak Peak",
        imagePath: "about-us.jpg",
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

    //Page: Header
    headerComponent:HeaderComponent = {
        //The ask us global logo image path
        imagePath: "logo.jpg",
        //This is complex!! Better not to mess around with this.
        //Contact Vinod Mohanan if any changes are needed with routes.
        routeComponent:[{
            name:"Home",
            routes:['Home']
        },{
            name:"Masters of some",
            routes:['Services']
        },{
            name:"Meet the Geeks",
            routes:['OurGeeks']
        },{
            name:"A sneak Peak",
            routes:['AboutUs']
        },{
            name:"What's tending?",
            routes:['Trending']
        },{
            name:"The Workshop",
            routes:['ContactUs']
        }]
    };
}