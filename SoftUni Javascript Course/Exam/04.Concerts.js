function solve(args) {
    var obj = {};
    var outputobj = {};
    for (var i = 0; i < args.length; i++) {
        var currTimeTable = args[i].split(" | ");
        var band = currTimeTable[0];
        var town = currTimeTable[1];
        var date = currTimeTable[2];
        var venue = currTimeTable[3];

        if (!(town in obj)) {
            obj[town] = {};
        }
        if ((town in obj) && !(venue in obj[town])) {
            obj[town][venue] = [];
        }
        if ((town in obj) && (venue in obj[town])) {
            obj[town][venue].push(band);
        }
    }

    var towns = [];
    for (var town in obj) {
        towns.push(town);
    }
    towns = towns.sort();

    var venues = [];
    var bands = [];
    for (var i = 0; i < towns.length; i++) {
        var town = towns[i];

        for (var venue in obj[town]) {
            venues.push(venue);
            bands.push(obj[town][venue]);
        }

        venues.sort();

    }
    var count = 0;
    for (var cTown in towns) {
        var currTown = towns[cTown];
        outputobj[currTown] = {};
        for (var j = 0; j < venues.length; j++) {
            var currVenue = venues[j];
            if (currVenue in obj[currTown]) {
                for (var l =0; l<bands.length; l++) {
                    if (obj[currTown][currVenue] == bands[l]) {
                        var modbands;
                        modbands = bands[l].filter(function (elem, pos) {
                            return bands[l].indexOf(elem) == pos;
                        });
                        modbands.sort();
                        outputobj[currTown][currVenue] = modbands;
                    }
                }
            }

        }
    }

    //return outputobj;
    return JSON.stringify(outputobj);


    //return obj;
}
console.log(solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
'Helloween | London | 28-Jul-2014 | Wembley Stadium',
'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
'Metallica | London | 03-Oct-2014 | Olympic Stadium',
'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium']));