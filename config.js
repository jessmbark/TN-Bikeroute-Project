var config = {
    style: 'mapbox://styles/jessmbark/clzegdw5o007n01p65z2fesku',
    accessToken: 'pk.eyJ1IjoiamVzc21iYXJrIiwiYSI6ImNseGRpNHRleDA2aDQya3BvM2JkcTQ4aWwifQ.Ots9CM5oT7Yn1YMSqQ-pew',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bike Route Report Card',
    subtitle: 'Do bike routes across the state of Tennessee pass the test?',
    byline: 'By: Jessica M. Barker',
    footer: 'You can find the GitHub repository containing the code for this analysis <a href="https://github.com/jessmbark/TN-Bikeroute-Process/tree/main">here</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Big Picture',
            description: 'Tennessee, like many other states, emplotys a consulting firm to grade roads from state, county and city systems in terms of bicycle safety. Those <a href="https://nacto.org/docs/usdg/bicylce_Level_of_service_model_sprinkle_consulting.pdf">grades</a> are determined by the score that a road gets on a number of factors. Some of those factors include speed limit, width of the road, and bicycle lane availability. This map highlights all of the routes graded in Tennessee on an A-F scale, with higher grades being greener and lower grades being more red.',
            location: {
                center: [-85.892, 35.901],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'layer-name',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'layer-name',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mostly Flunking',
            image: '/Users/jessicabarker/Documents/Lede/TNBikeRouteMapStuff/bikemileagechart.png',
            description: 'Over 2,500 miles received a failing grade. This chart also shows that only about 2,000 miles of route received an A grade. Most routes fell somewhere in the middle, but over half of the mileage could not even earn a C.',
            location: {
                center: [-85.892, 35.901],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
        }
    ]
};
