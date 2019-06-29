var imageUrls = [
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1496328289142-9a47ef5b544b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1515898913320-f38370edab7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1496328488450-9c5c5d555148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1520608421741-68228b76b6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1501595685668-178fc57e6146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1464316325666-63beaf639dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1508230945673-ed91f6e5370f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1466248597128-17a2d5f14664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1518494989979-ce3552cdbc40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1552533236-b76e85fca743?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1500003554709-5b4ed3db9b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1530240293214-d1b236d65b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1547565933-13a49bfa933d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1549158329-16e8046dd9d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1512821231209-3cd3e4df62f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1504205936513-600de265ae05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1503471630403-26ef71554b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1514862038465-f9cb76a7a74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1517792844039-e52afb564132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1529349478482-df2f8fe5626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1527363744318-67c47e2533b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524790-5872ab69e309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1532386470337-0088750f76a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524789-59ac0ed1d2d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1552515717-d9ba96cbafb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1547282183-68be9f696735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553034158-1ce7dd865d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1519899602147-8d3b53e450b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1545647185-72257180ec86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1481967996077-34d09ae064b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1490174651618-63469b221857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1463671838805-f0ecd43c3492?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1501812178034-3a1d65d49b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524788-3997b32fe069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524788-4d21ef434fae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524805-28dbfc2f84fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1445437303333-50e823122ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1547579442-f4e8520ddd05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1550647382-28d025deded3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1541834486-59ed66362fb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1536784263931-c9bf77120269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1536756300610-6231d68aaf9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1529468135329-8ccc29f71554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1524292691042-82ed9c62673b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524808-eef8eb03cf29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1475698066764-3dc9200f1c93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1522624159390-c31243607917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521386787102-15154d6bbca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1518164969361-b3ed71d5e7e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1437751695201-298be97a82a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1553524787-74454297efc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1526653111374-539dc6d42575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1523008570152-4989932dd67c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1426122402199-be02db90eb90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1551732288-c07957a65d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1472553384749-8596bacb90c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1550647512-8b8a24d4f646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1521710477698-9d35596e5195?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1504788568317-0baaae182dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1524347056892-b804ce62bf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1509912825984-e558e5d90ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1534949363881-08e816c98368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1533400931944-cb873dfe4f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1465817190882-2307152364c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1535375743084-67f559ec192f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1550244333-277e6564d59e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1549355238-8ca5c7e3c3b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1550427686-55e1047fc46b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1549519115-2265b3ed3717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
]

var rawData = [
{
"price": 431949,
"beds": 0,
"baths": 3,
"sqft": 559,
"address": "9940 63rd Rd APT 11Y, Rego Park, NY",
"latitude": 40.71858,
"longitude": -73.86065
},
{
"price": 135702,
"beds": 0,
"baths": 3,
"sqft": 521,
"address": "6319 Everton St, Flushing, NY",
"latitude": 40.72283,
"longitude": -73.86184
},
{
"price": 210084,
"beds": 2,
"baths": 3,
"sqft": 386,
"address": "6414 99th St, Flushing, NY",
"latitude": 40.7154,
"longitude": -73.8551
},
{
"price": 294016,
"beds": 3,
"baths": 3,
"sqft": 1704,
"address": "6565 Wetherole St APT 2D, Rego Park, NY",
"latitude": 40.73542,
"longitude": -73.87739
},
{
"price": 28511,
"beds": 3,
"baths": 2,
"sqft": 1672,
"address": "9611 65th Rd APT 103, Rego Park, NY",
"latitude": 40.72436,
"longitude": -73.86697
},
{
"price": 223575,
"beds": 3,
"baths": 0,
"sqft": 596,
"address": "6361 99th St APT C12, Rego Park, NY",
"latitude": 40.72899,
"longitude": -73.87242
},
{
"price": 155876,
"beds": 0,
"baths": 1,
"sqft": 1401,
"address": "6633 Saunders St, Rego Park, NY",
"latitude": 40.73756,
"longitude": -73.87283
},
{
"price": 287576,
"beds": 0,
"baths": 2,
"sqft": 1581,
"address": "6361 99th St APT A6, Rego Park, NY",
"latitude": 40.71234,
"longitude": -73.86527
},
{
"price": 294976,
"beds": 2,
"baths": 2,
"sqft": 1580,
"address": "8514 65th Rd, Flushing, NY",
"latitude": 40.71778,
"longitude": -73.87993
},
{
"price": 321159,
"beds": 1,
"baths": 1,
"sqft": 1288,
"address": "6070 Woodhaven Blvd APT 5E, Flushing, NY",
"latitude": 40.71571,
"longitude": -73.86871
},
{
"price": 484467,
"beds": 3,
"baths": 2,
"sqft": 150,
"address": "6070 Woodhaven Blvd APT 4F, Flushing, NY",
"latitude": 40.73393,
"longitude": -73.86492
},
{
"price": 170541,
"beds": 1,
"baths": 3,
"sqft": 1211,
"address": "9952 66th Rd APT 1Q, Rego Park, NY",
"latitude": 40.72501,
"longitude": -73.87497
},
{
"price": 409768,
"beds": 0,
"baths": 1,
"sqft": 1388,
"address": "6115 97th St APT 7J, Rego Park, NY",
"latitude": 40.71409,
"longitude": -73.8554
},
{
"price": 439604,
"beds": 1,
"baths": 2,
"sqft": 204,
"address": "98-20 62nd Dr # 8M, Rego Park, NY",
"latitude": 40.72952,
"longitude": -73.86707
},
{
"price": 143607,
"beds": 1,
"baths": 1,
"sqft": 109,
"address": "9931 66th Ave APT 7A, Rego Park, NY",
"latitude": 40.73658,
"longitude": -73.86365
},
{
"price": 195736,
"beds": 0,
"baths": 0,
"sqft": 1427,
"address": "6934 Alderton St, Rego Park, NY",
"latitude": 40.72904,
"longitude": -73.87058
},
{
"price": 152837,
"beds": 0,
"baths": 2,
"sqft": 61,
"address": "9611 65th Rd APT 414, Rego Park, NY",
"latitude": 40.72535,
"longitude": -73.85711
},
{
"price": 159078,
"beds": 0,
"baths": 0,
"sqft": 1241,
"address": "6623 Alderton St, Flushing, NY",
"latitude": 40.72503,
"longitude": -73.87988
},
{
"price": 310547,
"beds": 1,
"baths": 3,
"sqft": 651,
"address": "98120 Queens Blvd APT 3A, Rego Park, NY",
"latitude": 40.73699,
"longitude": -73.87743
},
{
"price": 141317,
"beds": 2,
"baths": 1,
"sqft": 1791,
"address": "8559 67th Ave, Rego Park, NY",
"latitude": 40.72879,
"longitude": -73.87873
},
{
"price": 74946,
"beds": 2,
"baths": 0,
"sqft": 95,
"address": "6155 98th St APT 5B, Rego Park, NY",
"latitude": 40.72596,
"longitude": -73.86711
},
{
"price": 498296,
"beds": 2,
"baths": 0,
"sqft": 1927,
"address": "6115 97th St APT 2D, Rego Park, NY",
"latitude": 40.7366,
"longitude": -73.85029
},
{
"price": 448077,
"beds": 1,
"baths": 1,
"sqft": 380,
"address": "9737 63rd Rd APT 3K, Rego Park, NY",
"latitude": 40.72544,
"longitude": -73.85023
},
{
"price": 137362,
"beds": 0,
"baths": 3,
"sqft": 1283,
"address": "9805 63rd Rd APT 5M, Rego Park, NY",
"latitude": 40.7313,
"longitude": -73.87761
},
{
"price": 22988,
"beds": 0,
"baths": 0,
"sqft": 1445,
"address": "6565 Wetherole St APT 3R, Rego Park, NY",
"latitude": 40.72382,
"longitude": -73.85929
},
{
"price": 468948,
"beds": 3,
"baths": 3,
"sqft": 702,
"address": "6550 Wetherole St APT 4N, Flushing, NY",
"latitude": 40.71543,
"longitude": -73.86299
},
{
"price": 442467,
"beds": 1,
"baths": 1,
"sqft": 549,
"address": "6155 98th St APT 9L, Rego Park, NY",
"latitude": 40.72423,
"longitude": -73.86657
},
{
"price": 196353,
"beds": 1,
"baths": 3,
"sqft": 1506,
"address": "61-45 98th St APT 12J, Rego Park, NY",
"latitude": 40.7292,
"longitude": -73.86442
},
{
"price": 333027,
"beds": 2,
"baths": 3,
"sqft": 1205,
"address": "6135 98th St APT 9B, Rego Park, NY",
"latitude": 40.72338,
"longitude": -73.87018
},
{
"price": 123522,
"beds": 0,
"baths": 1,
"sqft": 1608,
"address": "9972 66th Rd APT 7AA, Rego Park, NY",
"latitude": 40.73709,
"longitude": -73.86066
},
{
"price": 250342,
"beds": 3,
"baths": 1,
"sqft": 390,
"address": "8558 67th Dr, Rego Park, NY",
"latitude": 40.73704,
"longitude": -73.87703
},
{
"price": 142534,
"beds": 3,
"baths": 2,
"sqft": 1711,
"address": "6538 Austin St APT 4D, Rego Park, NY",
"latitude": 40.72692,
"longitude": -73.87981
},
{
"price": 137123,
"beds": 0,
"baths": 0,
"sqft": 74,
"address": "6538 Austin St APT 3A, Rego Park, NY",
"latitude": 40.73364,
"longitude": -73.87419
},
{
"price": 353588,
"beds": 2,
"baths": 3,
"sqft": 640,
"address": "6070 Woodhaven Blvd APT 5A, Flushing, NY",
"latitude": 40.72796,
"longitude": -73.86512
},
{
"price": 389387,
"beds": 1,
"baths": 2,
"sqft": 1461,
"address": "6550 Wetherole St APT 1R, Flushing, NY",
"latitude": 40.71606,
"longitude": -73.8673
},
{
"price": 72431,
"beds": 3,
"baths": 2,
"sqft": 1319,
"address": "9820 62nd Dr APT 8A, Rego Park, NY",
"latitude": 40.73814,
"longitude": -73.8701
},
{
"price": 426135,
"beds": 0,
"baths": 3,
"sqft": 906,
"address": "9952 66th Rd APT 7AA, Rego Park, NY",
"latitude": 40.72709,
"longitude": -73.86172
},
{
"price": 295848,
"beds": 2,
"baths": 1,
"sqft": 1035,
"address": "6384 Saunders St APT 3F, Rego Park, NY",
"latitude": 40.72339,
"longitude": -73.86803
},
{
"price": 24097,
"beds": 3,
"baths": 3,
"sqft": 455,
"address": "6115 97th St APT 14R, Rego Park, NY",
"latitude": 40.7121,
"longitude": -73.85308
},
{
"price": 400750,
"beds": 3,
"baths": 2,
"sqft": 1758,
"address": "63109 Saunders St APT A12, Rego Park, NY",
"latitude": 40.72116,
"longitude": -73.85974
},
{
"price": 75265,
"beds": 3,
"baths": 1,
"sqft": 1037,
"address": "6550 Wetherole St APT 1M, Flushing, NY",
"latitude": 40.73141,
"longitude": -73.85519
},
{
"price": 401223,
"beds": 3,
"baths": 1,
"sqft": 263,
"address": "99-60 63rd Rd # 7Z, Rego Park, NY",
"latitude": 40.71513,
"longitude": -73.86986
},
{
"price": 440576,
"beds": 3,
"baths": 1,
"sqft": 1200,
"address": "99-52 66th Rd # 3S, Rego Park, NY",
"latitude": 40.71639,
"longitude": -73.8564
},
{
"price": 305561,
"beds": 2,
"baths": 0,
"sqft": 1344,
"address": "6336 Wetherole St, Flushing, NY",
"latitude": 40.72694,
"longitude": -73.86446
},
{
"price": 81454,
"beds": 2,
"baths": 3,
"sqft": 666,
"address": "6477 Alderton St, Flushing, NY",
"latitude": 40.7141,
"longitude": -73.8538
},
{
"price": 227236,
"beds": 3,
"baths": 2,
"sqft": 600,
"address": "9915 66th Ave APT 2C, Rego Park, NY",
"latitude": 40.73728,
"longitude": -73.85619
},
{
"price": 420967,
"beds": 0,
"baths": 2,
"sqft": 162,
"address": "6485 Saunders St, Flushing, NY",
"latitude": 40.73225,
"longitude": -73.8591
},
{
"price": 454270,
"beds": 0,
"baths": 3,
"sqft": 893,
"address": "9609 67th Ave APT 1E, Rego Park, NY",
"latitude": 40.73799,
"longitude": -73.87408
},
{
"price": 186532,
"beds": 3,
"baths": 3,
"sqft": 491,
"address": "6538 Booth St APT 4F, Rego Park, NY",
"latitude": 40.73456,
"longitude": -73.86793
},
{
"price": 252792,
"beds": 1,
"baths": 1,
"sqft": 1155,
"address": "8730 62nd Ave APT 6C, Flushing, NY",
"latitude": 40.71194,
"longitude": -73.85234
},
{
"price": 201602,
"beds": 3,
"baths": 1,
"sqft": 905,
"address": "99-60 63rd Rd # 5N, Rego Park, NY",
"latitude": 40.72294,
"longitude": -73.86707
},
{
"price": 472621,
"beds": 0,
"baths": 2,
"sqft": 269,
"address": "98-20 62nd Dr # 7M, Rego Park, NY",
"latitude": 40.71826,
"longitude": -73.87559
},
{
"price": 402057,
"beds": 2,
"baths": 2,
"sqft": 1727,
"address": "9737 63rd Rd APT 2D, Rego Park, NY",
"latitude": 40.73946,
"longitude": -73.87383
},
{
"price": 78075,
"beds": 1,
"baths": 1,
"sqft": 513,
"address": "9940 63rd Rd APT 9A, Rego Park, NY",
"latitude": 40.73949,
"longitude": -73.85331
},
{
"price": 375095,
"beds": 1,
"baths": 1,
"sqft": 1435,
"address": "65TH Rd # 114, Rego Park, NY",
"latitude": 40.71586,
"longitude": -73.86499
},
{
"price": 95231,
"beds": 0,
"baths": 0,
"sqft": 346,
"address": "6125 98th St APT 14F, Rego Park, NY",
"latitude": 40.72348,
"longitude": -73.8692
},
{
"price": 139754,
"beds": 1,
"baths": 0,
"sqft": 654,
"address": "6334 Cromwell Cres, Flushing, NY",
"latitude": 40.71013,
"longitude": -73.86272
},
{
"price": 420606,
"beds": 1,
"baths": 1,
"sqft": 9,
"address": "6125 98th St # 14, Rego Park, NY",
"latitude": 40.71174,
"longitude": -73.87614
},
{
"price": 427750,
"beds": 2,
"baths": 1,
"sqft": 1789,
"address": "6537 Alderton St, Flushing, NY",
"latitude": 40.72798,
"longitude": -73.85657
},
{
"price": 282329,
"beds": 3,
"baths": 1,
"sqft": 1323,
"address": "61-35 98th St # 4D, Rego Park, NY",
"latitude": 40.7276,
"longitude": -73.87659
},
{
"price": 71708,
"beds": 0,
"baths": 2,
"sqft": 1750,
"address": "6326 99th St APT 5C, Flushing, NY",
"latitude": 40.72569,
"longitude": -73.86422
},
{
"price": 54252,
"beds": 3,
"baths": 3,
"sqft": 100,
"address": "61-45 98th St # 6H, Rego Park, NY",
"latitude": 40.71306,
"longitude": -73.86353
},
{
"price": 221333,
"beds": 1,
"baths": 2,
"sqft": 1310,
"address": "6135 98th St # 4, Rego Park, NY",
"latitude": 40.72906,
"longitude": -73.85925
},
{
"price": 496414,
"beds": 3,
"baths": 0,
"sqft": 242,
"address": "6125 98th St APT 1D, Rego Park, NY",
"latitude": 40.73268,
"longitude": -73.85119
},
{
"price": 233892,
"beds": 1,
"baths": 2,
"sqft": 65,
"address": "9931 64th Ave APT A1, Rego Park, NY",
"latitude": 40.72087,
"longitude": -73.87777
},
{
"price": 288061,
"beds": 3,
"baths": 2,
"sqft": 917,
"address": "6541 Booth St APT 3J, Rego Park, NY",
"latitude": 40.72107,
"longitude": -73.87248
},
{
"price": 28874,
"beds": 2,
"baths": 1,
"sqft": 1314,
"address": "9963 66th Ave APT B17, Rego Park, NY",
"latitude": 40.73463,
"longitude": -73.85049
},
{
"price": 176782,
"beds": 3,
"baths": 0,
"sqft": 138,
"address": "9921 64th Rd, Flushing, NY",
"latitude": 40.73114,
"longitude": -73.85
},
{
"price": 252453,
"beds": 2,
"baths": 0,
"sqft": 885,
"address": "6217 Alderton St, Flushing, NY",
"latitude": 40.72316,
"longitude": -73.85319
},
{
"price": 267516,
"beds": 1,
"baths": 2,
"sqft": 1137,
"address": "6408 Boelsen Cres, Rego Park, NY",
"latitude": 40.72438,
"longitude": -73.87401
},
{
"price": 230100,
"beds": 2,
"baths": 1,
"sqft": 158,
"address": "6145 98th St # 6, Rego Park, NY",
"latitude": 40.7308,
"longitude": -73.87846
},
{
"price": 56580,
"beds": 1,
"baths": 1,
"sqft": 1999,
"address": "9737 63rd Rd APT 8C, Rego Park, NY",
"latitude": 40.72324,
"longitude": -73.87403
},
{
"price": 206679,
"beds": 0,
"baths": 2,
"sqft": 752,
"address": "6115 97th St APT 7B, Rego Park, NY",
"latitude": 40.73156,
"longitude": -73.87135
},
{
"price": 309887,
"beds": 2,
"baths": 0,
"sqft": 745,
"address": "97-37 63rd Rd # 7J, Rego Park, NY",
"latitude": 40.71203,
"longitude": -73.85848
},
{
"price": 423744,
"beds": 1,
"baths": 3,
"sqft": 821,
"address": "6474 Saunders St APT 1E, Rego Park, NY",
"latitude": 40.71524,
"longitude": -73.86382
},
{
"price": 145772,
"beds": 3,
"baths": 2,
"sqft": 586,
"address": "6474 Saunders St APT 1E, Rego Park, NY",
"latitude": 40.73372,
"longitude": -73.87834
},
{
"price": 281767,
"beds": 3,
"baths": 0,
"sqft": 1446,
"address": "6115 97th St APT 4J, Rego Park, NY",
"latitude": 40.7123,
"longitude": -73.86393
},
{
"price": 3718,
"beds": 2,
"baths": 2,
"sqft": 916,
"address": "6135 98th St APT 5H, Rego Park, NY",
"latitude": 40.72882,
"longitude": -73.86894
},
{
"price": 335383,
"beds": 0,
"baths": 0,
"sqft": 714,
"address": "9958 65th Rd, Flushing, NY",
"latitude": 40.71041,
"longitude": -73.87274
},
{
"price": 340126,
"beds": 2,
"baths": 2,
"sqft": 1462,
"address": "61-45 98th St # 3J, Rego Park, NY",
"latitude": 40.71744,
"longitude": -73.86351
},
{
"price": 51717,
"beds": 3,
"baths": 0,
"sqft": 14,
"address": "6333 98th Pl APT 7R, Rego Park, NY",
"latitude": 40.71918,
"longitude": -73.86711
},
{
"price": 275624,
"beds": 1,
"baths": 0,
"sqft": 1059,
"address": "6430 Alderton St, Rego Park, NY",
"latitude": 40.71526,
"longitude": -73.85192
},
{
"price": 146134,
"beds": 0,
"baths": 2,
"sqft": 551,
"address": "6333 98th Pl APT 7J, Rego Park, NY",
"latitude": 40.72908,
"longitude": -73.86296
},
{
"price": 105467,
"beds": 1,
"baths": 2,
"sqft": 1851,
"address": "9905 63rd Dr APT 9M, Rego Park, NY",
"latitude": 40.73741,
"longitude": -73.86685
},
{
"price": 102466,
"beds": 0,
"baths": 0,
"sqft": 1626,
"address": "6336 99th St APT 6H, Flushing, NY",
"latitude": 40.71472,
"longitude": -73.87219
},
{
"price": 346204,
"beds": 2,
"baths": 2,
"sqft": 764,
"address": "6326 Bourton St # 1, Rego Park, NY",
"latitude": 40.71232,
"longitude": -73.86132
},
{
"price": 471966,
"beds": 3,
"baths": 3,
"sqft": 434,
"address": "6115 97th St # 2DD, Rego Park, NY",
"latitude": 40.71818,
"longitude": -73.85694
},
{
"price": 40198,
"beds": 0,
"baths": 1,
"sqft": 1939,
"address": "9805 63rd Rd APT 14B, Rego Park, NY",
"latitude": 40.7339,
"longitude": -73.87691
},
{
"price": 263799,
"beds": 2,
"baths": 3,
"sqft": 834,
"address": "97-10 62nd Dr APT 11H, Rego Park, NY",
"latitude": 40.73404,
"longitude": -73.8733
},
{
"price": 141137,
"beds": 3,
"baths": 1,
"sqft": 1877,
"address": "61-35 98th St APT 4H, Rego Park, NY",
"latitude": 40.72757,
"longitude": -73.85232
},
{
"price": 480498,
"beds": 2,
"baths": 3,
"sqft": 1241,
"address": "8546 67th Ave, Rego Park, NY",
"latitude": 40.72932,
"longitude": -73.86683
},
{
"price": 294969,
"beds": 0,
"baths": 1,
"sqft": 195,
"address": "9805 63rd Rd APT 12K, Rego Park, NY",
"latitude": 40.72656,
"longitude": -73.87097
},
{
"price": 20986,
"beds": 2,
"baths": 1,
"sqft": 478,
"address": "9820 62nd Dr APT 10H, Rego Park, NY",
"latitude": 40.72327,
"longitude": -73.87886
},
{
"price": 111464,
"beds": 1,
"baths": 3,
"sqft": 1451,
"address": "6538 Austin St APT 2B, Rego Park, NY",
"latitude": 40.73676,
"longitude": -73.8533
},
{
"price": 115059,
"beds": 0,
"baths": 0,
"sqft": 1100,
"address": "6360 Fitchett St, Flushing, NY",
"latitude": 40.73055,
"longitude": -73.8736
},
{
"price": 311865,
"beds": 0,
"baths": 1,
"sqft": 676,
"address": "6389 Saunders St APT 2K, Rego Park, NY",
"latitude": 40.7155,
"longitude": -73.85632
},
{
"price": 105880,
"beds": 0,
"baths": 0,
"sqft": 552,
"address": "6115 98th St APT 15A, Rego Park, NY",
"latitude": 40.72071,
"longitude": -73.86027
},
{
"price": 460335,
"beds": 3,
"baths": 1,
"sqft": 713,
"address": "6610 Thornton Pl APT 6A, Rego Park, NY",
"latitude": 40.7391,
"longitude": -73.86057
},
{
"price": 197117,
"beds": 0,
"baths": 0,
"sqft": 1935,
"address": "8801 63rd Ave, Flushing, NY",
"latitude": 40.71917,
"longitude": -73.87575
},
{
"price": 320761,
"beds": 0,
"baths": 1,
"sqft": 1375,
"address": "6336 99th St APT 6C, Flushing, NY",
"latitude": 40.72416,
"longitude": -73.86467
}
]

var addUniqueId = () => {
    var id = 1;
    for (var i = 0; i < rawData.length; i++) {
        rawData[i]. = id;
        id += 1;
    }
}

var addImageUrls = () => {
    for (var i = 0; i < rawData.length; i++) {
        rawData[i].imgUrl = imageUrls[i];
    }
}

var addWalkAndTransitScores = () => {
    for (var i = 0; i < rawData.length; i++) {
        rawData[i].walkScore = 90 + Math.round(Math.random() * 8);
        rawData[i].transitScore = 90 + Math.round(Math.random() * 8);
    }
}

addUniqueId();
addImageUrls();
addWalkAndTransitScores();

module.exports = rawData;



