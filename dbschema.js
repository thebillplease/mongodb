// POST Values
{
"sensorId": 2,
"temp": 4,
"category": 1,
"dateEntered": ISODate("2014-03-01T08:00:00Z"), 
"vcc1": 98,
"vcc2": 97,
"seq": 45,
"status": 1,
}

//Sensor schema
"_id"	: 	ObjectId("0349dasdf932rkasf"),
"end"	:	ISODate("2014-03-21T12:18:12.648Z"),
"start"	:	ISODate("2014-03-21T12:16:39.047Z"),
"dateEntered"	: ISODate("2014-03-21T12:15:39.047Z"),
"sensorId"	: 3,
"category"	: 1,
"values"	: [
	{
            "timestamp" : ISODate("2014-03-21T12:16:44.594Z"),
            "temp" : 5,
            "vcc2" : 98,
            "vcc1" : 97,
            "seq"  : 4,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:16:53.617Z"),
            "temp" : 5,
            "vcc2" : 98,
            "vcc1" : 97,
            "seq"  : 5,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:17:01.683Z"),
            "temp" : 5,
            "vcc2" : 98,
            "vcc1" : 97,
            "seq"  : 6,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:17:55.223Z"),
            "temp" : 5,
            "vcc2" : 98,
            "vcc1" : 97,
            "seq"  : 7,
            "status" : 1
        }, 
        {
            "timestamp" : ISODate("2014-03-21T12:18:04.653Z"),
            "temp" : 5,
            "vcc2" : 98,
            "vcc1" : 97,
            "seq"  : 8,
            "status" : 1
        }
]



//sensor agregated
"_id": $sensorId + $dateEntered, // how to tie container to specific updates
"sensorId": 3,
"category": 1,
"catLabel": "Spaghetti with meatballs",
"tempAvg": 4,
"freshBy": ISODate("2014-03-21T12:17:55.223Z"), //or calculated on fe
"dateEntered": ISODate("2014-03-21T12:17:55.223Z"),
"status": 1,
"batteryStatus": 40,
"user":[
	{
	"additionalReminder": date,
	"notes": string	
	}

]

//person
"username"	: 'username',
"name"	: 'first last',
"password"	: 'password',
"devices"	: [
	{ "transmitter": id },
	{ "sensor": { id, id, id } }
],
"geo": {lat, long},
"dateRegistered": date

//recommendations