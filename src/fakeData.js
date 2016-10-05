/**
 * Scraped Data from: http://www.edmunds.com/tco.html because True Cost API was down here: http://edmunds.mashery.com/io-docs */

const fakeData = {};
fakeData.makes = {"Acura":{"id":200002038,"name":"Acura","niceName":"acura"},"Audi":{"id":200000001,"name":"Audi","niceName":"audi"},"BMW":{"id":200000081,"name":"BMW","niceName":"bmw"},"Buick":{"id":200006659,"name":"Buick","niceName":"buick"},"Cadillac":{"id":200001663,"name":"Cadillac","niceName":"cadillac"},"Chevrolet":{"id":200000404,"name":"Chevrolet","niceName":"chevrolet"},"Chrysler":{"id":200003644,"name":"Chrysler","niceName":"chrysler"},"Dodge":{"id":200009788,"name":"Dodge","niceName":"dodge"},"FIAT":{"id":200033022,"name":"FIAT","niceName":"fiat"},"Ford":{"id":200005143,"name":"Ford","niceName":"ford"},"GMC":{"id":200007302,"name":"GMC","niceName":"gmc"},"Honda":{"id":200001444,"name":"Honda","niceName":"honda"},"HUMMER":{"id":200004021,"name":"HUMMER","niceName":"hummer"},"Hyundai":{"id":200001398,"name":"Hyundai","niceName":"hyundai"},"Infiniti":{"id":200000089,"name":"Infiniti","niceName":"infiniti"},"Jaguar":{"id":200003196,"name":"Jaguar","niceName":"jaguar"},"Jeep":{"id":200001510,"name":"Jeep","niceName":"jeep"},"Kia":{"id":200003063,"name":"Kia","niceName":"kia"},"Land Rover":{"id":200006582,"name":"Land Rover","niceName":"landrover"},"Lexus":{"id":200001623,"name":"Lexus","niceName":"lexus"},"Lincoln":{"id":200001777,"name":"Lincoln","niceName":"lincoln"},"Mazda":{"id":200004100,"name":"Mazda","niceName":"mazda"},"Mercedes-Benz":{"id":200000130,"name":"Mercedes-Benz","niceName":"mercedesbenz"},"Mercury":{"id":200007711,"name":"Mercury","niceName":"mercury"},"MINI":{"id":200002305,"name":"MINI","niceName":"mini"},"Mitsubishi":{"id":200002915,"name":"Mitsubishi","niceName":"mitsubishi"},"Nissan":{"id":200000201,"name":"Nissan","niceName":"nissan"},"Pontiac":{"id":200002634,"name":"Pontiac","niceName":"pontiac"},"Porsche":{"id":200000886,"name":"Porsche","niceName":"porsche"},"Ram":{"id":200393150,"name":"Ram","niceName":"ram"},"Saab":{"id":200074504,"name":"Saab","niceName":"saab"},"Scion":{"id":200006515,"name":"Scion","niceName":"scion"},"smart":{"id":200038885,"name":"smart","niceName":"smart"},"Subaru":{"id":200004491,"name":"Subaru","niceName":"subaru"},"Suzuki":{"id":200001853,"name":"Suzuki","niceName":"suzuki"},"Toyota":{"id":200003381,"name":"Toyota","niceName":"toyota"},"Volkswagen":{"id":200000238,"name":"Volkswagen","niceName":"volkswagen"},"Volvo":{"id":200010382,"name":"Volvo","niceName":"volvo"}};
fakeData.models = {"accord:Coupe":{"id":"Honda_Accord","name":"Accord Coupe","submodel":"Coupe","nicesubmodel":"coupe","model":"Accord","nicemodel":"accord","link":"/honda/accord","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"accord:Sedan":{"id":"Honda_Accord","name":"Accord Sedan","submodel":"Sedan","nicesubmodel":"sedan","model":"Accord","nicemodel":"accord","link":"/honda/accord","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"accordcrosstour:Hatchback":{"id":"Honda_Accord_Crosstour","name":"Accord Crosstour Hatchback","submodel":"Hatchback","nicesubmodel":"hatchback","model":"Accord Crosstour","nicemodel":"accordcrosstour","link":"/honda/accordcrosstour","years":{"USED":[2010,2011]}},"accordhybrid:Sedan":{"id":"Honda_Accord_Hybrid","name":"Accord Hybrid Sedan","submodel":"Sedan","nicesubmodel":"sedan","model":"Accord Hybrid","nicemodel":"accordhybrid","link":"/honda/accordhybrid","years":{"NEW_USED":[2015],"USED":[2014]}},"accordpluginhybrid:Sedan":{"id":"Honda_Accord_Plug_In_Hybrid","name":"Accord Plug-In Hybrid Sedan","submodel":"Sedan","nicesubmodel":"sedan","model":"Accord Plug-In Hybrid","nicemodel":"accordpluginhybrid","link":"/honda/accordpluginhybrid","years":{"USED":[2014]}},"civic:Coupe":{"id":"Honda_Civic","name":"Civic Coupe","submodel":"Coupe","nicesubmodel":"coupe","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"civic:Hybrid":{"id":"Honda_Civic","name":"Civic Hybrid","submodel":"Hybrid","nicesubmodel":"hybrid","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015],"USED":[2010,2011,2012,2013,2014]}},"civic:Sedan":{"id":"Honda_Civic","name":"Civic Sedan","submodel":"Sedan","nicesubmodel":"sedan","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"civic:Si":{"id":"Honda_Civic","name":"Civic Si","submodel":"Si","nicesubmodel":"si","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015],"USED":[2010,2011,2012,2013,2014]}},"civic:Si w/Navigation":{"id":"Honda_Civic","name":"Civic Si w/Navigation","submodel":"Si w/Navigation","nicesubmodel":"siwnavigation","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015],"USED":[2013,2014]}},"civic:Si w/Navigation and Summer Tires":{"id":"Honda_Civic","name":"Civic Si w/Navigation and Summer Tires","submodel":"Si w/Navigation and Summer Tires","nicesubmodel":"siwnavigationandsummertires","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015],"USED":[2013,2014]}},"civic:Si w/Summer Tires":{"id":"Honda_Civic","name":"Civic Si w/Summer Tires","submodel":"Si w/Summer Tires","nicesubmodel":"siwsummertires","model":"Civic","nicemodel":"civic","link":"/honda/civic","years":{"NEW_USED":[2015],"USED":[2013,2014]}},"crosstour:Hatchback":{"id":"Honda_Crosstour","name":"Crosstour Hatchback","submodel":"Hatchback","nicesubmodel":"hatchback","model":"Crosstour","nicemodel":"crosstour","link":"/honda/crosstour","years":{"NEW_USED":[2015],"USED":[2012,2013,2014]}},"crv:SUV":{"id":"Honda_CR_V","name":"CR-V SUV","submodel":"SUV","nicesubmodel":"suv","model":"CR-V","nicemodel":"crv","link":"/honda/crv","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"crz:Hatchback":{"id":"Honda_CR_Z","name":"CR-Z Hatchback","submodel":"Hatchback","nicesubmodel":"hatchback","model":"CR-Z","nicemodel":"crz","link":"/honda/crz","years":{"NEW_USED":[2015,2016],"USED":[2011,2012,2013,2014]}},"element:SUV":{"id":"Honda_Element","name":"Element SUV","submodel":"SUV","nicesubmodel":"suv","model":"Element","nicemodel":"element","link":"/honda/element","years":{"USED":[2010,2011]}},"fit:Hatchback":{"id":"Honda_Fit","name":"Fit Hatchback","submodel":"Hatchback","nicesubmodel":"hatchback","model":"Fit","nicemodel":"fit","link":"/honda/fit","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013]}},"hrv:SUV":{"id":"Honda_HR_V","name":"HR-V SUV","submodel":"SUV","nicesubmodel":"suv","model":"HR-V","nicemodel":"hrv","link":"/honda/hrv","years":{"NEW_USED":[2016]}},"insight:Hatchback":{"id":"Honda_Insight","name":"Insight Hatchback","submodel":"Hatchback","nicesubmodel":"hatchback","model":"Insight","nicemodel":"insight","link":"/honda/insight","years":{"USED":[2010,2011,2012,2013,2014]}},"odyssey:Minivan":{"id":"Honda_Odyssey","name":"Odyssey Minivan","submodel":"Minivan","nicesubmodel":"minivan","model":"Odyssey","nicemodel":"odyssey","link":"/honda/odyssey","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"pilot:SUV":{"id":"Honda_Pilot","name":"Pilot SUV","submodel":"SUV","nicesubmodel":"suv","model":"Pilot","nicemodel":"pilot","link":"/honda/pilot","years":{"NEW_USED":[2015,2016],"USED":[2010,2011,2012,2013,2014]}},"ridgeline:Crew Cab":{"id":"Honda_Ridgeline","name":"Ridgeline Crew Cab","submodel":"Crew Cab","nicesubmodel":"crewcab","model":"Ridgeline","nicemodel":"ridgeline","link":"/honda/ridgeline","years":{"USED":[2010,2011,2012,2013,2014]}}};
fakeData.styles = {"Touring V-6 2dr Coupe (3.5L 6cyl 6A)":{"id":401575252,"price":34225.0,"trim":"Touring V-6","styleLongName":"3.5L V6 6-speed Automatic"},"LX-S w/Honda Sensing 2dr Coupe (2.4L 4cyl CVT)":{"id":401575251,"price":25725.0,"trim":"LX-S w/Honda Sensing","styleLongName":"2.4L 4-cyl. CVT Automatic"},"EX w/Honda Sensing 2dr Coupe (2.4L 4cyl CVT)":{"id":401575249,"price":27850.0,"trim":"EX w/Honda Sensing","styleLongName":"2.4L 4-cyl. CVT Automatic"},"EX 2dr Coupe (2.4L 4cyl 6M)":{"id":401575245,"price":26000.0,"trim":"EX","styleLongName":"2.4L 4-cyl. 6-speed Manual"},"EX-L V-6 2dr Coupe (3.5L 6cyl 6A)":{"id":401575241,"price":31025.0,"trim":"EX-L V-6","styleLongName":"3.5L V6 6-speed Automatic"},"EX-L w/Navigation and Honda Sensing 2dr Coupe (2.4L 4cyl CVT)":{"id":401575250,"price":30845.0,"trim":"EX-L w/Navigation and Honda Sensing","styleLongName":"2.4L 4-cyl. CVT Automatic"},"LX-S 2dr Coupe (2.4L 4cyl 6M)":{"id":401575244,"price":23875.0,"trim":"LX-S","styleLongName":"2.4L 4-cyl. 6-speed Manual"},"EX-L V-6 w/Navigation and Honda Sensing 2dr Coupe (3.5L 6cyl 6A)":{"id":401575248,"price":33025.0,"trim":"EX-L V-6 w/Navigation and Honda Sensing","styleLongName":"3.5L V6 6-speed Automatic"},"LX-S 2dr Coupe (2.4L 4cyl CVT)":{"id":401575246,"price":24725.0,"trim":"LX-S","styleLongName":"2.4L 4-cyl. CVT Automatic"},"EX 2dr Coupe (2.4L 4cyl CVT)":{"id":401575242,"price":26850.0,"trim":"EX","styleLongName":"2.4L 4-cyl. CVT Automatic"},"EX-L V-6 2dr Coupe (3.5L 6cyl 6M)":{"id":401575247,"price":31025.0,"trim":"EX-L V-6","styleLongName":"3.5L V6 6-speed Manual"},"EX-L 2dr Coupe (2.4L 4cyl CVT)":{"id":401575243,"price":28845.0,"trim":"EX-L","styleLongName":"2.4L 4-cyl. CVT Automatic"}};
fakeData.chart = {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'True Cost Comparison'
    },

    subtitle: {
        text: 'Source: <a href="http://www.edmunds.com/tco.html">Edmunds API</a>'
    },

    xAxis: {
        min:2013,
        max:2017,
        gridLineWidth: 1,
        title: {
            text: 'Year'
        },
        labels: {
            format: '{value}'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 2014.5,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
                text: 'My Minimum Year'
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Vehicle Retail Price'
        },
        labels: {
            format: '${value}'
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 24000,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'My Maximun Price',
                x: -10
            },
            zIndex: 3
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.x} {point.country}</h3></th></tr>' +
        '<tr><th>Retail Price:</th><td>${point.y}</td></tr>' +
        '<tr><th>True 5yr Cost:</th><td>${point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 2016, y: 23700, z: 27500, name: 'Accord EX-L V6', country: 'Honda Accord Coupe EX-L V6' },
            { x: 2016, y: 21400, z: 26500, name: 'Accord EX', country: 'Honda Accord Coupe EX V4' },
            { x: 2015, y: 24500, z: 27350, name: 'Accord Touring', country: 'Honda Accord Coupe Touring' },
            { x: 2014, y: 18450, z: 23750, name: 'Accord EX-L V6', country: 'Honda Accord Coupe EX-L V6' },
            { x: 2014, y: 16500, z: 27350, name: 'Accord EX', country: 'Honda Accord Coupe EX V4' }
        ]
    }]
};

export default fakeData;