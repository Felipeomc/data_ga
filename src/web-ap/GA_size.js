const start = process.hrtime();

const fs = require('fs')

let arrayde_cromo = [] //array de cromossomos
let tamanho_equipe = 0 //buscar e otimizar equipe única de tamanho 4
let skills_entrada = ["java", "iot", "ios", "web", "Android","Mobile","Desktop", "raspberry"]
let aux = []
let aux2 = []
//let methodology = ["kanban"];
let sugestoes = [];
let stringJSON = [];

let dadosGrafo =  {"nodes": [{"id": "Dev241", "user_id": 241, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "kanban", "java", "WEB"]}, {"id": "Dev62", "user_id": 62, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "java", "WEB"]}, {"id": "Dev82", "user_id": 82, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev401", "user_id": 401, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev402", "user_id": 402, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web", "java"]}, {"id": "Dev200", "user_id": 200, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev56", "user_id": 56, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev441", "user_id": 441, "type": "developer", "contractRoleName": "External", "hardskill": ["Android", "web", "IoT", "Mobile"]}, {"id": "Dev445", "user_id": 445, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "java", "WEB"]}, {"id": "Dev283", "user_id": 283, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev7", "user_id": 7, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "iot", "Web", "Java", "java", "WEB"]}, {"id": "Dev270", "user_id": 270, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "iot", "Web", "Java", "WEB"]}, {"id": "Dev351", "user_id": 351, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "iot", "Web", "java"]}, {"id": "Dev29", "user_id": 29, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "Web", "Java", "java", "WEB"]}, {"id": "Dev385", "user_id": 385, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev404", "user_id": 404, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "WEB", "kanban"]}, {"id": "Dev396", "user_id": 396, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev14", "user_id": 14, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "iOS", "Desktop", "mobile", "IOT", "iot", "Web", "IOS", "WEB"]}, {"id": "Dev431", "user_id": 431, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev433", "user_id": 433, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev225", "user_id": 225, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "web", "Mobile", "Desktop", "mobile", "Java", "ipad", "WEB"]}, {"id": "Dev358", "user_id": 358, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB", "mobile"]}, {"id": "Dev282", "user_id": 282, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "web", "Mobile", "iOS", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev248", "user_id": 248, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "web", "iOS", "Desktop", "mobile", "java", "ipad"]}, {"id": "Dev416", "user_id": 416, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "ipad", "Desktop", "java"]}, {"id": "Dev415", "user_id": 415, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Mobile", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev370", "user_id": 370, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "ipad", "Desktop"]}, {"id": "Dev316", "user_id": 316, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev417", "user_id": 417, "type": "developer", "contractRoleName": "Junior", "hardskill": ["ipad", "Desktop"]}, {"id": "Dev398", "user_id": 398, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev130", "user_id": 130, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Mobile", "ipad", "Desktop", "desktop"]}, {"id": "Dev211", "user_id": 211, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "web", "iOS", "Desktop", "mobile", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev333", "user_id": 333, "type": "developer", "contractRoleName": "Junior", "hardskill": []}, {"id": "Dev202", "user_id": 202, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android"]}, {"id": "Dev144", "user_id": 144, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "IOS", "ipad"]}, {"id": "Dev423", "user_id": 423, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "java"]}, {"id": "Dev247", "user_id": 247, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev36", "user_id": 36, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "mobile", "iot", "Web", "Java"]}, {"id": "Dev3", "user_id": 3, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "Mobile", "iOS", "Desktop", "Web", "Java", "java"]}, {"id": "Dev105", "user_id": 105, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "mobile", "iot", "Web", "IOS"]}, {"id": "Dev311", "user_id": 311, "type": "developer", "contractRoleName": "Master", "hardskill": ["web", "iot", "Java"]}, {"id": "Dev453", "user_id": 453, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "iot"]}, {"id": "Dev205", "user_id": 205, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Desktop"]}, {"id": "Dev154", "user_id": 154, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "iot"]}, {"id": "Dev250", "user_id": 250, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "iot"]}, {"id": "Dev308", "user_id": 308, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "web", "Mobile", "iOS", "mobile", "IOT", "Web", "IOS", "ipad"]}, {"id": "Dev27", "user_id": 27, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev363", "user_id": 363, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "iOS", "Mobile", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev411", "user_id": 411, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev425", "user_id": 425, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "iOS", "web", "Mobile", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev5", "user_id": 5, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev447", "user_id": 447, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "iOS", "web", "Mobile", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev359", "user_id": 359, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "web", "mobile", "IOT", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev46", "user_id": 46, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "mobile", "IOT", "Web", "ipad", "WEB"]}, {"id": "Dev448", "user_id": 448, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "Mobile", "iOS", "web", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev324", "user_id": 324, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev305", "user_id": 305, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "iOS", "Mobile", "web", "Desktop", "mobile", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev446", "user_id": 446, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "web", "Mobile", "iOS", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev281", "user_id": 281, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "iOS", "Mobile", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev391", "user_id": 391, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "iOS", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev372", "user_id": 372, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "Web", "mobile"]}, {"id": "Dev326", "user_id": 326, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev242", "user_id": 242, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "Web", "Java", "ipad"]}, {"id": "Dev220", "user_id": 220, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "mobile", "iot", "Web", "Java", "ipad"]}, {"id": "Dev261", "user_id": 261, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web"]}, {"id": "Dev47", "user_id": 47, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web"]}, {"id": "Dev395", "user_id": 395, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "ipad"]}, {"id": "Dev18", "user_id": 18, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "Web", "IOS", "ipad"]}, {"id": "Dev293", "user_id": 293, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "Web", "IOS", "ipad"]}, {"id": "Dev17", "user_id": 17, "type": "developer", "contractRoleName": "Senior", "hardskill": ["ipad", "IOS"]}, {"id": "Dev28", "user_id": 28, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev438", "user_id": 438, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "IOS", "Java", "java", "ipad"]}, {"id": "Dev180", "user_id": 180, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "IOT", "iot", "Web", "Java", "WEB"]}, {"id": "Dev161", "user_id": 161, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "iot", "Web", "Java", "WEB"]}, {"id": "Dev53", "user_id": 53, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "IOT", "iot", "Java", "WEB"]}, {"id": "Dev439", "user_id": 439, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev434", "user_id": 434, "type": "developer", "contractRoleName": "Stakeholder", "hardskill": ["web", "iot", "WEB"]}, {"id": "Dev136", "user_id": 136, "type": "developer", "contractRoleName": "Master", "hardskill": ["IOS", "web", "iot", "WEB"]}, {"id": "Dev389", "user_id": 389, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev392", "user_id": 392, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev390", "user_id": 390, "type": "developer", "contractRoleName": "Specialist", "hardskill": ["IOT", "web", "iot", "WEB"]}, {"id": "Dev55", "user_id": 55, "type": "developer", "contractRoleName": "Junior", "hardskill": ["WEB"]}, {"id": "Dev387", "user_id": 387, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IOT", "Android", "WEB"]}, {"id": "Dev38", "user_id": 38, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "kanban", "IOT", "Java", "WEB"]}, {"id": "Dev366", "user_id": 366, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "kanban"]}, {"id": "Dev152", "user_id": 152, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Mobile", "web", "Desktop", "Web", "kanban"]}, {"id": "Dev119", "user_id": 119, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Mobile", "web", "Desktop", "iot", "Web", "Java", "kanban"]}, {"id": "Dev291", "user_id": 291, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iot", "Java", "java", "kanban"]}, {"id": "Dev97", "user_id": 97, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "kanban"]}, {"id": "Dev169", "user_id": 169, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "kanban"]}, {"id": "Dev2", "user_id": 2, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "Java"]}, {"id": "Dev93", "user_id": 93, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "Java", "java"]}, {"id": "Dev414", "user_id": 414, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev437", "user_id": 437, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev94", "user_id": 94, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Chromebook", "web", "iOS", "mobile", "iot", "Web", "Java"]}, {"id": "Dev229", "user_id": 229, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java"]}, {"id": "Dev336", "user_id": 336, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iOS", "iot", "Java", "java", "ipad"]}, {"id": "Dev335", "user_id": 335, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "IOT", "Java", "java", "WEB"]}, {"id": "Dev317", "user_id": 317, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iOS", "Java", "java", "ipad"]}, {"id": "Dev339", "user_id": 339, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "Java", "java"]}, {"id": "Dev399", "user_id": 399, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "iOS", "Java", "java"]}, {"id": "Dev89", "user_id": 89, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev85", "user_id": 85, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev198", "user_id": 198, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT", "Java"]}, {"id": "Dev271", "user_id": 271, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IOT", "iOS", "Android", "Mobile"]}, {"id": "Dev397", "user_id": 397, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev223", "user_id": 223, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev331", "user_id": 331, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev330", "user_id": 330, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev373", "user_id": 373, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev384", "user_id": 384, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev332", "user_id": 332, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev178", "user_id": 178, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "mobile", "IOT", "Web"]}, {"id": "Dev356", "user_id": 356, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "mobile", "IOT", "Web"]}, {"id": "Dev269", "user_id": 269, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "iOS", "Mobile", "IOT", "Java"]}, {"id": "Dev367", "user_id": 367, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IOT", "iOS", "Android", "Mobile"]}, {"id": "Dev327", "user_id": 327, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "iOS", "Mobile", "IOT", "java"]}, {"id": "Dev16", "user_id": 16, "type": "developer", "contractRoleName": "Middle", "hardskill": ["iot", "IoT", "Android", "Web"]}, {"id": "Dev45", "user_id": 45, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Java"]}, {"id": "Dev174", "user_id": 174, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "iOS", "web", "mobile"]}, {"id": "Dev183", "user_id": 183, "type": "developer", "contractRoleName": "Middle", "hardskill": ["iOS", "IoT", "Android", "Web"]}, {"id": "Dev236", "user_id": 236, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android"]}, {"id": "Dev435", "user_id": 435, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Web", "mobile"]}, {"id": "Dev48", "user_id": 48, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "raspberry", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev170", "user_id": 170, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "iOS", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev214", "user_id": 214, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "raspberry", "Chromebook", "web", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev290", "user_id": 290, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java", "java", "ipad"]}, {"id": "Dev8", "user_id": 8, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Mobile", "Web", "ipad"]}, {"id": "Dev227", "user_id": 227, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web"]}, {"id": "Dev382", "user_id": 382, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web", "mobile"]}, {"id": "Dev138", "user_id": 138, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "Mobile", "mobile", "Web", "java", "ipad"]}, {"id": "Dev142", "user_id": 142, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java", "java", "ipad"]}, {"id": "Dev140", "user_id": 140, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web", "mobile"]}, {"id": "Dev137", "user_id": 137, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Mobile", "mobile", "IOT", "Web", "Java", "java", "ipad", "WEB"]}, {"id": "Dev77", "user_id": 77, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "Android", "Desktop", "IOS"]}, {"id": "Dev104", "user_id": 104, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "IOS"]}, {"id": "Dev362", "user_id": 362, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Desktop", "IOS"]}, {"id": "Dev181", "user_id": 181, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "mobile", "IOT", "Web", "IOS", "Java", "WEB"]}, {"id": "Dev365", "user_id": 365, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "IOS"]}, {"id": "Dev65", "user_id": 65, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "IOS"]}, {"id": "Dev381", "user_id": 381, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev145", "user_id": 145, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Chromebook", "web", "mobile", "Web"]}, {"id": "Dev63", "user_id": 63, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev263", "user_id": 263, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev114", "user_id": 114, "type": "developer", "contractRoleName": "Middle", "hardskill": []}, {"id": "Dev275", "user_id": 275, "type": "developer", "contractRoleName": "Junior", "hardskill": []}, {"id": "Dev406", "user_id": 406, "type": "developer", "contractRoleName": "Senior", "hardskill": []}, {"id": "Dev81", "user_id": 81, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Mobile", "ipad", "desktop", "web"]}, {"id": "Dev348", "user_id": 348, "type": "developer", "contractRoleName": "Junior", "hardskill": ["desktop", "web", "mobile", "iot", "Web"]}], "edges": [{"source": "Dev241", "source_user_id": 241, "target": "Dev62", "target_user_id": 62, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev82", "target_user_id": 82, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev401", "target_user_id": 401, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev270", "target_user_id": 270, "weight": 0.14}, {"source": "Dev241", "source_user_id": 241, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev29", "target_user_id": 29, "weight": 0.14}, {"source": "Dev62", "source_user_id": 62, "target": "Dev82", "target_user_id": 82, "weight": 0.06}, {"source": "Dev62", "source_user_id": 62, "target": "Dev401", "target_user_id": 401, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev200", "target_user_id": 200, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev62", "source_user_id": 62, "target": "Dev445", "target_user_id": 445, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev283", "target_user_id": 283, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev82", "source_user_id": 82, "target": "Dev401", "target_user_id": 401, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev82", "source_user_id": 82, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev7", "target_user_id": 7, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev402", "target_user_id": 402, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev401", "source_user_id": 401, "target": "Dev7", "target_user_id": 7, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev56", "target_user_id": 56, "weight": 0.18}, {"source": "Dev200", "source_user_id": 200, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev200", "source_user_id": 200, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev56", "source_user_id": 56, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev56", "source_user_id": 56, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev445", "source_user_id": 445, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev445", "source_user_id": 445, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev283", "source_user_id": 283, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev7", "source_user_id": 7, "target": "Dev270", "target_user_id": 270, "weight": 0.18}, {"source": "Dev7", "source_user_id": 7, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev7", "source_user_id": 7, "target": "Dev29", "target_user_id": 29, "weight": 0.18}, {"source": "Dev270", "source_user_id": 270, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev270", "source_user_id": 270, "target": "Dev29", "target_user_id": 29, "weight": 0.19}, {"source": "Dev351", "source_user_id": 351, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev385", "target_user_id": 385, "weight": 0.05}, {"source": "Dev241", "source_user_id": 241, "target": "Dev404", "target_user_id": 404, "weight": 0.16}, {"source": "Dev241", "source_user_id": 241, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev241", "source_user_id": 241, "target": "Dev14", "target_user_id": 14, "weight": 0.14}, {"source": "Dev241", "source_user_id": 241, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev385", "target_user_id": 385, "weight": 0.05}, {"source": "Dev270", "source_user_id": 270, "target": "Dev404", "target_user_id": 404, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev270", "source_user_id": 270, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev270", "source_user_id": 270, "target": "Dev225", "target_user_id": 225, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev385", "source_user_id": 385, "target": "Dev404", "target_user_id": 404, "weight": 0.05}, {"source": "Dev385", "source_user_id": 385, "target": "Dev396", "target_user_id": 396, "weight": 0.05}, {"source": "Dev385", "source_user_id": 385, "target": "Dev14", "target_user_id": 14, "weight": 0.05}, {"source": "Dev404", "source_user_id": 404, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev404", "source_user_id": 404, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev404", "source_user_id": 404, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev396", "source_user_id": 396, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev396", "source_user_id": 396, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev29", "source_user_id": 29, "target": "Dev225", "target_user_id": 225, "weight": 0.16}, {"source": "Dev29", "source_user_id": 29, "target": "Dev358", "target_user_id": 358, "weight": 0.08}, {"source": "Dev225", "source_user_id": 225, "target": "Dev358", "target_user_id": 358, "weight": 0.08}, {"source": "Dev282", "source_user_id": 282, "target": "Dev415", "target_user_id": 415, "weight": 0.07}, {"source": "Dev282", "source_user_id": 282, "target": "Dev370", "target_user_id": 370, "weight": 0.07}, {"source": "Dev282", "source_user_id": 282, "target": "Dev316", "target_user_id": 316, "weight": 0.12}, {"source": "Dev282", "source_user_id": 282, "target": "Dev398", "target_user_id": 398, "weight": 0.04}, {"source": "Dev282", "source_user_id": 282, "target": "Dev211", "target_user_id": 211, "weight": 0.06}, {"source": "Dev415", "source_user_id": 415, "target": "Dev370", "target_user_id": 370, "weight": 0.03}, {"source": "Dev415", "source_user_id": 415, "target": "Dev316", "target_user_id": 316, "weight": 0.09}, {"source": "Dev415", "source_user_id": 415, "target": "Dev398", "target_user_id": 398, "weight": 0.03}, {"source": "Dev370", "source_user_id": 370, "target": "Dev316", "target_user_id": 316, "weight": 0.07}, {"source": "Dev370", "source_user_id": 370, "target": "Dev398", "target_user_id": 398, "weight": 0.01}, {"source": "Dev316", "source_user_id": 316, "target": "Dev398", "target_user_id": 398, "weight": 0.03}, {"source": "Dev333", "source_user_id": 333, "target": "Dev282", "target_user_id": 282, "weight": 0.06}, {"source": "Dev333", "source_user_id": 333, "target": "Dev202", "target_user_id": 202, "weight": 0.06}, {"source": "Dev333", "source_user_id": 333, "target": "Dev423", "target_user_id": 423, "weight": 0.01}, {"source": "Dev282", "source_user_id": 282, "target": "Dev202", "target_user_id": 202, "weight": 0.12}, {"source": "Dev282", "source_user_id": 282, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev282", "source_user_id": 282, "target": "Dev423", "target_user_id": 423, "weight": 0.11}, {"source": "Dev282", "source_user_id": 282, "target": "Dev247", "target_user_id": 247, "weight": 0.03}, {"source": "Dev282", "source_user_id": 282, "target": "Dev3", "target_user_id": 3, "weight": 0.03}, {"source": "Dev202", "source_user_id": 202, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev202", "source_user_id": 202, "target": "Dev423", "target_user_id": 423, "weight": 0.01}, {"source": "Dev423", "source_user_id": 423, "target": "Dev247", "target_user_id": 247, "weight": 0.01}, {"source": "Dev423", "source_user_id": 423, "target": "Dev3", "target_user_id": 3, "weight": 0.01}, {"source": "Dev247", "source_user_id": 247, "target": "Dev36", "target_user_id": 36, "weight": 0.01}, {"source": "Dev247", "source_user_id": 247, "target": "Dev3", "target_user_id": 3, "weight": 0.04}, {"source": "Dev36", "source_user_id": 36, "target": "Dev3", "target_user_id": 3, "weight": 0.01}, {"source": "Dev351", "source_user_id": 351, "target": "Dev105", "target_user_id": 105, "weight": 0.18}, {"source": "Dev351", "source_user_id": 351, "target": "Dev311", "target_user_id": 311, "weight": 0.11}, {"source": "Dev351", "source_user_id": 351, "target": "Dev453", "target_user_id": 453, "weight": 0.06}, {"source": "Dev351", "source_user_id": 351, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev105", "source_user_id": 105, "target": "Dev311", "target_user_id": 311, "weight": 0.11}, {"source": "Dev105", "source_user_id": 105, "target": "Dev453", "target_user_id": 453, "weight": 0.09}, {"source": "Dev105", "source_user_id": 105, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev311", "source_user_id": 311, "target": "Dev453", "target_user_id": 453, "weight": 0.06}, {"source": "Dev311", "source_user_id": 311, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev453", "source_user_id": 453, "target": "Dev205", "target_user_id": 205, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev154", "target_user_id": 154, "weight": 0.04}, {"source": "Dev351", "source_user_id": 351, "target": "Dev250", "target_user_id": 250, "weight": 0.09}, {"source": "Dev105", "source_user_id": 105, "target": "Dev154", "target_user_id": 154, "weight": 0.08}, {"source": "Dev105", "source_user_id": 105, "target": "Dev250", "target_user_id": 250, "weight": 0.09}, {"source": "Dev154", "source_user_id": 154, "target": "Dev250", "target_user_id": 250, "weight": 0.12}, {"source": "Dev154", "source_user_id": 154, "target": "Dev311", "target_user_id": 311, "weight": 0.04}, {"source": "Dev154", "source_user_id": 154, "target": "Dev453", "target_user_id": 453, "weight": 0.04}, {"source": "Dev250", "source_user_id": 250, "target": "Dev311", "target_user_id": 311, "weight": 0.09}, {"source": "Dev250", "source_user_id": 250, "target": "Dev453", "target_user_id": 453, "weight": 0.04}, {"source": "Dev308", "source_user_id": 308, "target": "Dev27", "target_user_id": 27, "weight": 0.22}, {"source": "Dev308", "source_user_id": 308, "target": "Dev363", "target_user_id": 363, "weight": 0.16}, {"source": "Dev308", "source_user_id": 308, "target": "Dev411", "target_user_id": 411, "weight": 0.16}, {"source": "Dev308", "source_user_id": 308, "target": "Dev425", "target_user_id": 425, "weight": 0.1}, {"source": "Dev308", "source_user_id": 308, "target": "Dev5", "target_user_id": 5, "weight": 0.26}, {"source": "Dev308", "source_user_id": 308, "target": "Dev447", "target_user_id": 447, "weight": 0.1}, {"source": "Dev308", "source_user_id": 308, "target": "Dev359", "target_user_id": 359, "weight": 0.14}, {"source": "Dev27", "source_user_id": 27, "target": "Dev363", "target_user_id": 363, "weight": 0.86}, {"source": "Dev27", "source_user_id": 27, "target": "Dev411", "target_user_id": 411, "weight": 0.81}, {"source": "Dev27", "source_user_id": 27, "target": "Dev425", "target_user_id": 425, "weight": 0.66}, {"source": "Dev27", "source_user_id": 27, "target": "Dev5", "target_user_id": 5, "weight": 0.75}, {"source": "Dev27", "source_user_id": 27, "target": "Dev447", "target_user_id": 447, "weight": 0.66}, {"source": "Dev27", "source_user_id": 27, "target": "Dev359", "target_user_id": 359, "weight": 0.32}, {"source": "Dev363", "source_user_id": 363, "target": "Dev411", "target_user_id": 411, "weight": 0.82}, {"source": "Dev363", "source_user_id": 363, "target": "Dev425", "target_user_id": 425, "weight": 0.72}, {"source": "Dev363", "source_user_id": 363, "target": "Dev5", "target_user_id": 5, "weight": 0.7}, {"source": "Dev363", "source_user_id": 363, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev363", "source_user_id": 363, "target": "Dev359", "target_user_id": 359, "weight": 0.32}, {"source": "Dev411", "source_user_id": 411, "target": "Dev425", "target_user_id": 425, "weight": 0.72}, {"source": "Dev411", "source_user_id": 411, "target": "Dev5", "target_user_id": 5, "weight": 0.6}, {"source": "Dev411", "source_user_id": 411, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev411", "source_user_id": 411, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev425", "source_user_id": 425, "target": "Dev5", "target_user_id": 5, "weight": 0.5}, {"source": "Dev425", "source_user_id": 425, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev425", "source_user_id": 425, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev5", "source_user_id": 5, "target": "Dev447", "target_user_id": 447, "weight": 0.5}, {"source": "Dev5", "source_user_id": 5, "target": "Dev359", "target_user_id": 359, "weight": 0.4}, {"source": "Dev447", "source_user_id": 447, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev46", "source_user_id": 46, "target": "Dev5", "target_user_id": 5, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev27", "target_user_id": 27, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev363", "target_user_id": 363, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev411", "target_user_id": 411, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev324", "target_user_id": 324, "weight": 0.1}, {"source": "Dev5", "source_user_id": 5, "target": "Dev448", "target_user_id": 448, "weight": 0.26}, {"source": "Dev5", "source_user_id": 5, "target": "Dev324", "target_user_id": 324, "weight": 0.24}, {"source": "Dev5", "source_user_id": 5, "target": "Dev305", "target_user_id": 305, "weight": 0.62}, {"source": "Dev5", "source_user_id": 5, "target": "Dev446", "target_user_id": 446, "weight": 0.29}, {"source": "Dev27", "source_user_id": 27, "target": "Dev448", "target_user_id": 448, "weight": 0.22}, {"source": "Dev27", "source_user_id": 27, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev27", "source_user_id": 27, "target": "Dev305", "target_user_id": 305, "weight": 0.39}, {"source": "Dev27", "source_user_id": 27, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev425", "source_user_id": 425, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev425", "source_user_id": 425, "target": "Dev324", "target_user_id": 324, "weight": 0.16}, {"source": "Dev425", "source_user_id": 425, "target": "Dev305", "target_user_id": 305, "weight": 0.24}, {"source": "Dev425", "source_user_id": 425, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev363", "source_user_id": 363, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev363", "source_user_id": 363, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev363", "source_user_id": 363, "target": "Dev305", "target_user_id": 305, "weight": 0.34}, {"source": "Dev363", "source_user_id": 363, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev411", "source_user_id": 411, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev411", "source_user_id": 411, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev411", "source_user_id": 411, "target": "Dev305", "target_user_id": 305, "weight": 0.29}, {"source": "Dev411", "source_user_id": 411, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev448", "source_user_id": 448, "target": "Dev447", "target_user_id": 447, "weight": 0.16}, {"source": "Dev448", "source_user_id": 448, "target": "Dev324", "target_user_id": 324, "weight": 0.11}, {"source": "Dev448", "source_user_id": 448, "target": "Dev305", "target_user_id": 305, "weight": 0.16}, {"source": "Dev448", "source_user_id": 448, "target": "Dev446", "target_user_id": 446, "weight": 0.11}, {"source": "Dev447", "source_user_id": 447, "target": "Dev324", "target_user_id": 324, "weight": 0.16}, {"source": "Dev447", "source_user_id": 447, "target": "Dev305", "target_user_id": 305, "weight": 0.24}, {"source": "Dev447", "source_user_id": 447, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev324", "source_user_id": 324, "target": "Dev305", "target_user_id": 305, "weight": 0.14}, {"source": "Dev324", "source_user_id": 324, "target": "Dev446", "target_user_id": 446, "weight": 0.08}, {"source": "Dev305", "source_user_id": 305, "target": "Dev446", "target_user_id": 446, "weight": 0.18}, {"source": "Dev281", "source_user_id": 281, "target": "Dev372", "target_user_id": 372, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev5", "target_user_id": 5, "weight": 0.17}, {"source": "Dev281", "source_user_id": 281, "target": "Dev27", "target_user_id": 27, "weight": 0.17}, {"source": "Dev281", "source_user_id": 281, "target": "Dev425", "target_user_id": 425, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev363", "target_user_id": 363, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev411", "target_user_id": 411, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev359", "target_user_id": 359, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev448", "target_user_id": 448, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev326", "target_user_id": 326, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev447", "target_user_id": 447, "weight": 0.11}, {"source": "Dev372", "source_user_id": 372, "target": "Dev5", "target_user_id": 5, "weight": 0.1}, {"source": "Dev372", "source_user_id": 372, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev359", "target_user_id": 359, "weight": 0.1}, {"source": "Dev372", "source_user_id": 372, "target": "Dev448", "target_user_id": 448, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev326", "target_user_id": 326, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev5", "source_user_id": 5, "target": "Dev326", "target_user_id": 326, "weight": 0.23}, {"source": "Dev27", "source_user_id": 27, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev425", "source_user_id": 425, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev363", "source_user_id": 363, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev411", "source_user_id": 411, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev359", "source_user_id": 359, "target": "Dev448", "target_user_id": 448, "weight": 0.11}, {"source": "Dev359", "source_user_id": 359, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev359", "source_user_id": 359, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev448", "source_user_id": 448, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev326", "source_user_id": 326, "target": "Dev447", "target_user_id": 447, "weight": 0.11}, {"source": "Dev326", "source_user_id": 326, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev5", "source_user_id": 5, "target": "Dev242", "target_user_id": 242, "weight": 0.41}, {"source": "Dev5", "source_user_id": 5, "target": "Dev220", "target_user_id": 220, "weight": 0.3}, {"source": "Dev5", "source_user_id": 5, "target": "Dev261", "target_user_id": 261, "weight": 0.05}, {"source": "Dev5", "source_user_id": 5, "target": "Dev395", "target_user_id": 395, "weight": 0.09}, {"source": "Dev242", "source_user_id": 242, "target": "Dev220", "target_user_id": 220, "weight": 0.11}, {"source": "Dev242", "source_user_id": 242, "target": "Dev27", "target_user_id": 27, "weight": 0.29}, {"source": "Dev242", "source_user_id": 242, "target": "Dev425", "target_user_id": 425, "weight": 0.12}, {"source": "Dev242", "source_user_id": 242, "target": "Dev363", "target_user_id": 363, "weight": 0.18}, {"source": "Dev242", "source_user_id": 242, "target": "Dev411", "target_user_id": 411, "weight": 0.24}, {"source": "Dev242", "source_user_id": 242, "target": "Dev305", "target_user_id": 305, "weight": 0.37}, {"source": "Dev242", "source_user_id": 242, "target": "Dev447", "target_user_id": 447, "weight": 0.12}, {"source": "Dev242", "source_user_id": 242, "target": "Dev261", "target_user_id": 261, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev242", "source_user_id": 242, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev220", "source_user_id": 220, "target": "Dev27", "target_user_id": 27, "weight": 0.24}, {"source": "Dev220", "source_user_id": 220, "target": "Dev425", "target_user_id": 425, "weight": 0.12}, {"source": "Dev220", "source_user_id": 220, "target": "Dev363", "target_user_id": 363, "weight": 0.24}, {"source": "Dev220", "source_user_id": 220, "target": "Dev411", "target_user_id": 411, "weight": 0.18}, {"source": "Dev220", "source_user_id": 220, "target": "Dev305", "target_user_id": 305, "weight": 0.17}, {"source": "Dev220", "source_user_id": 220, "target": "Dev447", "target_user_id": 447, "weight": 0.12}, {"source": "Dev220", "source_user_id": 220, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev261", "target_user_id": 261, "weight": 0.06}, {"source": "Dev27", "source_user_id": 27, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev425", "source_user_id": 425, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev363", "source_user_id": 363, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev411", "source_user_id": 411, "target": "Dev261", "target_user_id": 261, "weight": 0.06}, {"source": "Dev411", "source_user_id": 411, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev305", "source_user_id": 305, "target": "Dev261", "target_user_id": 261, "weight": 0.1}, {"source": "Dev305", "source_user_id": 305, "target": "Dev395", "target_user_id": 395, "weight": 0.06}, {"source": "Dev447", "source_user_id": 447, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev261", "source_user_id": 261, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev446", "source_user_id": 446, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev293", "target_user_id": 293, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev17", "target_user_id": 17, "weight": 0.02}, {"source": "Dev18", "source_user_id": 18, "target": "Dev28", "target_user_id": 28, "weight": 0.02}, {"source": "Dev18", "source_user_id": 18, "target": "Dev438", "target_user_id": 438, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev17", "target_user_id": 17, "weight": 0.02}, {"source": "Dev293", "source_user_id": 293, "target": "Dev28", "target_user_id": 28, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev438", "target_user_id": 438, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev17", "source_user_id": 17, "target": "Dev28", "target_user_id": 28, "weight": 0.01}, {"source": "Dev17", "source_user_id": 17, "target": "Dev438", "target_user_id": 438, "weight": 0.01}, {"source": "Dev28", "source_user_id": 28, "target": "Dev438", "target_user_id": 438, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev161", "target_user_id": 161, "weight": 0.17}, {"source": "Dev180", "source_user_id": 180, "target": "Dev53", "target_user_id": 53, "weight": 0.13}, {"source": "Dev180", "source_user_id": 180, "target": "Dev439", "target_user_id": 439, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev180", "source_user_id": 180, "target": "Dev136", "target_user_id": 136, "weight": 0.08}, {"source": "Dev180", "source_user_id": 180, "target": "Dev389", "target_user_id": 389, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev392", "target_user_id": 392, "weight": 0.12}, {"source": "Dev180", "source_user_id": 180, "target": "Dev390", "target_user_id": 390, "weight": 0.08}, {"source": "Dev180", "source_user_id": 180, "target": "Dev391", "target_user_id": 391, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev387", "target_user_id": 387, "weight": 0.06}, {"source": "Dev180", "source_user_id": 180, "target": "Dev46", "target_user_id": 46, "weight": 0.19}, {"source": "Dev161", "source_user_id": 161, "target": "Dev53", "target_user_id": 53, "weight": 0.16}, {"source": "Dev161", "source_user_id": 161, "target": "Dev439", "target_user_id": 439, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev389", "target_user_id": 389, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev387", "target_user_id": 387, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev46", "target_user_id": 46, "weight": 0.09}, {"source": "Dev53", "source_user_id": 53, "target": "Dev439", "target_user_id": 439, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev53", "source_user_id": 53, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev53", "source_user_id": 53, "target": "Dev55", "target_user_id": 55, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev53", "source_user_id": 53, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev439", "source_user_id": 439, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev439", "source_user_id": 439, "target": "Dev389", "target_user_id": 389, "weight": 0.11}, {"source": "Dev439", "source_user_id": 439, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev439", "source_user_id": 439, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev46", "target_user_id": 46, "weight": 0.07}, {"source": "Dev434", "source_user_id": 434, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev391", "target_user_id": 391, "weight": 0.08}, {"source": "Dev389", "source_user_id": 389, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev389", "source_user_id": 389, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev389", "source_user_id": 389, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev389", "source_user_id": 389, "target": "Dev46", "target_user_id": 46, "weight": 0.07}, {"source": "Dev392", "source_user_id": 392, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev392", "source_user_id": 392, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev392", "source_user_id": 392, "target": "Dev46", "target_user_id": 46, "weight": 0.08}, {"source": "Dev390", "source_user_id": 390, "target": "Dev391", "target_user_id": 391, "weight": 0.08}, {"source": "Dev390", "source_user_id": 390, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev390", "source_user_id": 390, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev391", "source_user_id": 391, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev391", "source_user_id": 391, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev387", "source_user_id": 387, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev38", "source_user_id": 38, "target": "Dev366", "target_user_id": 366, "weight": 0.08}, {"source": "Dev38", "source_user_id": 38, "target": "Dev152", "target_user_id": 152, "weight": 0.12}, {"source": "Dev38", "source_user_id": 38, "target": "Dev119", "target_user_id": 119, "weight": 0.16}, {"source": "Dev38", "source_user_id": 38, "target": "Dev291", "target_user_id": 291, "weight": 0.12}, {"source": "Dev38", "source_user_id": 38, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev38", "source_user_id": 38, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev38", "source_user_id": 38, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev366", "source_user_id": 366, "target": "Dev152", "target_user_id": 152, "weight": 0.08}, {"source": "Dev366", "source_user_id": 366, "target": "Dev119", "target_user_id": 119, "weight": 0.08}, {"source": "Dev366", "source_user_id": 366, "target": "Dev291", "target_user_id": 291, "weight": 0.12}, {"source": "Dev366", "source_user_id": 366, "target": "Dev97", "target_user_id": 97, "weight": 0.12}, {"source": "Dev366", "source_user_id": 366, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev366", "source_user_id": 366, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev119", "target_user_id": 119, "weight": 0.16}, {"source": "Dev152", "source_user_id": 152, "target": "Dev291", "target_user_id": 291, "weight": 0.08}, {"source": "Dev152", "source_user_id": 152, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev152", "source_user_id": 152, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev291", "target_user_id": 291, "weight": 0.16}, {"source": "Dev119", "source_user_id": 119, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev119", "source_user_id": 119, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev291", "source_user_id": 291, "target": "Dev97", "target_user_id": 97, "weight": 0.12}, {"source": "Dev291", "source_user_id": 291, "target": "Dev241", "target_user_id": 241, "weight": 0.08}, {"source": "Dev291", "source_user_id": 291, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev97", "source_user_id": 97, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev97", "source_user_id": 97, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev282", "target_user_id": 282, "weight": 0.05}, {"source": "Dev14", "source_user_id": 14, "target": "Dev211", "target_user_id": 211, "weight": 0.2}, {"source": "Dev14", "source_user_id": 14, "target": "Dev94", "target_user_id": 94, "weight": 0.2}, {"source": "Dev14", "source_user_id": 14, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev282", "target_user_id": 282, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev93", "target_user_id": 93, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev333", "target_user_id": 333, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev211", "target_user_id": 211, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev93", "target_user_id": 93, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev282", "source_user_id": 282, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev282", "source_user_id": 282, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev93", "source_user_id": 93, "target": "Dev333", "target_user_id": 333, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev93", "source_user_id": 93, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev437", "target_user_id": 437, "weight": 0.15}, {"source": "Dev414", "source_user_id": 414, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev333", "source_user_id": 333, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev211", "source_user_id": 211, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev211", "source_user_id": 211, "target": "Dev446", "target_user_id": 446, "weight": 0.03}, {"source": "Dev211", "source_user_id": 211, "target": "Dev202", "target_user_id": 202, "weight": 0.05}, {"source": "Dev94", "source_user_id": 94, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev94", "source_user_id": 94, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev229", "source_user_id": 229, "target": "Dev446", "target_user_id": 446, "weight": 0.15}, {"source": "Dev282", "source_user_id": 282, "target": "Dev336", "target_user_id": 336, "weight": 0.13}, {"source": "Dev282", "source_user_id": 282, "target": "Dev335", "target_user_id": 335, "weight": 0.09}, {"source": "Dev282", "source_user_id": 282, "target": "Dev317", "target_user_id": 317, "weight": 0.19}, {"source": "Dev282", "source_user_id": 282, "target": "Dev339", "target_user_id": 339, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev399", "target_user_id": 399, "weight": 0.16}, {"source": "Dev282", "source_user_id": 282, "target": "Dev438", "target_user_id": 438, "weight": 0.05}, {"source": "Dev336", "source_user_id": 336, "target": "Dev335", "target_user_id": 335, "weight": 0.14}, {"source": "Dev336", "source_user_id": 336, "target": "Dev317", "target_user_id": 317, "weight": 0.12}, {"source": "Dev336", "source_user_id": 336, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev336", "source_user_id": 336, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev336", "source_user_id": 336, "target": "Dev399", "target_user_id": 399, "weight": 0.12}, {"source": "Dev336", "source_user_id": 336, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev317", "target_user_id": 317, "weight": 0.14}, {"source": "Dev335", "source_user_id": 335, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev423", "source_user_id": 423, "target": "Dev339", "target_user_id": 339, "weight": 0.05}, {"source": "Dev423", "source_user_id": 423, "target": "Dev399", "target_user_id": 399, "weight": 0.05}, {"source": "Dev423", "source_user_id": 423, "target": "Dev438", "target_user_id": 438, "weight": 0.05}, {"source": "Dev339", "source_user_id": 339, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev339", "source_user_id": 339, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev399", "source_user_id": 399, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev89", "source_user_id": 89, "target": "Dev85", "target_user_id": 85, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev198", "target_user_id": 198, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev89", "source_user_id": 89, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev89", "source_user_id": 89, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev89", "source_user_id": 89, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev198", "target_user_id": 198, "weight": 0.33}, {"source": "Dev85", "source_user_id": 85, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev85", "source_user_id": 85, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev85", "source_user_id": 85, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev85", "source_user_id": 85, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev85", "source_user_id": 85, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev198", "source_user_id": 198, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev198", "source_user_id": 198, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev198", "source_user_id": 198, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev269", "target_user_id": 269, "weight": 0.07}, {"source": "Dev198", "source_user_id": 198, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev198", "source_user_id": 198, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev397", "target_user_id": 397, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev223", "target_user_id": 223, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev331", "target_user_id": 331, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev330", "target_user_id": 330, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev373", "target_user_id": 373, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev384", "target_user_id": 384, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev332", "target_user_id": 332, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev223", "target_user_id": 223, "weight": 0.26}, {"source": "Dev397", "source_user_id": 397, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev397", "source_user_id": 397, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev327", "target_user_id": 327, "weight": 0.11}, {"source": "Dev397", "source_user_id": 397, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev223", "source_user_id": 223, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev223", "source_user_id": 223, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev327", "target_user_id": 327, "weight": 0.11}, {"source": "Dev331", "source_user_id": 331, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev330", "source_user_id": 330, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev373", "source_user_id": 373, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev373", "source_user_id": 373, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev373", "source_user_id": 373, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev384", "source_user_id": 384, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev384", "source_user_id": 384, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev332", "source_user_id": 332, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev178", "source_user_id": 178, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev367", "source_user_id": 367, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev367", "source_user_id": 367, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev327", "source_user_id": 327, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev16", "target_user_id": 16, "weight": 0.23}, {"source": "Dev18", "source_user_id": 18, "target": "Dev45", "target_user_id": 45, "weight": 0.07}, {"source": "Dev18", "source_user_id": 18, "target": "Dev351", "target_user_id": 351, "weight": 0.07}, {"source": "Dev18", "source_user_id": 18, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev183", "target_user_id": 183, "weight": 0.13}, {"source": "Dev18", "source_user_id": 18, "target": "Dev236", "target_user_id": 236, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev435", "target_user_id": 435, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev45", "target_user_id": 45, "weight": 0.07}, {"source": "Dev16", "source_user_id": 16, "target": "Dev351", "target_user_id": 351, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev236", "target_user_id": 236, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev435", "target_user_id": 435, "weight": 0.04}, {"source": "Dev45", "source_user_id": 45, "target": "Dev351", "target_user_id": 351, "weight": 0.03}, {"source": "Dev45", "source_user_id": 45, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev45", "source_user_id": 45, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev174", "source_user_id": 174, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev236", "source_user_id": 236, "target": "Dev435", "target_user_id": 435, "weight": 0.08}, {"source": "Dev5", "source_user_id": 5, "target": "Dev211", "target_user_id": 211, "weight": 0.04}, {"source": "Dev5", "source_user_id": 5, "target": "Dev48", "target_user_id": 48, "weight": 0.04}, {"source": "Dev5", "source_user_id": 5, "target": "Dev170", "target_user_id": 170, "weight": 0.08}, {"source": "Dev5", "source_user_id": 5, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev211", "source_user_id": 211, "target": "Dev324", "target_user_id": 324, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev48", "target_user_id": 48, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev27", "target_user_id": 27, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev411", "target_user_id": 411, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev425", "target_user_id": 425, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev363", "target_user_id": 363, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev305", "target_user_id": 305, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev214", "target_user_id": 214, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev447", "target_user_id": 447, "weight": 0.02}, {"source": "Dev324", "source_user_id": 324, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev324", "source_user_id": 324, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev48", "source_user_id": 48, "target": "Dev27", "target_user_id": 27, "weight": 0.04}, {"source": "Dev48", "source_user_id": 48, "target": "Dev305", "target_user_id": 305, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev214", "target_user_id": 214, "weight": 0.04}, {"source": "Dev411", "source_user_id": 411, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev411", "source_user_id": 411, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev170", "source_user_id": 170, "target": "Dev425", "target_user_id": 425, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev363", "target_user_id": 363, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev305", "target_user_id": 305, "weight": 0.08}, {"source": "Dev170", "source_user_id": 170, "target": "Dev447", "target_user_id": 447, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev446", "target_user_id": 446, "weight": 0.08}, {"source": "Dev425", "source_user_id": 425, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev363", "source_user_id": 363, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev305", "source_user_id": 305, "target": "Dev214", "target_user_id": 214, "weight": 0.04}, {"source": "Dev214", "source_user_id": 214, "target": "Dev447", "target_user_id": 447, "weight": 0.09}, {"source": "Dev214", "source_user_id": 214, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev290", "source_user_id": 290, "target": "Dev8", "target_user_id": 8, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev227", "target_user_id": 227, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev382", "target_user_id": 382, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev138", "target_user_id": 138, "weight": 0.18}, {"source": "Dev290", "source_user_id": 290, "target": "Dev142", "target_user_id": 142, "weight": 0.28}, {"source": "Dev290", "source_user_id": 290, "target": "Dev140", "target_user_id": 140, "weight": 0.14}, {"source": "Dev290", "source_user_id": 290, "target": "Dev137", "target_user_id": 137, "weight": 0.21}, {"source": "Dev290", "source_user_id": 290, "target": "Dev225", "target_user_id": 225, "weight": 0.21}, {"source": "Dev8", "source_user_id": 8, "target": "Dev227", "target_user_id": 227, "weight": 0.08}, {"source": "Dev8", "source_user_id": 8, "target": "Dev382", "target_user_id": 382, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev138", "target_user_id": 138, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev142", "target_user_id": 142, "weight": 0.1}, {"source": "Dev8", "source_user_id": 8, "target": "Dev140", "target_user_id": 140, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev137", "target_user_id": 137, "weight": 0.14}, {"source": "Dev8", "source_user_id": 8, "target": "Dev225", "target_user_id": 225, "weight": 0.1}, {"source": "Dev227", "source_user_id": 227, "target": "Dev382", "target_user_id": 382, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev138", "target_user_id": 138, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev142", "target_user_id": 142, "weight": 0.07}, {"source": "Dev227", "source_user_id": 227, "target": "Dev140", "target_user_id": 140, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev227", "source_user_id": 227, "target": "Dev225", "target_user_id": 225, "weight": 0.14}, {"source": "Dev382", "source_user_id": 382, "target": "Dev138", "target_user_id": 138, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev142", "target_user_id": 142, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev140", "target_user_id": 140, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev225", "target_user_id": 225, "weight": 0.03}, {"source": "Dev138", "source_user_id": 138, "target": "Dev142", "target_user_id": 142, "weight": 0.25}, {"source": "Dev138", "source_user_id": 138, "target": "Dev140", "target_user_id": 140, "weight": 0.21}, {"source": "Dev138", "source_user_id": 138, "target": "Dev137", "target_user_id": 137, "weight": 0.1}, {"source": "Dev138", "source_user_id": 138, "target": "Dev225", "target_user_id": 225, "weight": 0.11}, {"source": "Dev142", "source_user_id": 142, "target": "Dev140", "target_user_id": 140, "weight": 0.21}, {"source": "Dev142", "source_user_id": 142, "target": "Dev137", "target_user_id": 137, "weight": 0.24}, {"source": "Dev142", "source_user_id": 142, "target": "Dev225", "target_user_id": 225, "weight": 0.21}, {"source": "Dev140", "source_user_id": 140, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev140", "source_user_id": 140, "target": "Dev225", "target_user_id": 225, "weight": 0.11}, {"source": "Dev137", "source_user_id": 137, "target": "Dev225", "target_user_id": 225, "weight": 0.14}, {"source": "Dev77", "source_user_id": 77, "target": "Dev104", "target_user_id": 104, "weight": 0.14}, {"source": "Dev77", "source_user_id": 77, "target": "Dev362", "target_user_id": 362, "weight": 0.18}, {"source": "Dev77", "source_user_id": 77, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev77", "source_user_id": 77, "target": "Dev365", "target_user_id": 365, "weight": 0.18}, {"source": "Dev77", "source_user_id": 77, "target": "Dev65", "target_user_id": 65, "weight": 0.05}, {"source": "Dev77", "source_user_id": 77, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev104", "source_user_id": 104, "target": "Dev362", "target_user_id": 362, "weight": 0.05}, {"source": "Dev104", "source_user_id": 104, "target": "Dev365", "target_user_id": 365, "weight": 0.09}, {"source": "Dev362", "source_user_id": 362, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev362", "source_user_id": 362, "target": "Dev365", "target_user_id": 365, "weight": 0.05}, {"source": "Dev181", "source_user_id": 181, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev365", "source_user_id": 365, "target": "Dev65", "target_user_id": 65, "weight": 0.05}, {"source": "Dev365", "source_user_id": 365, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev65", "source_user_id": 65, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev326", "source_user_id": 326, "target": "Dev324", "target_user_id": 324, "weight": 0.12}, {"source": "Dev326", "source_user_id": 326, "target": "Dev220", "target_user_id": 220, "weight": 0.12}, {"source": "Dev326", "source_user_id": 326, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev326", "source_user_id": 326, "target": "Dev305", "target_user_id": 305, "weight": 0.12}, {"source": "Dev372", "source_user_id": 372, "target": "Dev305", "target_user_id": 305, "weight": 0.05}, {"source": "Dev324", "source_user_id": 324, "target": "Dev220", "target_user_id": 220, "weight": 0.11}, {"source": "Dev324", "source_user_id": 324, "target": "Dev359", "target_user_id": 359, "weight": 0.06}, {"source": "Dev324", "source_user_id": 324, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev359", "target_user_id": 359, "weight": 0.18}, {"source": "Dev220", "source_user_id": 220, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev448", "target_user_id": 448, "weight": 0.06}, {"source": "Dev359", "source_user_id": 359, "target": "Dev305", "target_user_id": 305, "weight": 0.2}, {"source": "Dev308", "source_user_id": 308, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev308", "source_user_id": 308, "target": "Dev305", "target_user_id": 305, "weight": 0.11}, {"source": "Dev308", "source_user_id": 308, "target": "Dev170", "target_user_id": 170, "weight": 0.05}, {"source": "Dev5", "source_user_id": 5, "target": "Dev94", "target_user_id": 94, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev381", "target_user_id": 381, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev145", "target_user_id": 145, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev381", "source_user_id": 381, "target": "Dev145", "target_user_id": 145, "weight": 0.04}, {"source": "Dev381", "source_user_id": 381, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev381", "source_user_id": 381, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev145", "source_user_id": 145, "target": "Dev214", "target_user_id": 214, "weight": 0.41}, {"source": "Dev145", "source_user_id": 145, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev145", "source_user_id": 145, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev63", "source_user_id": 63, "target": "Dev263", "target_user_id": 263, "weight": 0.19}, {"source": "Dev205", "source_user_id": 205, "target": "Dev250", "target_user_id": 250, "weight": 0.17}, {"source": "Dev205", "source_user_id": 205, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev351", "source_user_id": 351, "target": "Dev114", "target_user_id": 114, "weight": 0.11}, {"source": "Dev105", "source_user_id": 105, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev250", "source_user_id": 250, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev311", "source_user_id": 311, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev46", "target_user_id": 46, "weight": 0.03}, {"source": "Dev14", "source_user_id": 14, "target": "Dev180", "target_user_id": 180, "weight": 0.03}, {"source": "Dev161", "source_user_id": 161, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev180", "source_user_id": 180, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev14", "source_user_id": 14, "target": "Dev53", "target_user_id": 53, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev46", "source_user_id": 46, "target": "Dev335", "target_user_id": 335, "weight": 0.03}, {"source": "Dev46", "source_user_id": 46, "target": "Dev181", "target_user_id": 181, "weight": 0.03}, {"source": "Dev53", "source_user_id": 53, "target": "Dev335", "target_user_id": 335, "weight": 0.02}, {"source": "Dev53", "source_user_id": 53, "target": "Dev38", "target_user_id": 38, "weight": 0.07}, {"source": "Dev53", "source_user_id": 53, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev53", "source_user_id": 53, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev335", "target_user_id": 335, "weight": 0.05}, {"source": "Dev180", "source_user_id": 180, "target": "Dev38", "target_user_id": 38, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev137", "target_user_id": 137, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev335", "source_user_id": 335, "target": "Dev38", "target_user_id": 38, "weight": 0.02}, {"source": "Dev335", "source_user_id": 335, "target": "Dev137", "target_user_id": 137, "weight": 0.04}, {"source": "Dev335", "source_user_id": 335, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev38", "source_user_id": 38, "target": "Dev137", "target_user_id": 137, "weight": 0.02}, {"source": "Dev38", "source_user_id": 38, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev137", "source_user_id": 137, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev392", "source_user_id": 392, "target": "Dev335", "target_user_id": 335, "weight": 0.03}, {"source": "Dev242", "source_user_id": 242, "target": "Dev448", "target_user_id": 448, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev281", "source_user_id": 281, "target": "Dev305", "target_user_id": 305, "weight": 0.06}, {"source": "Dev281", "source_user_id": 281, "target": "Dev242", "target_user_id": 242, "weight": 0.06}, {"source": "Dev242", "source_user_id": 242, "target": "Dev308", "target_user_id": 308, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev324", "target_user_id": 324, "weight": 0.04}, {"source": "Dev38", "source_user_id": 38, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev36", "target_user_id": 36, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev363", "target_user_id": 363, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev27", "target_user_id": 27, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev411", "target_user_id": 411, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev447", "target_user_id": 447, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev425", "target_user_id": 425, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev236", "source_user_id": 236, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev36", "target_user_id": 36, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev363", "target_user_id": 363, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev27", "target_user_id": 27, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev411", "target_user_id": 411, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev447", "target_user_id": 447, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev425", "target_user_id": 425, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev435", "source_user_id": 435, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev36", "source_user_id": 36, "target": "Dev363", "target_user_id": 363, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev27", "target_user_id": 27, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev411", "target_user_id": 411, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev447", "target_user_id": 447, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev425", "target_user_id": 425, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev446", "target_user_id": 446, "weight": 0.11}, {"source": "Dev18", "source_user_id": 18, "target": "Dev178", "target_user_id": 178, "weight": 0.12}, {"source": "Dev446", "source_user_id": 446, "target": "Dev227", "target_user_id": 227, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev8", "target_user_id": 8, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev178", "target_user_id": 178, "weight": 0.06}, {"source": "Dev29", "source_user_id": 29, "target": "Dev138", "target_user_id": 138, "weight": 0.07}, {"source": "Dev29", "source_user_id": 29, "target": "Dev290", "target_user_id": 290, "weight": 0.11}, {"source": "Dev29", "source_user_id": 29, "target": "Dev140", "target_user_id": 140, "weight": 0.04}, {"source": "Dev29", "source_user_id": 29, "target": "Dev142", "target_user_id": 142, "weight": 0.11}, {"source": "Dev282", "source_user_id": 282, "target": "Dev81", "target_user_id": 81, "weight": 0.11}, {"source": "Dev415", "source_user_id": 415, "target": "Dev81", "target_user_id": 81, "weight": 0.06}, {"source": "Dev415", "source_user_id": 415, "target": "Dev336", "target_user_id": 336, "weight": 0.08}, {"source": "Dev415", "source_user_id": 415, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev81", "source_user_id": 81, "target": "Dev316", "target_user_id": 316, "weight": 0.11}, {"source": "Dev81", "source_user_id": 81, "target": "Dev336", "target_user_id": 336, "weight": 0.03}, {"source": "Dev81", "source_user_id": 81, "target": "Dev370", "target_user_id": 370, "weight": 0.06}, {"source": "Dev81", "source_user_id": 81, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev398", "source_user_id": 398, "target": "Dev336", "target_user_id": 336, "weight": 0.04}, {"source": "Dev398", "source_user_id": 398, "target": "Dev317", "target_user_id": 317, "weight": 0.06}, {"source": "Dev316", "source_user_id": 316, "target": "Dev336", "target_user_id": 336, "weight": 0.11}, {"source": "Dev316", "source_user_id": 316, "target": "Dev317", "target_user_id": 317, "weight": 0.1}, {"source": "Dev336", "source_user_id": 336, "target": "Dev370", "target_user_id": 370, "weight": 0.06}, {"source": "Dev370", "source_user_id": 370, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev415", "source_user_id": 415, "target": "Dev399", "target_user_id": 399, "weight": 0.07}, {"source": "Dev316", "source_user_id": 316, "target": "Dev399", "target_user_id": 399, "weight": 0.07}, {"source": "Dev14", "source_user_id": 14, "target": "Dev36", "target_user_id": 36, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev348", "target_user_id": 348, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev348", "source_user_id": 348, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev154", "source_user_id": 154, "target": "Dev205", "target_user_id": 205, "weight": 0.16}]}

let dadosUsuarios = []

inicia(dadosGrafo,dadosUsuarios)


function inicia(dadosGrafo,dadosUsuarios){
    dados_user3 = dadosUsuarios
    console.log('Verificando dados recebidos dentro de adicionarDadosAosNos:');
    console.log(dadosGrafo);
    console.log(dadosUsuarios);

    function adicionarDadosAosNos(dadosGrafo, dadosUsuarios) {
        // Primeiro, criar um mapeamento de user_id para os dados desejados de dadosUsuarios
        const usuarioParaDados = {};
        dadosUsuarios.forEach(user => {
            usuarioParaDados[user.user_id] = {
           // methodologies: user.methodology,
            projectsId: user.projects_id,
            };
        });

        // Depois, iterar sobre cada nó em dadosGrafo e adicionar os dados de methodology e projects_id
        dadosGrafo.nodes.forEach(node => {
            if (usuarioParaDados[node.user_id]) {
            // Assegurar que methodologies e projectsId são arrays antes de atribuir
           // node.methodology = Array.isArray(usuarioParaDados[node.user_id].methodologies) ? usuarioParaDados[node.user_id].methodologies : [];
            node.projects_id = Array.isArray(usuarioParaDados[node.user_id].projectsId) ? usuarioParaDados[node.user_id].projectsId : [];
            } else {
            // Se não existir correspondência em dadosUsuarios, inicializa com arrays vazios
           // node.methodology = [];
            node.projects_id = [];
            }
        });

        return dadosGrafo;
    }

    let dados_do_grafo = adicionarDadosAosNos(dadosGrafo, dadosUsuarios);


    // console.log('dados_do_grafo')
    // console.log(JSON.stringify(dados_do_grafo))        
      
    function montarPerfil(dados_do_grafo) {
          let perfis = {};

          // Mapeando os usuários e suas conexões
          dados_do_grafo.nodes.forEach(node => {
            perfis[node.id] = {
              username: node.id, // Adicionando o username baseado no ID do nó
              user_id: node.user_id,
              type: node.type,
              contractRoleName: node.contractRoleName, // Nome do papel do contrato
              hardskills: node.hardskill, // Assume que queremos apenas as 3 primeiras hardskills
              //methodology: [...new Set(node.methodology)], // Remove duplicatas das metodologias
              conexoes: {} // Prepara para adicionar conexões
            };
          });

          // Adicionando conexões e pesos entre os nós
          dados_do_grafo.edges.forEach(edge => {
            if (perfis[edge.source]) {
              perfis[edge.source].conexoes[edge.target] = edge.weight; // Adiciona conexão e peso
            }
          });

          // Convertendo o objeto de perfis em uma lista de perfis
          const listaDePerfis = Object.values(perfis);

          return listaDePerfis;
    }

    let perfisUsuarios =  montarPerfil(dados_do_grafo);
   
    //console.log('JSON.stringify(perfisUsuarios)')
    //console.log(JSON.stringify(perfisUsuarios))
    
    let pess = perfisUsuarios

    //document.getElementById("salvarprojeto").style.display = "block";
  
  

    pess = Object.entries(pess).map(([key, value]) => {
        return { id: key, ...value };
    });

    //entrada de tecnologias
    //skills_entrada = $('#entrada').val().split(/,/)

  

    //methodology = $('#method_proj').val().split(/,/)

  

   //if( skills_entrada.length === 1 && skills_entrada[0] === "") { skills_entrada = []}
 
   //if( methodology.length === 1 && methodology[0] === "") { methodology = []}

   
    //converte pra minusculas as hardskills e metodologias
    function converterParaMinusculas(pessoas) {
  
        for (let key in pessoas) {
            if (pessoas.hasOwnProperty(key)) {
            let pessoa = pessoas[key];

            if (Array.isArray(pessoa.hardskills)) {
                pessoa.hardskills = pessoa.hardskills.map(skill => skill.toLowerCase());
            }

           // if (Array.isArray(pessoa.methodology)) {
                
           //     pessoa.methodology = pessoa.methodology.map(method => method.toLowerCase());
            //}
            }
        }
    }
    // Chamando a função
    converterParaMinusculas(pess);
    function verificaHardskill(skills_entrada, pessoa) {
        for (let i = 0; i < skills_entrada.length; i++) {
            if (pessoa.hardskills.includes(skills_entrada[i].toLowerCase())) {
            
            return true;
            }
        }
        return false;
    }   

    //function verificaMetodologia(methodology, pessoa) {
    //    for (let i = 0; i < methodology.length; i++) {
      //      if (pessoa.methodology.includes(methodology[i].toLowerCase())) {
            
        //    return true;
       //     }
     //   }
     //   return false;
    //}  

      


    //$('.sugestao_1').empty();
    //$('.sugestao_2').empty();
   /*
    let devs = {
        DevMast: 0,
        DevPleno: 0,
        DevSeni: 0,
        DevJuni: 0    
    };
    
    // atribui os valores dos inputs aos atributos do objeto 'devs'
    for (const key in devs) {
        if (devs.hasOwnProperty(key)) {
            devs[key] = parseInt($(`#${key}`).val()) || 0; // garante que o valor é um número inteiro
        }
    }
   
    // soma o tamanho da equipe com base na quantidade de cada tipo de desenvolvedor
    
 */
    //alert('tamanho_equipe')
    //alert(tamanho_equipe)

    let devs = {
        DevMast: 1,
        DevPleno: 1,
        DevSeni: 1,
        DevJuni: 1    
    };
    tamanho_equipe += devs.DevMast + devs.DevPleno + devs.DevSeni + devs.DevJuni;
    
    function verificaNivel(nivel) {
    // Verifica se o nível requisitado está disponível na entrada dos desenvolvedores
    if (nivel === "Master" && devs.DevMast > 0) {
        return true;
    } else if (nivel === "Middle" && devs.DevPleno > 0) {
        return true;
    } else if (nivel === "Senior" && devs.DevSeni > 0) {
        return true;
    } else if (nivel === "Junior" && devs.DevJuni > 0) {
        return true;
    }
    
    return false;
    }



    let vetor_denivel = []

    if (devs.DevMast > 0) {
        vetor_denivel.push('Master')
    } 
    if (devs.DevPleno > 0) {
        vetor_denivel.push('Middle')
    }
    if (devs.DevSeni > 0) {
        vetor_denivel.push('Senior')
    }
    if (devs.DevJuni > 0) {
        vetor_denivel.push('Junior')
    }
    
    console.log("vetor_denivel")
    console.log(vetor_denivel)

    


    let counter = 0
    let pessoa = []

    if(skills_entrada.length > 0 ){
        for(let i=0;i<pess.length;i++){  
    
        addiciona:
        
        if ( verificaNivel(pess[i].contractRoleName) && verificaHardskill(skills_entrada, pess[i]) && pess[i].contractRoleName !== "Project Manager"){
                    
            
                        
            
                        let novouser = {
                            id:counter+1,
                            user_id: pess[i].user_id,
                            name:pess[i].username,
                            id_anonimized: pess[i].id_anonimized,
                            perfil:'Developer', 
                            level:pess[i].contractRoleName,
                            contractRole: 'Specialist',
                            hardskill: pess[i].hardskills,
                            
                           // methodology: pess[i].methodology,
                            fit:0,
                            vetor_hardskill: [],
                            
                            //vetor_metodologia: [],
                            conexoes: pess[i].conexoes,

                        }
                        pessoa.push(novouser)  
                    
                        counter++
                        break addiciona
            }  
            
        }


    }
    else {
    alert('Add technologies!')
    }

    console.log('De um total de '+ pess.length+ ', ' +pessoa.length+' users foram adicionados com: '+skills_entrada)
    let level = []       
    for (let i = 0; i< pessoa.length; i++){ 
        level.push(pessoa[i].level)
    }

    converterSkillsParaMinusculas(skills_entrada)
   // converterSkillsParaMinusculas(methodology)

    function converterSkillsParaMinusculas(skills_entrada) {
        for (let i = 0; i < skills_entrada.length; i++) {
        skills_entrada[i] = skills_entrada[i].toLowerCase();
        
        }
    }
    //construindo vetor do projeto
    let vetorProjeto = {
        hardskill_entrada: [],
        metodologia_entrada:[]
    }
    for(let i=0; i<skills_entrada.length; i++){
        vetorProjeto.hardskill_entrada.push(1)
    }
    
   // for(let i=0; i<methodology.length; i++){
   //     vetorProjeto.metodologia_entrada.push(1)
   // }
    vetorProjeto = vetorProjeto.hardskill_entrada;

    console.log(JSON.stringify(vetorProjeto))
    //montando vetor de cada pessoa pra obter o fitness
    for(let i=0; i<pessoa.length; i++){
    
        let vetor_entradas = []
        //pegando as hardskills
        if(skills_entrada.length > 0){
            if(pessoa[i].hardskill.length > 0){
            for(let j=0; j<skills_entrada.length;j++){
                if(pessoa[i].hardskill.includes(skills_entrada[j])){
                pessoa[i].vetor_hardskill.push(1)
                }
                else{
                pessoa[i].vetor_hardskill.push(0)
                }
            }
            }
            else{
                for(let y=0; y<skills_entrada.length;y++){
                pessoa[i].vetor_hardskill.push(0)
                }
            }
        }
        //pegando as metodologias
        /*
        if(methodology.length > 0){
            if(pessoa[i].methodology.length > 0){
            for(let m=0; m<methodology.length; m++){
                if(pessoa[i].methodology.includes(methodology[m])){
                pessoa[i].vetor_metodologia.push(1)
                }
                else{
                pessoa[i].vetor_metodologia.push(0)
                }
            }
            }
            else{
                for(let y=0; y<methodology.length;y++){
                pessoa[i].vetor_metodologia.push(0)
                }
            }
        }
        */
    }
    const similaridades = calculaSimilaridade(vetorProjeto, pessoa);

    function calculaSimilaridade(vetorProjeto, pessoas) {
        const k = vetorProjeto.length; // tamanho do vetor do projeto
        
        // Normalização do vetor de entrada do projeto
        const vetorProjetoNormalizado = vetorProjeto.map((valor, indice) => {
            // considerando apenas o vetor de hard skills
            const maxValor = 2; // valor máximo possível para a hard skill
            return valor / maxValor; // divide pelo valor máximo
        });
        
        // Normalização dos vetores de cada pessoa
        /*
        const pessoasNormalizadas = pessoas.map(pessoa => {
            const vetorPessoa = pessoa.vetor_hardskill.concat( pessoa.vetor_metodologia);
            const maxValor = 2; // valor máximo possível para a hard skill
            return vetorPessoa.map(valor => valor / maxValor); // divide pelo valor máximo
        });
        */
       // Normalização dos vetores de cada pessoa
    const pessoasNormalizadas = pessoas.map(pessoa => {
        // Removendo a concatenação com vetor_metodologia
        const vetorPessoa = pessoa.vetor_hardskill;
        const maxValor = 2; // valor máximo possível para a hard skill
        return vetorPessoa.map(valor => valor / maxValor); // divide pelo valor máximo
    });

        
        // Cálculo da similaridade de Manhattan entre cada pessoa e o vetor do projeto
        const similaridades = pessoasNormalizadas.map((pessoa, indice) => {
            const diferencaAbsoluta = pessoa.map((valor, indice) => {
            return Math.abs(valor - vetorProjetoNormalizado[indice]);
            });
            const somaDiferencas = diferencaAbsoluta.reduce((soma, valor) => soma + valor, 0);
            const similaridade = 1 - (somaDiferencas / k);
            pessoas[indice].fit = similaridade.toFixed(2)
            return { nome: pessoas[indice].nome, similaridade: similaridade.toFixed(2) };
        });
        
        return similaridades;
    }

    //pega o nivel do dev
    function buscalevel(auxi){
        let level = ''
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].user_id === auxi) {
                level = pessoa[j].level
            }
        }
        return level;
    }


    //pega os nomes
    function buscaname(auxi){
        let name = ''
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].user_id === auxi) {
                name = pessoa[j].name
            }
        }
        return name;
    }
    
    //pega os fit
    function buscafit(auxi){
        let fit = 0
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].id === auxi) {
                
                fit = pessoa[j].fit
                break
            }
        }
        return fit;
    }
    let qtdMaster  = 0 
    let qtdSenior  = 0 
    let qtdPleno  = 0 
    let qtdJunior = 0
    let array_niveis = []

    function LevelFoiAdd(nivel){
        return array_niveis.includes(nivel)
    }


    function verificaInclusao(array_niveis, vetor_denivel) {
        return vetor_denivel.every(item => array_niveis.includes(item));
    }


    //criando a população inicial
    // Suposições para que o exemplo funcione:
    // - As funções buscalevel, buscafit, e buscaname estão definidas em outro lugar.
    // - A variável pessoa é um array de objetos, onde cada objeto representa uma pessoa com propriedades como user_id.
    // - Inicializações necessárias das variáveis que não foram detalhadas na pergunta original.


    function cromossomoEhUnico(novoCromossomo, populacao) {
        // Transforma o array de genes do novoCromossomo em uma string ordenada para comparação
        let novoCromossomoGenesString = novoCromossomo.cromo.slice().sort().join(',');

        // Itera sobre cada cromossomo da população para verificar se algum é idêntico ao novoCromossomo
        for (let i = 0; i < populacao.length; i++) {
            let cromossomoAtualGenesString = populacao[i].cromo.slice().sort().join(',');
            
            // Compara as strings dos genes ordenados
            if (novoCromossomoGenesString === cromossomoAtualGenesString) {
                return false; // Um cromossomo idêntico foi encontrado na população
            }
        }

        // Nenhum cromossomo idêntico foi encontrado; o novoCromossomo é único
        return true;
    }
    function selecionarIndividuoUnico(pessoa, array_niveis, array_auxi, arrayde_cromo) {
        let tentativas = 0;
        let maxTentativas = 500; // Limita as tentativas para evitar loop infinito
        while (tentativas < 1000) {
            let index = Math.floor(Math.random() * pessoa.length);
            let auxi = pessoa[index].user_id;
            let nivelAuxi = buscalevel(auxi);
            if (!array_niveis.includes(nivelAuxi) && !array_auxi.map(item => item.user_id).includes(auxi) && buscafit(auxi) > 0) {
                    // Verifica se o indivíduo já existe no arrayde_cromo
                if (!arrayde_cromo.some(cromo => cromo.cromo.includes(auxi))) {
                    return { auxi, nivelAuxi }; // Retorna o user_id e o nível se satisfizer os critérios
                }
              
            }
            tentativas++;
        }
        return null; // Retorna null se não encontrar um indivíduo adequado
    }
    function selecionarIndividuoUnico_flexivel(pessoa, array_niveis, array_auxi, arrayde_cromo) {
        let tentativas = 0;
        let maxTentativas = 500; // Limita as tentativas para evitar loop infinito
        while (tentativas < 1000) {
            let index = Math.floor(Math.random() * pessoa.length);
            let auxi = pessoa[index].user_id;
            let nivelAuxi = buscalevel(auxi);
            if (!array_niveis.includes(nivelAuxi) && !array_auxi.map(item => item.user_id).includes(auxi) ){
                    // Verifica se o indivíduo já existe no arrayde_cromo
                if (!arrayde_cromo.some(cromo => cromo.cromo.includes(auxi))) {
                    return { auxi, nivelAuxi }; // Retorna o user_id e o nível se satisfizer os critérios
                }
              
            }
            tentativas++;
        }
        return null; // Retorna null se não encontrar um indivíduo adequado
    }

    

    // Passo 1: gera população inicial 


  
    for (let u= 0; u <10; u++){  //tamanho da população
        let auxi = 0
        let cont = 0 
        let tes = new Object( //cria um novo cromossomo
            {id:u,
            cromo:[],
            fit:[],
            nomes:[],
            levels:[],
            fitnessBase:0,
            pesoSocial:0,
            total_fit:0
        })
        arrayde_cromo.push(tes)//coloca no array o novo cromossomo
    }

    
    let array_auxi = [];



    let array_niveis_auxi = [];
    
   for (let individuo=0; individuo< 10; individuo ++) {
        let tamanho_equipe = 0;
        array_auxi = [];
        array_niveis_auxi = [];
        console.log('individuo ',individuo)
        // A lógica para selecionar indivíduos únicos e criar um novo cromossomo permanece a mesma.
         do{
            let resultado = selecionarIndividuoUnico(pessoa, array_niveis_auxi, array_auxi, arrayde_cromo);
            if (resultado) {
                let { auxi, nivelAuxi } = resultado;
                array_niveis_auxi.push(nivelAuxi);
                array_auxi.push({
                    user_id: auxi,
                    fit: buscafit(auxi),
                    name: buscaname(auxi),
                    level: nivelAuxi
                });
                tamanho_equipe++;
            } else {
                break; // Sai do loop se não conseguir encontrar mais indivíduos únicos.
            }console.log(array_niveis_auxi)
        }while (tamanho_equipe < 4);
        console.log('array_auxi tamanho',array_auxi.length)
        console.log('array_auxi', JSON.stringify(array_auxi))
        //alert(tamanho_equipe)
        // Após formar um cromossomo completo, verifique sua unicidade antes de adicioná-lo à população.
        if (array_auxi.length === 4) {
            // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
            for (let u = 0; u < array_auxi.length; u++) {
                arrayde_cromo[individuo].cromo.push(array_auxi[u].user_id);
                arrayde_cromo[individuo].fit.push(array_auxi[u].fit);
                arrayde_cromo[individuo].nomes.push(array_auxi[u].name);
                arrayde_cromo[individuo].levels.push(array_auxi[u].level);
            }
                
        } else {
            if (array_auxi.length === 3) {
                // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
                let resultado = selecionarIndividuoUnico_flexivel(pessoa, array_niveis_auxi, array_auxi, arrayde_cromo);
                if (resultado) {
                    let { auxi, nivelAuxi } = resultado;
                    array_niveis_auxi.push(nivelAuxi);
                    array_auxi.push({
                        user_id: auxi,
                        fit: buscafit(auxi),
                        name: buscaname(auxi),
                        level: nivelAuxi
                    });
                    for (let u = 0; u < array_auxi.length; u++) {
                        arrayde_cromo[individuo].cromo.push(array_auxi[u].user_id);
                        arrayde_cromo[individuo].fit.push(array_auxi[u].fit);
                        arrayde_cromo[individuo].nomes.push(array_auxi[u].name);
                        arrayde_cromo[individuo].levels.push(array_auxi[u].level);
                    }
                }
                    
            } else {           
            console.log("não foi possível formar um cromossomo completo");
            }
        }
    }
    console.log('##############################')

    console.log('tamanho da população inicial')

    console.log(arrayde_cromo.length)
    console.log('##############################')

    console.log(' Log da população  inicial criada ')
    console.log(JSON.stringify(arrayde_cromo));

    console.log('##############################')



    //removendo skills duplicadas
    for (let i = 0; i < pessoa.length; i++) {
        let hardskillUnicas = pessoa[i].hardskill.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        pessoa[i].hardskill = hardskillUnicas;
    }

    //removendo methodologies duplicadas
   // for (let i = 0; i < pessoa.length; i++) {
   //     let MethodUnicas = pessoa[i].methodology.filter((value, index, self) => {
    //        return self.indexOf(value) === index;
     //   });
    //    pessoa[i].methodology = MethodUnicas;
    //}
    //funcao de busca por id nos dados_do_Grafo
    function buscarUserIdPorId( idProcurado) {
        const nodo = dados_do_grafo.nodes.find(nodo => nodo.id === idProcurado);
        return nodo ? nodo.user_id : null;
    }
    //funcao pra encontrar projetos em comum
    function encontrarProjetosEmComum(dados_user3, nomeDev1, nomeDev2) {
        // Extrai os IDs numéricos dos nomes dos desenvolvedores
        let id1 = buscarUserIdPorId(nomeDev1)
        let id2 = buscarUserIdPorId(nomeDev2)

        // Encontra os usuários correspondentes pelos IDs
        let usuario1 = dados_user3.find(usuario => usuario.user_id === id1);
        let usuario2 = dados_user3.find(usuario => usuario.user_id === id2);

        if (usuario1 && usuario2) {
            // Pega os projetos de cada um
            let projetosUsuario1 = new Set(usuario1.projects_id);
            let projetosUsuario2 = new Set(usuario2.projects_id);

            // Encontra os projetos em comum
            let projetosEmComum = [...projetosUsuario1].filter(id => projetosUsuario2.has(id));
            if(projetosEmComum.length > 0){
                            console.log(`Projetos em comum entre ${nomeDev1} e ${nomeDev2}:`, projetosEmComum);
            }
            return projetosEmComum;
        } else {
            console.log(`Usuário não encontrado: ${nomeDev1} ou ${nomeDev2}`);
            return [];
        }
    }

    //funcao para calcular o peso social do nomes cromossomo
     function calcularPesoSocial(nomes, arestas) {
        let pesoSocial_total = 0;
        
        // Normaliza os edges sem redefinir o parâmetro original
        let edges = arestas.map(edge => ({
            source: edge.source,
            target: edge.target,
            weight: parseFloat(edge.weight) // Garante que weight é um número
        }));

    // console.log("Edges :", JSON.stringify(edges));

        for (let i = 0; i < nomes.length - 1; i++) {
            let projetosEmComum = []
            for (let j = i + 1; j < nomes.length; j++) {
                let aresta = edges.find(edge =>
                    (edge.source === nomes[i] && edge.target === nomes[j]) ||
                    (edge.source === nomes[j] && edge.target === nomes[i])
                );
               
                             
                if (aresta)  {
                                    
                    projetosEmComum = encontrarProjetosEmComum(dados_user3, nomes[i], nomes[j]);
                    pesoSocial_total += aresta.weight;
                    console.log('Encontrou aresta entre:', nomes[i], 'e', nomes[j], 'Peso:', aresta.weight, 'projetosEmComum: ', projetosEmComum, 'pesoSocial_total: ', pesoSocial_total.toFixed(2));
                   
                    
                } else {
                    if (!aresta)  {
                        console.log('Não encontrada aresta entre:', nomes[i], 'e', nomes[j]);
                       
                    }
                }
                // Aqui chamamos a nova função para encontrar projetos em comum
                
            }

        }

        if(pesoSocial_total === 0 ){
            const PESO_MINIMO = 0.01; // Define um peso mínimo para garantir contribuição no fitness
            pesoSocial_total = Math.max(pesoSocial_total, PESO_MINIMO);
        }

        //console.log("Peso Social Total:", pesoSocial_total);
        return pesoSocial_total;
    }
    //funcao pra calcular o fitness
    function cfit(fits, nomes, arestas) {
            
        let fitnessBase_aux = 0;
        // Calcula o fitness base com base nos valores individuais de fit
        for (let i = 0; i < fits.length; i++) {
            // fitnessBase_aux += Math.floor(parseFloat(fits[i]) * 10);
            fitnessBase_aux += parseFloat(fits[i]);
        }
        // Calcula o peso social para o fits
        let pesoSocial = calcularPesoSocial(nomes, arestas );
        // Multiplica o fitness base pelo peso social para obter o fitness total
        console.log(nomes)
        console.log('fitnessBase_aux',fitnessBase_aux.toFixed(2))
        console.log('pesoSocial',pesoSocial)
        

        let fitnessTotal = fitnessBase_aux * pesoSocial;
        console.log('fitnessTotal',fitnessTotal.toFixed(2))

        // Retornar tanto o fitnessTotal quanto o pesoSocial
        return { fitnessTotal, pesoSocial, fitnessBase_aux };
    }




    let maxIteracoes = 100; // Um número máximo de iterações por segurança
    let iteracaoAtual = 0;

    let geracoes = 0

    while( geracoes < 10 || iteracaoAtual < maxIteracoes ){//condição de parada



        if (arrayde_cromo.length === 3) {
           
            //gera novo indivídsuo único (aumentar diversidade) para completar tamanho 4 da população
            let tes = new Object( //cria um novo cromossomo
            {
            cromo:[],
            fit:[],
            nomes:[],
            levels:[],
            fitnessBase:0,
            pesoSocial:0,
            total_fit:0
        })
        arrayde_cromo.push(tes)//coloca no array o novo cromossomo
        console.log('================= novo individuo========')
        console.log(arrayde_cromo)
        console.log('========================================')
        let auxi = 0
        let array_niveis =[]
        array_auxi = [];
        popul=0
        while (popul < tamanho_equipe) {
            let resultado = selecionarIndividuoUnico(pessoa, array_niveis, array_auxi, arrayde_cromo);
            if (resultado) {
                let { auxi, nivelAuxi } = resultado;
                array_niveis.push(nivelAuxi);
                array_auxi.push({
                    user_id: auxi,
                    fit: buscafit(auxi),
                    name: buscaname(auxi),
                    level: nivelAuxi
                });
                popul++;
            } else {
                break; // Sai do loop se não conseguir encontrar mais indivíduos únicos.
            }        
        }
        if (popul === tamanho_equipe) {
            // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
            for (let u = 0; u < array_auxi.length; u++) {
                arrayde_cromo[3].cromo.push(array_auxi[u].user_id);
                arrayde_cromo[3].fit.push(array_auxi[u].fit);
                arrayde_cromo[3].nomes.push(array_auxi[u].name);
                arrayde_cromo[3].levels.push(array_auxi[u].level);
            }
                
        } else {
            console.log("não foi possível formar um cromossomo completo");
        }


        }
        // Passo2: calcula fitness de cada cromossomo (aptidao)
        for (let i = 0; i < arrayde_cromo.length; i++) {
            // Captura o retorno de cfit
            
            let { fitnessTotal, pesoSocial, fitnessBase_aux } = cfit(arrayde_cromo[i].fit, arrayde_cromo[i].nomes, dados_do_grafo.edges);
            
            //Atribui fitnes base ao cromossomo
            arrayde_cromo[i].fitnessBase = fitnessBase_aux.toFixed(2);

            // Atribui o fitnessTotal ao cromossomo
            arrayde_cromo[i].total_fit = fitnessTotal;

            // Atribui o pesoSocial ao cromossomo
            arrayde_cromo[i].pesoSocial = pesoSocial;  
        }
        console.log('----------------------------------------')
        console.log(arrayde_cromo[0].total_fit.toFixed(2));


        // Passo 3: ordena os indivíduos do maior para o menor fitness
        arrayde_cromo.sort(function(a, b) {
            if (a.total_fit < b.total_fit) { return 1}
            if (a.total_fit > b.total_fit) { return -1}
            return 0; //retorne 0 se 'a' for igual a 'b'
        });
    
        console.log('arrayde_cromo ordenado com base no total fit')
        console.log(JSON.stringify(arrayde_cromo))
        console.log('tamanho ' ,arrayde_cromo.length)

        
        console.log('______________GERACAO:____',geracoes)
    
        //imprime a populacao criada
        for(let i =0; i< arrayde_cromo.length; i++){
            console.log(' cromossomo : ',i)
            console.log('ids: ', arrayde_cromo[i].cromo)
            console.log('nomes : ', arrayde_cromo[i].nomes)
            console.log('fit : ', arrayde_cromo[i].fit)
            console.log('nível: ', arrayde_cromo[i].levels)
            console.log('total fit : ', arrayde_cromo[i].total_fit.toFixed(2))
        }
        console.log('___________')
        console.log('tamanho da população: ',arrayde_cromo.length, ' individuos')
        geracoes ++;

        arrayde_cromo.forEach(cromossomo => sugestoes.push(cromossomo));

    
        //Elitismo mantém os dois melhores indivíduos da população
        // Ordenar pelo fitness total, do maior para o menor
        arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        // Seleciona os N melhores indivíduos da população
        const N = 1; // Define quantos dos melhores indivíduos manter
        const melhoresIndividuos = arrayde_cromo.slice(0, N);

        arrayde_cromo.splice(0, N);//remove da população so melhor individuo
        //imprime a populacao criada
        console.log('População SEM o melhor individuo')
        for(let i =0; i< arrayde_cromo.length; i++){
            console.log(' cromossomo : ',i)
            console.log('ids: ', arrayde_cromo[i].cromo)
            console.log('nomes : ', arrayde_cromo[i].nomes)
            console.log('fit : ', arrayde_cromo[i].fit)
            console.log('total fit : ', arrayde_cromo[i].total_fit.toFixed(2))
        }


        // Atualiza a população para manter apenas os N melhores indivíduos
        let elite = [...melhoresIndividuos];
        console.log('elite: ', elite)


        // Passo 4: Seleção do mais adaptado => método da roleta escolhe dois pais aleatoriamente mas considera porcentagens individuais
        let v = [] //roleta pra seleção
        let a=0
        v = arrayde_cromo //copia o array da população
        for(let i=0;i<arrayde_cromo.length;i++){
            a = arrayde_cromo[i].total_fit + a //soma todos fitness de todos indivíduos
        }
        let p = [] //cria array de porcentagens
        for(let i=0;i<arrayde_cromo.length;i++){
            p[i] = v[i].total_fit / a //porcentagem do indivíduo 'i' será igual ao fitness do indivíduo dividido '/' pelo total de fitness 'a' de todos indivíduos
        }
        q = [] //cria array para soma acumulativa

        //alert(tamanho_equipe)
        for(let i=0;i<tamanho_equipe;i++){ 
            q.push(0) //preenche o array 'q' com zeros
        }
        let aux =0
        for(let i=0;i<p.length;i++){
            q[i] = p[i]+aux; //preenche o array 'q' com as porcentagens de 'p'
            aux = q[i] ;
        }
        
        let pais = []; // cria array de pais
        let r = 0;
        while(pais.length < 2){ // enquanto o tamanho do array pais não chega a 2
            r = Math.random(); // gera número aleatório entre 0 e 1
            for(let i=0; i<arrayde_cromo.length; i++){
                if(i === 0 ? r < q[0] : r > q[i-1] && r < q[i]){ // ajuste para considerar o primeiro intervalo e os subsequentes
                    let nomeAtual = arrayde_cromo[i].nomes[0];
                    let jaExiste = pais.some(pai => pai.nomes[0] === nomeAtual); // verifica se o pai atual já existe no array de pais
                    if(!jaExiste && pais.length < 2){ // se não existe e ainda há espaço para pais
                        pais.push(arrayde_cromo[i]); // adiciona o pai atual ao array de pais
                        break; // sai do loop for, pois já encontramos um pai para esta iteração
                    }
                }
            }
        }
        //reinicia ids dos pais selecionados
        for(let p=0;p<pais.length;p++){
            pais[p].id =  p
        }
        
       
        //fucnao pra ordenar os niveis dos pais pra garantir niveis unicos para o cruzamento
        function nivelParaNumero(nivel) {
            const ordem = {
                'Junior': 1,
                'Middle': 2,
                'Senior': 3,
                'Master': 4
            };
            return ordem[nivel] || 0; // Retorna 0 como valor padrão se o nível não for encontrado
        }
        function ordenarPaiPorNiveis(pai) {
            // Criar um array de índices para ordenar
            let indices = pai.levels.map((nivel, index) => index);
        
            // Ordenar os índices com base nos níveis
            indices.sort((a, b) => nivelParaNumero(pai.levels[a]) - nivelParaNumero(pai.levels[b]));
        
            // Reorganizar os arrays de cromossomos, níveis, nomes e fits com base nos índices ordenados
            pai.cromo = indices.map(index => pai.cromo[index]);
            pai.levels = indices.map(index => pai.levels[index]);
            pai.nomes = indices.map(index => pai.nomes[index]);
            pai.fit = indices.map(index => pai.fit[index]);
        }
        
        // Ordenar ambos os pais
        ordenarPaiPorNiveis(pais[0]);
        ordenarPaiPorNiveis(pais[1]);
         
        //imprime pais selecionados
        for(let i =0; i< pais.length; i++){
            console.log('_____PAIS______')
            console.log(' pai : ',i)
            console.log('ids: ', pais[i].cromo)
            console.log('niveis : ', pais[i].levels)

            console.log('nomes : ', pais[i].nomes)
            console.log('fit : ', pais[i].fit)
            console.log('___________')
        }



        // Passo 5: cruzamentos: O ponto de corte é aleatório entre a posicao 1 e 3
        // Supondo que 'pais' é um array com os dois pais selecionados E 'arrayde_cromo' é a população atual
        /*
        let corte = Math.floor(Math.random() * (tamanho_equipe - 2)) + 1;

        
        let filhos = [];
        // Gerando dois filhos a partir dos pais
        let paisSegmentos1 = {
            primeirocromo: pais[0].cromo.slice(0, corte),
            segundocromo: pais[1].cromo.slice(corte),

            primeironomes: pais[0].nomes.slice(0, corte),
            segundonomes: pais[1].nomes.slice(corte),

            primeirofit: pais[0].fit.slice(0, corte),
            segundofit: pais[1].fit.slice(corte),

            primeirolevel: pais[0].levels.slice(0, corte),
            segundolevel: pais[1].levels.slice(corte)
          };
          let paisSegmentos2 = {
            primeirocromo: pais[1].cromo.slice(0, corte),
            segundocromo: pais[0].cromo.slice(corte),

            primeironomes: pais[1].nomes.slice(0, corte),
            segundonomes: pais[0].nomes.slice(corte),

            primeirofit: pais[1].fit.slice(0, corte),
            segundofit: pais[0].fit.slice(corte),

            primeirolevel: pais[1].levels.slice(0, corte),
            segundolevel: pais[0].levels.slice(corte)
          };
          console.log('corte')
          console.log(corte)
          console.log('paisSegmentos1.primeironomes')
          console.log(paisSegmentos1.primeironomes)
          console.log('paisSegmentos1.segundonomes')
          console.log(paisSegmentos1.segundonomes)
          
          console.log('paisSegmentos2.primeironomes')
          console.log(paisSegmentos2.primeironomes)
          console.log('paisSegmentos2.segundonomes')
          console.log(paisSegmentos2.segundonomes)

        for (let u = 0; u < 2; u++) {
            let filho = { cromo: [], fit: [], nomes: [],  levels:[],  fitnessBase:0,  pesoSocial:0, total_fit:0 };

        

            if(u === 0){
                filho.cromo = paisSegmentos1.primeirocromo.concat(paisSegmentos1.segundocromo);
                filho.nomes = paisSegmentos1.primeironomes.concat(paisSegmentos1.segundonomes);
                filho.fit = paisSegmentos1.primeirofit.concat(paisSegmentos1.segundofit);
                filho.levels = paisSegmentos1.primeirolevel.concat(paisSegmentos1.segundolevel);

            }
            if(u === 1){
                filho.cromo = paisSegmentos2.primeirocromo.concat(paisSegmentos2.segundocromo);
                filho.nomes = paisSegmentos2.primeironomes.concat(paisSegmentos2.segundonomes);
                filho.fit = paisSegmentos2.primeirofit.concat(paisSegmentos2.segundofit);
                filho.levels = paisSegmentos2.primeirolevel.concat(paisSegmentos2.segundolevel);
            }
           
        
           
            filhos.push(filho);
            
        }
        */
        // Supondo que 'pais' é um array com os dois pais selecionados
// E 'tamanho_equipe' é o número de características de cada indivíduo

let filhos_teste = [];

for (let u = 0; u < 2; u++) {
    let filho = { cromo: [], fit: [], nomes: [], levels: [], fitnessBase: 0, pesoSocial: 0, total_fit: 0 };
    
    // Para cada gene/característica dos pais
    for (let i = 0; i < tamanho_equipe; i++) {
        // Gera um coeficiente alpha aleatório para cada gene
        let alpha = Math.random();
        console.log('alpha ', i, ' ', alpha);
        
        // Aplica a combinação convexa para o 'fit'
        let fit_combinado = alpha * pais[0].fit[i] + (1 - alpha) * pais[1].fit[i];
        filho.fit.push(fit_combinado);

        // Decidir de qual pai herdar com base na proximidade do 'fit' combinado aos 'fit' dos pais
        let diferenca_fit_pai_0 = Math.abs(fit_combinado - pais[0].fit[i]);
        let diferenca_fit_pai_1 = Math.abs(fit_combinado - pais[1].fit[i]);
        console.log('diferenca_fit_pai_0 ',diferenca_fit_pai_0)
        console.log('diferenca_fit_pai_1 ',diferenca_fit_pai_1)
        // Se a diferença para o pai 0 for menor ou igual à diferença para o pai 1, herda do pai 0, senão do pai 1
        if (diferenca_fit_pai_0 < diferenca_fit_pai_1) {
            filho.nomes.push(pais[0].nomes[i]);
            filho.levels.push(pais[0].levels[i]);
            filho.cromo.push(pais[0].cromo[i]);
        } else {
            filho.nomes.push(pais[1].nomes[i]);
            filho.levels.push(pais[1].levels[i]);
            filho.cromo.push(pais[1].cromo[i]);
        }
    }
    
    // Aqui você adicionaria lógica para ajustar 'filho' e garantir unicidade e restrições de nível
    // Por exemplo, verificação e substituição de membros repetidos, como discutido anteriormente
    
    filhos_teste.push(filho);
}

// Lógica para imprimir ou processar os filhos gerados
console.log(filhos_teste);


function encontrarRepeticoesEntreDoisFilhos(filhos, indiceFilhoA, indiceFilhoB) {
    const filhoA = filhos[indiceFilhoA];
    const filhoB = filhos[indiceFilhoB];
    
    let repeticoes = []; // Armazena detalhes dos genes repetidos entre os dois filhos

    // Verifica se algum gene de filhoA está repetido em filhoB
    filhoA.cromo.forEach((idA, indexA) => {
        if (filhoB.cromo.includes(idA)) {
            // Encontrou uma repetição entre filhoA e filhoB
            const indexB = filhoB.cromo.indexOf(idA); // Encontra o índice correspondente no filhoB
            repeticoes.push({
                indice:indexA,
                id: idA,
                fitB: filhoB.fit[indexB],
                nomeB: filhoB.nomes[indexB],
                levelB: filhoB.levels[indexB]
            });
        }
    });

    return repeticoes; // Retorna a lista de genes repetidos entre os dois filhos
}

// Supondo que 'filhos_teste' é sua lista de filhos e você quer comparar o filho 0 com o filho 1
let repeticoesEntreFilhos = encontrarRepeticoesEntreDoisFilhos(filhos_teste, 0, 1);

console.log('Repetidos: ',repeticoesEntreFilhos);


function encontrarSubstitutoSimilar(idOriginal, cromossomoAtual, fitAtual, levelAtual, pessoa) {
    // Filtra candidatos que têm o mesmo nível e um fit técnico similar ou superior, e que não estão no cromossomo atual
    let substitutos = pessoa.filter(p => 
        p.level === levelAtual && 
        !cromossomoAtual.includes(p.user_id) &&
        p.fit >= fitAtual // Aqui você pode ajustar a comparação de fit conforme necessário
    );

    if (substitutos.length > 0) {
        // Se existem substitutos, seleciona um aleatoriamente
        let selecaoAleatoria = Math.floor(Math.random() * substitutos.length);
        return substitutos[selecaoAleatoria];
    } else {
        // Se não encontrar nenhum substituto adequado, retorna null ou uma ação alternativa
        return null;
    }
}



// Supondo que 'repeticoesEntreFilhos' é a saída que mostra os membros repetidos
repeticoesEntreFilhos.forEach(repetido => {
    console.log('indiceParaSubstituirNoFilho1', repetido.indice);
    console.log('entao vou mudar filhos[1].cromo o valor', filhos_teste[1].cromo[repetido.indice]);
    
    // Procede com a busca por um substituto
    let substituto = encontrarSubstitutoSimilar(
        repetido.id, 
        filhos_teste[1].cromo, 
        repetido.fitB, 
        repetido.levelB, 
        pessoa // O pool de candidatos
    );

    if (substituto) {
        // Se encontrou um substituto, realiza a substituição no cromossomo, nomes, levels, e fit do filho 1
        filhos_teste[1].cromo[repetido.indice] = substituto.user_id;
        filhos_teste[1].nomes[repetido.indice] = substituto.name; // Asegure-se de que a chave seja 'name'
        filhos_teste[1].levels[repetido.indice] = substituto.level;
        filhos_teste[1].fit[repetido.indice] = substituto.fit;
        console.log(`Substituído ID ${repetido.id} por ${substituto.user_id} no índice ${repetido.indice}`);
    } else {
        console.log('Nenhum substituto adequado encontrado para:', repetido.nomeB);
    }
});





    
  
        /*
        // Gerando dois filhos a partir dos pais
        for (let u = 0; u < 2; u++) {
            let filho = {cromo: [], fit: [], nomes: [], total_fit: 0};
            let genesUnicos = new Set(); // Usado para garantir unicidade
            let corte = Math.floor(Math.random() * (tamanho_equipe - 2)) + 1;
            let paisSegmentos = u % 2 === 0 ? [pais[0], pais[1]] : [pais[1], pais[0]];
            // Adiciona genes garantindo unicidade
            paisSegmentos[0].cromo.slice(0, corte).forEach(gene => genesUnicos.add(gene));
            paisSegmentos[1].cromo.slice(corte).forEach(gene => genesUnicos.add(gene));
            // Converta o Set de volta para array e atribua ao filho
            filho.cromo = Array.from(genesUnicos);
            // Adapte fit, nomes, etc., com base nos genes únicos
            filhos.push(filho);
        }

        */
        // Ordenação dos filhos por aptidão, do maior para o menor
        filhos_teste.sort((a, b) => b.total_fit - a.total_fit);
        console.log('--------------------->>>>>>>>>>>')
        console.log('filhos_teste')
        console.log(filhos_teste)


    
        // Passo 6: Mutação
        

        function calculaSimilaridadeParaUm(vetorProjeto, pessoa) {
          
            console.log('vetorProjeto',vetorProjeto)
            console.log('pessoa',pessoa)


            const k = vetorProjeto.length; // tamanho do vetor do projeto
        
            // Normalização do vetor de entrada do projeto
            const vetorProjetoNormalizado = vetorProjeto.map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
            // Normalização do vetor da pessoa (considerando ambos hardskills e metodologias)
            //const vetorPessoaNormalizado = pessoa.vetor_hardskill.concat(pessoa.vetor_metodologia)
               //                           .map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
            // Normalização do vetor da pessoa (considerando apenas hardskills)
            const vetorPessoaNormalizado = pessoa.vetor_hardskill.map(valor => valor / 2); // Normaliza baseado no maxValor = 2


            // Cálculo da similaridade de Manhattan
            const diferencaAbsoluta = vetorPessoaNormalizado.map((valor, indice) =>
                Math.abs(valor - vetorProjetoNormalizado[indice]));
            const somaDiferencas = diferencaAbsoluta.reduce((soma, valor) => soma + valor, 0);
            const similaridade = 1 - (somaDiferencas / k);
        
            return similaridade.toFixed(2); // Retorna o valor de similaridade ajustado para duas casas decimais
        }

        // Passo 6: Mutação
        let taxademutacao = 0.005; // 0,5%
        filhos_teste.forEach(filho => {
            filho.cromo.forEach((gene, index) => {
                let num = Math.random(); // Gera um número aleatório entre 0 e 1
                if (num < taxademutacao || num === taxademutacao) { // Verifica se vai ocorrer a mutação
                    let nivelDoGeneAtual = filho.levels[index];
                    // Filtra 'pessoa' para encontrar candidatos adequados para a mutação
                    let candidatosParaMutacao = pessoa.filter(p => p.level === nivelDoGeneAtual && p.user_id !== filho.cromo[index]);

                    if (candidatosParaMutacao.length > 0) {
                        let selecaoAleatoria = Math.floor(Math.random() * candidatosParaMutacao.length);
                        let candidatoSelecionado = candidatosParaMutacao[selecaoAleatoria];
                        
                        // Realiza a mutação
                        filho.cromo[index] = candidatoSelecionado.user_id;
                        filho.nomes[index] = candidatoSelecionado.name;
                        filho.fit[index] = calculaSimilaridadeParaUm(vetorProjeto, candidatoSelecionado)
                        console.log('candidatoSelecionado')
                        console.log(candidatoSelecionado)

                        console.log('===========================')
                        // Escrevendo de forma assíncrona
                        stringJSON.push((candidatoSelecionado));
                            

                    }
                }
            });
        });
        console.log('==============tamanho de filhos', filhos_teste.length)

        //console.log('========== tamanho de array de cromo antes de elitismo ',arrayde_cromo.length)


        //console.log('arrayde_cromo anted de remover duplicados',arrayde_cromo)
        // Passo antes: Remover cromossomos idênticos
        // Função para comparar se dois arrays têm os mesmos elementos, independente da ordem
       // function arraysSaoIguais(arr1, arr2) {
          //  if (arr1.length !== arr2.length) {
          //      return false;
           // }
            //const arr1Sorted = arr1.slice().sort();
            //const arr2Sorted = arr2.slice().sort();
            //for (let i = 0; i < arr1Sorted.length; i++) {
              //  if (arr1Sorted[i] !== arr2Sorted[i]) {
                 //   return false;
               // }
           // }
            //alert('achou duplicado: '+JSON.stringify(arr1))
            //return true;
       // }

        // Filtrar cromossomos únicos com base nos nomes
       // let indicesParaRemover = [];
        //arrayde_cromo.forEach((cromossomo, index) => {
         //   for (let i = 0; i < arrayde_cromo.length; i++) {
          //      if (i !== index && arraysSaoIguais(cromossomo.nomes, arrayde_cromo[i].nomes)) {
           //         indicesParaRemover.push(i);
            //    }
           // }
        //});

        // Removendo índices duplicados e ordenando em ordem decrescente para evitar problemas ao remover
        //indicesParaRemover = [...new Set(indicesParaRemover)].sort((a, b) => b - a);

        // Remover os cromossomos duplicados
       // indicesParaRemover.forEach(index => {
        //    arrayde_cromo.splice(index, 1);
        //});



       // console.log('arrayde_cromo DEPOIS de remover duplicados',arrayde_cromo)

        // Passo 7: Elitismo mantém os dois melhores indivíduos da população
        // Ordenar pelo fitness total, do maior para o menor
      //  arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        // Seleciona os N melhores indivíduos da população
       // const N = 2; // Define quantos dos melhores indivíduos manter
        //const melhoresIndividuos = arrayde_cromo.slice(0, N);

        // Atualiza a população para manter apenas os N melhores indivíduos
        //arrayde_cromo = [...melhoresIndividuos];

        //Passo 8: obtem  nova população
        //LIMPA SSARRAY POPUL
        arrayde_cromo = [];
console.log('--------------------elite---------')
console.log(elite[0])

        arrayde_cromo.push(elite[0]);

        for(let i=0; i<filhos_teste.length; i++){
            arrayde_cromo.push(filhos_teste[i])
        }


        arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        console.log('tamamho  da NOVA população',arrayde_cromo.length)
        console.log('população:',arrayde_cromo)

        //Passo 9: volta ao passo 2
        
            console.log('volta ao passo 2')
        //fim AG
        iteracaoAtual++;
    }
}

//const csv = Papa.unparse(arrayde_cromo)
//fs .writeFileSync('arrayde_cromo.csv',arrayde_cromo)


//salvar projetos em csv
// Função para converter objeto em formato de linha CSV

function objectToCSVRow(generation, index) {
    let csvRow = `Cromossomo: ${index},`;
    if (generation.cromo && Array.isArray(generation.cromo)) {
        csvRow += `IDs: [${generation.cromo.join(', ')}],`;
    } else {
        console.log(`Aviso: Propriedade 'cromo' indefinida ou não é um array no índice ${index}.`);
        csvRow += `IDs: [],`;
    }
    // Repita para as outras propriedades, conforme necessário
    csvRow += `Total Fit: ${generation.total_fit ? generation.total_fit.toFixed(2) : 'Indefinido'}\n`;
    return csvRow;
}


function objectToCSVRow(generation, index) {
    let csvRow = `Cromossomo: ${index},`;
    if (generation.cromo && Array.isArray(generation.cromo)) {
        csvRow += `IDs: [${generation.cromo.join(', ')}],`;
    } else {
        console.log(`Aviso: Propriedade 'cromo' indefinida ou não é um array no índice ${index}.`);
        csvRow += `IDs: [],`;
    }
    csvRow += `Nomes: [${generation.nomes.join(', ')}],`;
    csvRow += `Fit: [${generation.fit.join(', ')}],`;
    csvRow += `Nível: [${generation.levels.join(', ')}],`; // Usando 'generation.levels' em vez de 'generation.nível'
    csvRow += `Total Fit: ${generation.total_fit.toFixed(2)}\n`; // Usando 'generation.total_fit.toFixed(2)' para formatar
    return csvRow;
  }
  
  
  // Função para converter array em formato CSV
  function arrayToCSV(array) {
    let csv = '';
    array.forEach((object, index) => {
      csv += objectToCSVRow(object, index);
    });
    return csv;
  }
  


// Converter o array em CSV
console.log('sugestoes')
console.log(sugestoes[0])

const csvData = arrayToCSV(sugestoes);

// Salvar o CSV em um arquivo
//fs.writeFile('sugestoes_AG_5_6_8_100_0005.csv', csvData, 'utf8', err => {
  //if (err) {
  //  console.error('Erro ao salvar o arquivo CSV:', err);
  //} else {
   // console.log('Arquivo sugestoes_AG_4_10_7_100_0005.csv CSV salvo com sucesso.');
 // }
//});

fs.writeFile('genesMutados.json', JSON.stringify(stringJSON), err => {
    if (err) {
        console.error('Erro ao salvar o arquivo:', err);
    } else {
        console.log('Arquivo de genes mutados salvo com sucesso.');
    }
});
console.log('ag size');




const end = process.hrtime(start);
console.log(`Tempo de Execução do AG: ${end[0]} segundos e ${end[1] / 1000000} milissegundos`);
