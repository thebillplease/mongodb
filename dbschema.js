// POST Values
{
"hubId" 		: 93230, //unique id from the transmitter. Unmutable.
"sensorId"		: 2, 	// sensor id
"temp"			: 4,	// temperature measurement
"session"		: 5555,	// unique id that is created by sensor every time it powers on.
"category"		: 1,	// category ids maps to strings
"vcc1"			: 98,	// battery measurement before transmission 
"vcc2"			: 97,	// battery measurement after transmission
"seq"			: 45,	// sequence number from 0 - 9999
"status"		: 1,	// 1 - on, 0 - off
}


// Stored Content
"_id"		: 	session, 
"end"		:	ISODate("2014-03-21T12:18:12.648Z"),
"start"		:	ISODate("2014-03-21T12:16:39.047Z"), // enter date
"fBy"		:	ISODate("2014-03-21T12:20:39.047Z"), // freshest by date. calculated on an hourly basis. 
"cat"		:	1, 
"cLabel"	: 	"Chicken ricotta with lime", // user entered label
"notes"		: 	"Remember to add salt", // user entered notes
"avgT"		:	 7, // avg. temp from start till now
"stat"		:	"1",
"tags"		: 	{catname, ricotta, lime}


// Sensors
"_id"	:	ObjectId("0349dasdf932rkasf"),
"hubId"	:	hubId,	
"senId"	:	senId,
"uids"	:	{ session, session, session, session },
"stat"	:	"on",
"bat"	:	97,
"last"	:	ISODate("2014-03-21T12:18:12.648Z")


// Hubs
"_id"	: 	ObjectId("0349dasdf932rkasf"),
"hubId"	:	1234, 
"userId":	
"vs"	:
"last"	:	ISODate("2014-03-21T12:16:44.594Z")


//Sensor schema. A single sensor will update every minute. Sensor object tracks 1hr into 60 1 min. chunks.  
// based on this http://blog.mongodb.org/post/65517193370/schema-design-for-time-series-data-in-mongodb
// https://www.mongodb.com/presentations/mongodb-time-series-data-part-1-setting-stage-sensor-management?_ga=1.96703583.1535413078.1434404051
"_id"		: 	ObjectId("0349dasdf932rkasf"),
"hubId"		: 123,
"senId"		: 123,
"session"	: 5555, // unique id generated every time sensor is turned on.
"val"	: [
	{
            "timestamp" : ISODate("2014-03-21T12:16:44.594Z"),
            "cat"	: 123,
            "temp" : 5,
            "vcc1" : 98,
            "vcc2" : 97,
            "seq"  : 4,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:16:53.617Z"),
            "temp" : 5,
            "vcc1" : 98,
            "vcc2" : 97,
            "seq"  : 5,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:17:01.683Z"),
            "temp" : 5,
            "vcc1" : 98,
            "vcc2" : 97,
            "seq"  : 6,
            "status" : 1
        },
        {
            "timestamp" : ISODate("2014-03-21T12:17:55.223Z"),
            "temp" : 5,
            "vcc1" : 98,
            "vcc2" : 97,
            "seq"  : 7,
            "status" : 1
        }, 
        {
            "timestamp" : ISODate("2014-03-21T12:18:04.653Z"),
            "temp" : 5,
            "vcc1" : 98,
            "vcc2" : 97,
            "seq"  : 8,
            "status" : 1
        }
]



//person
"_id"		: 	ObjectId("0349dasdf932rkasf"),
"username"	: 'username',
"name"	: 'first last',
"password"	: 'password',
"devices"	: [
	{ "hub": id },
	{ "sensor": { id, id, id } }
],
"geo": {lat, long},
"dateRegistered": date

//recommendations
