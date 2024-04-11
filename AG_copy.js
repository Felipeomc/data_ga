const fs = require('fs')

let arrayde_cromo = [] 
let tamanho_equipe = 0 //buscar e otimizar equipe única de tamanho 4
let skills_entrada = ["java", "iot", "ios", "web"]
let aux = []
let aux2 = []
let methodology = ["kanban"];
let sugestoes = [];
let stringJSON = [];

let dadosGrafo =  {"nodes": [{"id": "Dev241", "user_id": 241, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "kanban", "java", "WEB"]}, {"id": "Dev62", "user_id": 62, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "java", "WEB"]}, {"id": "Dev82", "user_id": 82, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev401", "user_id": 401, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev402", "user_id": 402, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web", "java"]}, {"id": "Dev200", "user_id": 200, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev56", "user_id": 56, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "Web"]}, {"id": "Dev441", "user_id": 441, "type": "developer", "contractRoleName": "External", "hardskill": ["Android", "web", "IoT", "Mobile"]}, {"id": "Dev445", "user_id": 445, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "java", "WEB"]}, {"id": "Dev283", "user_id": 283, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev7", "user_id": 7, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "iot", "Web", "Java", "java", "WEB"]}, {"id": "Dev270", "user_id": 270, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "iot", "Web", "Java", "WEB"]}, {"id": "Dev351", "user_id": 351, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IoT", "Android", "web", "Mobile", "IOT", "iot", "Web", "java"]}, {"id": "Dev29", "user_id": 29, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IoT", "Android", "web", "Mobile", "Desktop", "mobile", "IOT", "Web", "Java", "java", "WEB"]}, {"id": "Dev385", "user_id": 385, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev404", "user_id": 404, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "WEB", "kanban"]}, {"id": "Dev396", "user_id": 396, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev14", "user_id": 14, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "iOS", "Desktop", "mobile", "IOT", "iot", "Web", "IOS", "WEB"]}, {"id": "Dev431", "user_id": 431, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev433", "user_id": 433, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Desktop", "WEB"]}, {"id": "Dev225", "user_id": 225, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "web", "Mobile", "Desktop", "mobile", "Java", "ipad", "WEB"]}, {"id": "Dev358", "user_id": 358, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Desktop", "WEB", "mobile"]}, {"id": "Dev282", "user_id": 282, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "web", "Mobile", "iOS", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev248", "user_id": 248, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "web", "iOS", "Desktop", "mobile", "java", "ipad"]}, {"id": "Dev416", "user_id": 416, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "ipad", "Desktop", "java"]}, {"id": "Dev415", "user_id": 415, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Mobile", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev370", "user_id": 370, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "ipad", "Desktop"]}, {"id": "Dev316", "user_id": 316, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev417", "user_id": 417, "type": "developer", "contractRoleName": "Junior", "hardskill": ["ipad", "Desktop"]}, {"id": "Dev398", "user_id": 398, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Desktop", "Java", "java", "ipad"]}, {"id": "Dev130", "user_id": 130, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Mobile", "ipad", "Desktop", "desktop"]}, {"id": "Dev211", "user_id": 211, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "web", "iOS", "Desktop", "mobile", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev333", "user_id": 333, "type": "developer", "contractRoleName": "Junior", "hardskill": []}, {"id": "Dev202", "user_id": 202, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android"]}, {"id": "Dev144", "user_id": 144, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "IOS", "ipad"]}, {"id": "Dev423", "user_id": 423, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "java"]}, {"id": "Dev247", "user_id": 247, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev36", "user_id": 36, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "mobile", "iot", "Web", "Java"]}, {"id": "Dev3", "user_id": 3, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "Mobile", "iOS", "Desktop", "Web", "Java", "java"]}, {"id": "Dev105", "user_id": 105, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "mobile", "iot", "Web", "IOS"]}, {"id": "Dev311", "user_id": 311, "type": "developer", "contractRoleName": "Master", "hardskill": ["web", "iot", "Java"]}, {"id": "Dev453", "user_id": 453, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "iot"]}, {"id": "Dev205", "user_id": 205, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Desktop"]}, {"id": "Dev154", "user_id": 154, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "iot"]}, {"id": "Dev250", "user_id": 250, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "iot"]}, {"id": "Dev308", "user_id": 308, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "web", "Mobile", "iOS", "mobile", "IOT", "Web", "IOS", "ipad"]}, {"id": "Dev27", "user_id": 27, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev363", "user_id": 363, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "iOS", "Mobile", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev411", "user_id": 411, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev425", "user_id": 425, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "iOS", "web", "Mobile", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev5", "user_id": 5, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "desktop", "raspberry", "Chromebook", "Mobile", "iOS", "web", "Desktop", "mobile", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev447", "user_id": 447, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "iOS", "web", "Mobile", "Desktop", "mobile", "Web", "IOS", "Java", "java", "ipad"]}, {"id": "Dev359", "user_id": 359, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "web", "mobile", "IOT", "iot", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev46", "user_id": 46, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "mobile", "IOT", "Web", "ipad", "WEB"]}, {"id": "Dev448", "user_id": 448, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "Mobile", "iOS", "web", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev324", "user_id": 324, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev305", "user_id": 305, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "iOS", "Mobile", "web", "Desktop", "mobile", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev446", "user_id": 446, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "Chromebook", "web", "Mobile", "iOS", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev281", "user_id": 281, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "iOS", "Mobile", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev391", "user_id": 391, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "iOS", "mobile", "IOT", "iot", "Web", "WEB"]}, {"id": "Dev372", "user_id": 372, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "Web", "mobile"]}, {"id": "Dev326", "user_id": 326, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "mobile", "Web", "Java", "ipad"]}, {"id": "Dev242", "user_id": 242, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "Web", "Java", "ipad"]}, {"id": "Dev220", "user_id": 220, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "web", "mobile", "iot", "Web", "Java", "ipad"]}, {"id": "Dev261", "user_id": 261, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web"]}, {"id": "Dev47", "user_id": 47, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web"]}, {"id": "Dev395", "user_id": 395, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "desktop", "raspberry", "Mobile", "iOS", "web", "Desktop", "mobile", "Web", "IOS", "ipad"]}, {"id": "Dev18", "user_id": 18, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["IoT", "Android", "Web", "IOS", "ipad"]}, {"id": "Dev293", "user_id": 293, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Mobile", "iOS", "Web", "IOS", "ipad"]}, {"id": "Dev17", "user_id": 17, "type": "developer", "contractRoleName": "Senior", "hardskill": ["ipad", "IOS"]}, {"id": "Dev28", "user_id": 28, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "Web", "IOS", "Java", "ipad"]}, {"id": "Dev438", "user_id": 438, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "IOS", "Java", "java", "ipad"]}, {"id": "Dev180", "user_id": 180, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "IOT", "iot", "Web", "Java", "WEB"]}, {"id": "Dev161", "user_id": 161, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "iot", "Web", "Java", "WEB"]}, {"id": "Dev53", "user_id": 53, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "IOT", "iot", "Java", "WEB"]}, {"id": "Dev439", "user_id": 439, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev434", "user_id": 434, "type": "developer", "contractRoleName": "Stakeholder", "hardskill": ["web", "iot", "WEB"]}, {"id": "Dev136", "user_id": 136, "type": "developer", "contractRoleName": "Master", "hardskill": ["IOS", "web", "iot", "WEB"]}, {"id": "Dev389", "user_id": 389, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev392", "user_id": 392, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "Web", "iot", "WEB"]}, {"id": "Dev390", "user_id": 390, "type": "developer", "contractRoleName": "Specialist", "hardskill": ["IOT", "web", "iot", "WEB"]}, {"id": "Dev55", "user_id": 55, "type": "developer", "contractRoleName": "Junior", "hardskill": ["WEB"]}, {"id": "Dev387", "user_id": 387, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IOT", "Android", "WEB"]}, {"id": "Dev38", "user_id": 38, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "kanban", "IOT", "Java", "WEB"]}, {"id": "Dev366", "user_id": 366, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "kanban"]}, {"id": "Dev152", "user_id": 152, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Mobile", "web", "Desktop", "Web", "kanban"]}, {"id": "Dev119", "user_id": 119, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Mobile", "web", "Desktop", "iot", "Web", "Java", "kanban"]}, {"id": "Dev291", "user_id": 291, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iot", "Java", "java", "kanban"]}, {"id": "Dev97", "user_id": 97, "type": "developer", "contractRoleName": "Middle", "hardskill": ["web", "kanban"]}, {"id": "Dev169", "user_id": 169, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "kanban"]}, {"id": "Dev2", "user_id": 2, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "Java"]}, {"id": "Dev93", "user_id": 93, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "Java", "java"]}, {"id": "Dev414", "user_id": 414, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev437", "user_id": 437, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Java", "java"]}, {"id": "Dev94", "user_id": 94, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "desktop", "Chromebook", "web", "iOS", "mobile", "iot", "Web", "Java"]}, {"id": "Dev229", "user_id": 229, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java"]}, {"id": "Dev336", "user_id": 336, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iOS", "iot", "Java", "java", "ipad"]}, {"id": "Dev335", "user_id": 335, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "IOT", "Java", "java", "WEB"]}, {"id": "Dev317", "user_id": 317, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "web", "iOS", "Java", "java", "ipad"]}, {"id": "Dev339", "user_id": 339, "type": "developer", "contractRoleName": "Junior", "hardskill": ["iOS", "Android", "Java", "java"]}, {"id": "Dev399", "user_id": 399, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "iOS", "Java", "java"]}, {"id": "Dev89", "user_id": 89, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev85", "user_id": 85, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev198", "user_id": 198, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT", "Java"]}, {"id": "Dev271", "user_id": 271, "type": "developer", "contractRoleName": "Senior", "hardskill": ["IOT", "iOS", "Android", "Mobile"]}, {"id": "Dev397", "user_id": 397, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev223", "user_id": 223, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev331", "user_id": 331, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev330", "user_id": 330, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev373", "user_id": 373, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev384", "user_id": 384, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev332", "user_id": 332, "type": "developer", "contractRoleName": "External", "hardskill": ["IoT", "Android", "Mobile", "iOS", "IOT"]}, {"id": "Dev178", "user_id": 178, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "mobile", "IOT", "Web"]}, {"id": "Dev356", "user_id": 356, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "iOS", "Mobile", "mobile", "IOT", "Web"]}, {"id": "Dev269", "user_id": 269, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "iOS", "Mobile", "IOT", "Java"]}, {"id": "Dev367", "user_id": 367, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IOT", "iOS", "Android", "Mobile"]}, {"id": "Dev327", "user_id": 327, "type": "developer", "contractRoleName": "Master", "hardskill": ["IoT", "Android", "iOS", "Mobile", "IOT", "java"]}, {"id": "Dev16", "user_id": 16, "type": "developer", "contractRoleName": "Middle", "hardskill": ["iot", "IoT", "Android", "Web"]}, {"id": "Dev45", "user_id": 45, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Java"]}, {"id": "Dev174", "user_id": 174, "type": "developer", "contractRoleName": "Middle", "hardskill": ["IoT", "Android", "iOS", "web", "mobile"]}, {"id": "Dev183", "user_id": 183, "type": "developer", "contractRoleName": "Middle", "hardskill": ["iOS", "IoT", "Android", "Web"]}, {"id": "Dev236", "user_id": 236, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android"]}, {"id": "Dev435", "user_id": 435, "type": "developer", "contractRoleName": "Junior", "hardskill": ["IoT", "Android", "Web", "mobile"]}, {"id": "Dev48", "user_id": 48, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "raspberry", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev170", "user_id": 170, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "raspberry", "iOS", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev214", "user_id": 214, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "raspberry", "Chromebook", "web", "Desktop", "mobile", "Web", "IOS"]}, {"id": "Dev290", "user_id": 290, "type": "developer", "contractRoleName": "Master", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java", "java", "ipad"]}, {"id": "Dev8", "user_id": 8, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Mobile", "Web", "ipad"]}, {"id": "Dev227", "user_id": 227, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web"]}, {"id": "Dev382", "user_id": 382, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web", "mobile"]}, {"id": "Dev138", "user_id": 138, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Android", "Mobile", "mobile", "Web", "java", "ipad"]}, {"id": "Dev142", "user_id": 142, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "web", "Mobile", "mobile", "Web", "Java", "java", "ipad"]}, {"id": "Dev140", "user_id": 140, "type": "developer", "contractRoleName": "Senior", "hardskill": ["Mobile", "ipad", "Web", "mobile"]}, {"id": "Dev137", "user_id": 137, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "Mobile", "mobile", "IOT", "Web", "Java", "java", "ipad", "WEB"]}, {"id": "Dev77", "user_id": 77, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["web", "Android", "Desktop", "IOS"]}, {"id": "Dev104", "user_id": 104, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "IOS"]}, {"id": "Dev362", "user_id": 362, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Android", "Desktop", "IOS"]}, {"id": "Dev181", "user_id": 181, "type": "developer", "contractRoleName": "Middle", "hardskill": ["Android", "web", "mobile", "IOT", "Web", "IOS", "Java", "WEB"]}, {"id": "Dev365", "user_id": 365, "type": "developer", "contractRoleName": "Junior", "hardskill": ["web", "Desktop", "IOS"]}, {"id": "Dev65", "user_id": 65, "type": "developer", "contractRoleName": "Senior", "hardskill": ["web", "IOS"]}, {"id": "Dev381", "user_id": 381, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev145", "user_id": 145, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Chromebook", "web", "mobile", "Web"]}, {"id": "Dev63", "user_id": 63, "type": "manager", "contractRoleName": "Project Manager", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev263", "user_id": 263, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Android", "Web", "Chromebook"]}, {"id": "Dev114", "user_id": 114, "type": "developer", "contractRoleName": "Middle", "hardskill": []}, {"id": "Dev275", "user_id": 275, "type": "developer", "contractRoleName": "Junior", "hardskill": []}, {"id": "Dev406", "user_id": 406, "type": "developer", "contractRoleName": "Senior", "hardskill": []}, {"id": "Dev81", "user_id": 81, "type": "developer", "contractRoleName": "Junior", "hardskill": ["Mobile", "ipad", "desktop", "web"]}, {"id": "Dev348", "user_id": 348, "type": "developer", "contractRoleName": "Junior", "hardskill": ["desktop", "web", "mobile", "iot", "Web"]}], "edges": [{"source": "Dev241", "source_user_id": 241, "target": "Dev62", "target_user_id": 62, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev82", "target_user_id": 82, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev401", "target_user_id": 401, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev270", "target_user_id": 270, "weight": 0.14}, {"source": "Dev241", "source_user_id": 241, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev29", "target_user_id": 29, "weight": 0.14}, {"source": "Dev62", "source_user_id": 62, "target": "Dev82", "target_user_id": 82, "weight": 0.06}, {"source": "Dev62", "source_user_id": 62, "target": "Dev401", "target_user_id": 401, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev200", "target_user_id": 200, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev62", "source_user_id": 62, "target": "Dev445", "target_user_id": 445, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev283", "target_user_id": 283, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev62", "source_user_id": 62, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev62", "source_user_id": 62, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev82", "source_user_id": 82, "target": "Dev401", "target_user_id": 401, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev402", "target_user_id": 402, "weight": 0.12}, {"source": "Dev82", "source_user_id": 82, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev7", "target_user_id": 7, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev82", "source_user_id": 82, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev402", "target_user_id": 402, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev401", "source_user_id": 401, "target": "Dev7", "target_user_id": 7, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev401", "source_user_id": 401, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev200", "target_user_id": 200, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev56", "target_user_id": 56, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev402", "source_user_id": 402, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev402", "source_user_id": 402, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev56", "target_user_id": 56, "weight": 0.18}, {"source": "Dev200", "source_user_id": 200, "target": "Dev445", "target_user_id": 445, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev200", "source_user_id": 200, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev200", "source_user_id": 200, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev445", "target_user_id": 445, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev283", "target_user_id": 283, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev56", "source_user_id": 56, "target": "Dev270", "target_user_id": 270, "weight": 0.06}, {"source": "Dev56", "source_user_id": 56, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev56", "source_user_id": 56, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev445", "source_user_id": 445, "target": "Dev283", "target_user_id": 283, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev7", "target_user_id": 7, "weight": 0.18}, {"source": "Dev445", "source_user_id": 445, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev445", "source_user_id": 445, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev7", "target_user_id": 7, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev270", "target_user_id": 270, "weight": 0.12}, {"source": "Dev283", "source_user_id": 283, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev283", "source_user_id": 283, "target": "Dev29", "target_user_id": 29, "weight": 0.06}, {"source": "Dev7", "source_user_id": 7, "target": "Dev270", "target_user_id": 270, "weight": 0.18}, {"source": "Dev7", "source_user_id": 7, "target": "Dev351", "target_user_id": 351, "weight": 0.12}, {"source": "Dev7", "source_user_id": 7, "target": "Dev29", "target_user_id": 29, "weight": 0.18}, {"source": "Dev270", "source_user_id": 270, "target": "Dev351", "target_user_id": 351, "weight": 0.06}, {"source": "Dev270", "source_user_id": 270, "target": "Dev29", "target_user_id": 29, "weight": 0.19}, {"source": "Dev351", "source_user_id": 351, "target": "Dev29", "target_user_id": 29, "weight": 0.12}, {"source": "Dev241", "source_user_id": 241, "target": "Dev385", "target_user_id": 385, "weight": 0.05}, {"source": "Dev241", "source_user_id": 241, "target": "Dev404", "target_user_id": 404, "weight": 0.16}, {"source": "Dev241", "source_user_id": 241, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev241", "source_user_id": 241, "target": "Dev14", "target_user_id": 14, "weight": 0.14}, {"source": "Dev241", "source_user_id": 241, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev241", "source_user_id": 241, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev385", "target_user_id": 385, "weight": 0.05}, {"source": "Dev270", "source_user_id": 270, "target": "Dev404", "target_user_id": 404, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev270", "source_user_id": 270, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev270", "source_user_id": 270, "target": "Dev225", "target_user_id": 225, "weight": 0.09}, {"source": "Dev270", "source_user_id": 270, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev385", "source_user_id": 385, "target": "Dev404", "target_user_id": 404, "weight": 0.05}, {"source": "Dev385", "source_user_id": 385, "target": "Dev396", "target_user_id": 396, "weight": 0.05}, {"source": "Dev385", "source_user_id": 385, "target": "Dev14", "target_user_id": 14, "weight": 0.05}, {"source": "Dev404", "source_user_id": 404, "target": "Dev396", "target_user_id": 396, "weight": 0.09}, {"source": "Dev404", "source_user_id": 404, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev404", "source_user_id": 404, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev404", "source_user_id": 404, "target": "Dev358", "target_user_id": 358, "weight": 0.09}, {"source": "Dev396", "source_user_id": 396, "target": "Dev14", "target_user_id": 14, "weight": 0.09}, {"source": "Dev396", "source_user_id": 396, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev396", "source_user_id": 396, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev431", "target_user_id": 431, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev433", "target_user_id": 433, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev431", "source_user_id": 431, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev29", "target_user_id": 29, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev225", "target_user_id": 225, "weight": 0.04}, {"source": "Dev433", "source_user_id": 433, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev29", "source_user_id": 29, "target": "Dev225", "target_user_id": 225, "weight": 0.16}, {"source": "Dev29", "source_user_id": 29, "target": "Dev358", "target_user_id": 358, "weight": 0.08}, {"source": "Dev225", "source_user_id": 225, "target": "Dev358", "target_user_id": 358, "weight": 0.08}, {"source": "Dev282", "source_user_id": 282, "target": "Dev415", "target_user_id": 415, "weight": 0.07}, {"source": "Dev282", "source_user_id": 282, "target": "Dev370", "target_user_id": 370, "weight": 0.07}, {"source": "Dev282", "source_user_id": 282, "target": "Dev316", "target_user_id": 316, "weight": 0.12}, {"source": "Dev282", "source_user_id": 282, "target": "Dev398", "target_user_id": 398, "weight": 0.04}, {"source": "Dev282", "source_user_id": 282, "target": "Dev211", "target_user_id": 211, "weight": 0.06}, {"source": "Dev415", "source_user_id": 415, "target": "Dev370", "target_user_id": 370, "weight": 0.03}, {"source": "Dev415", "source_user_id": 415, "target": "Dev316", "target_user_id": 316, "weight": 0.09}, {"source": "Dev415", "source_user_id": 415, "target": "Dev398", "target_user_id": 398, "weight": 0.03}, {"source": "Dev370", "source_user_id": 370, "target": "Dev316", "target_user_id": 316, "weight": 0.07}, {"source": "Dev370", "source_user_id": 370, "target": "Dev398", "target_user_id": 398, "weight": 0.01}, {"source": "Dev316", "source_user_id": 316, "target": "Dev398", "target_user_id": 398, "weight": 0.03}, {"source": "Dev333", "source_user_id": 333, "target": "Dev282", "target_user_id": 282, "weight": 0.06}, {"source": "Dev333", "source_user_id": 333, "target": "Dev202", "target_user_id": 202, "weight": 0.06}, {"source": "Dev333", "source_user_id": 333, "target": "Dev423", "target_user_id": 423, "weight": 0.01}, {"source": "Dev282", "source_user_id": 282, "target": "Dev202", "target_user_id": 202, "weight": 0.12}, {"source": "Dev282", "source_user_id": 282, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev282", "source_user_id": 282, "target": "Dev423", "target_user_id": 423, "weight": 0.11}, {"source": "Dev282", "source_user_id": 282, "target": "Dev247", "target_user_id": 247, "weight": 0.03}, {"source": "Dev282", "source_user_id": 282, "target": "Dev3", "target_user_id": 3, "weight": 0.03}, {"source": "Dev202", "source_user_id": 202, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev202", "source_user_id": 202, "target": "Dev423", "target_user_id": 423, "weight": 0.01}, {"source": "Dev423", "source_user_id": 423, "target": "Dev247", "target_user_id": 247, "weight": 0.01}, {"source": "Dev423", "source_user_id": 423, "target": "Dev3", "target_user_id": 3, "weight": 0.01}, {"source": "Dev247", "source_user_id": 247, "target": "Dev36", "target_user_id": 36, "weight": 0.01}, {"source": "Dev247", "source_user_id": 247, "target": "Dev3", "target_user_id": 3, "weight": 0.04}, {"source": "Dev36", "source_user_id": 36, "target": "Dev3", "target_user_id": 3, "weight": 0.01}, {"source": "Dev351", "source_user_id": 351, "target": "Dev105", "target_user_id": 105, "weight": 0.18}, {"source": "Dev351", "source_user_id": 351, "target": "Dev311", "target_user_id": 311, "weight": 0.11}, {"source": "Dev351", "source_user_id": 351, "target": "Dev453", "target_user_id": 453, "weight": 0.06}, {"source": "Dev351", "source_user_id": 351, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev105", "source_user_id": 105, "target": "Dev311", "target_user_id": 311, "weight": 0.11}, {"source": "Dev105", "source_user_id": 105, "target": "Dev453", "target_user_id": 453, "weight": 0.09}, {"source": "Dev105", "source_user_id": 105, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev311", "source_user_id": 311, "target": "Dev453", "target_user_id": 453, "weight": 0.06}, {"source": "Dev311", "source_user_id": 311, "target": "Dev205", "target_user_id": 205, "weight": 0.08}, {"source": "Dev453", "source_user_id": 453, "target": "Dev205", "target_user_id": 205, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev154", "target_user_id": 154, "weight": 0.04}, {"source": "Dev351", "source_user_id": 351, "target": "Dev250", "target_user_id": 250, "weight": 0.09}, {"source": "Dev105", "source_user_id": 105, "target": "Dev154", "target_user_id": 154, "weight": 0.08}, {"source": "Dev105", "source_user_id": 105, "target": "Dev250", "target_user_id": 250, "weight": 0.09}, {"source": "Dev154", "source_user_id": 154, "target": "Dev250", "target_user_id": 250, "weight": 0.12}, {"source": "Dev154", "source_user_id": 154, "target": "Dev311", "target_user_id": 311, "weight": 0.04}, {"source": "Dev154", "source_user_id": 154, "target": "Dev453", "target_user_id": 453, "weight": 0.04}, {"source": "Dev250", "source_user_id": 250, "target": "Dev311", "target_user_id": 311, "weight": 0.09}, {"source": "Dev250", "source_user_id": 250, "target": "Dev453", "target_user_id": 453, "weight": 0.04}, {"source": "Dev308", "source_user_id": 308, "target": "Dev27", "target_user_id": 27, "weight": 0.22}, {"source": "Dev308", "source_user_id": 308, "target": "Dev363", "target_user_id": 363, "weight": 0.16}, {"source": "Dev308", "source_user_id": 308, "target": "Dev411", "target_user_id": 411, "weight": 0.16}, {"source": "Dev308", "source_user_id": 308, "target": "Dev425", "target_user_id": 425, "weight": 0.1}, {"source": "Dev308", "source_user_id": 308, "target": "Dev5", "target_user_id": 5, "weight": 0.26}, {"source": "Dev308", "source_user_id": 308, "target": "Dev447", "target_user_id": 447, "weight": 0.1}, {"source": "Dev308", "source_user_id": 308, "target": "Dev359", "target_user_id": 359, "weight": 0.14}, {"source": "Dev27", "source_user_id": 27, "target": "Dev363", "target_user_id": 363, "weight": 0.86}, {"source": "Dev27", "source_user_id": 27, "target": "Dev411", "target_user_id": 411, "weight": 0.81}, {"source": "Dev27", "source_user_id": 27, "target": "Dev425", "target_user_id": 425, "weight": 0.66}, {"source": "Dev27", "source_user_id": 27, "target": "Dev5", "target_user_id": 5, "weight": 0.75}, {"source": "Dev27", "source_user_id": 27, "target": "Dev447", "target_user_id": 447, "weight": 0.66}, {"source": "Dev27", "source_user_id": 27, "target": "Dev359", "target_user_id": 359, "weight": 0.32}, {"source": "Dev363", "source_user_id": 363, "target": "Dev411", "target_user_id": 411, "weight": 0.82}, {"source": "Dev363", "source_user_id": 363, "target": "Dev425", "target_user_id": 425, "weight": 0.72}, {"source": "Dev363", "source_user_id": 363, "target": "Dev5", "target_user_id": 5, "weight": 0.7}, {"source": "Dev363", "source_user_id": 363, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev363", "source_user_id": 363, "target": "Dev359", "target_user_id": 359, "weight": 0.32}, {"source": "Dev411", "source_user_id": 411, "target": "Dev425", "target_user_id": 425, "weight": 0.72}, {"source": "Dev411", "source_user_id": 411, "target": "Dev5", "target_user_id": 5, "weight": 0.6}, {"source": "Dev411", "source_user_id": 411, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev411", "source_user_id": 411, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev425", "source_user_id": 425, "target": "Dev5", "target_user_id": 5, "weight": 0.5}, {"source": "Dev425", "source_user_id": 425, "target": "Dev447", "target_user_id": 447, "weight": 0.72}, {"source": "Dev425", "source_user_id": 425, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev5", "source_user_id": 5, "target": "Dev447", "target_user_id": 447, "weight": 0.5}, {"source": "Dev5", "source_user_id": 5, "target": "Dev359", "target_user_id": 359, "weight": 0.4}, {"source": "Dev447", "source_user_id": 447, "target": "Dev359", "target_user_id": 359, "weight": 0.21}, {"source": "Dev46", "source_user_id": 46, "target": "Dev5", "target_user_id": 5, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev27", "target_user_id": 27, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev363", "target_user_id": 363, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev411", "target_user_id": 411, "weight": 0.1}, {"source": "Dev46", "source_user_id": 46, "target": "Dev324", "target_user_id": 324, "weight": 0.1}, {"source": "Dev5", "source_user_id": 5, "target": "Dev448", "target_user_id": 448, "weight": 0.26}, {"source": "Dev5", "source_user_id": 5, "target": "Dev324", "target_user_id": 324, "weight": 0.24}, {"source": "Dev5", "source_user_id": 5, "target": "Dev305", "target_user_id": 305, "weight": 0.62}, {"source": "Dev5", "source_user_id": 5, "target": "Dev446", "target_user_id": 446, "weight": 0.29}, {"source": "Dev27", "source_user_id": 27, "target": "Dev448", "target_user_id": 448, "weight": 0.22}, {"source": "Dev27", "source_user_id": 27, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev27", "source_user_id": 27, "target": "Dev305", "target_user_id": 305, "weight": 0.39}, {"source": "Dev27", "source_user_id": 27, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev425", "source_user_id": 425, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev425", "source_user_id": 425, "target": "Dev324", "target_user_id": 324, "weight": 0.16}, {"source": "Dev425", "source_user_id": 425, "target": "Dev305", "target_user_id": 305, "weight": 0.24}, {"source": "Dev425", "source_user_id": 425, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev363", "source_user_id": 363, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev363", "source_user_id": 363, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev363", "source_user_id": 363, "target": "Dev305", "target_user_id": 305, "weight": 0.34}, {"source": "Dev363", "source_user_id": 363, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev411", "source_user_id": 411, "target": "Dev448", "target_user_id": 448, "weight": 0.16}, {"source": "Dev411", "source_user_id": 411, "target": "Dev324", "target_user_id": 324, "weight": 0.25}, {"source": "Dev411", "source_user_id": 411, "target": "Dev305", "target_user_id": 305, "weight": 0.29}, {"source": "Dev411", "source_user_id": 411, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev448", "source_user_id": 448, "target": "Dev447", "target_user_id": 447, "weight": 0.16}, {"source": "Dev448", "source_user_id": 448, "target": "Dev324", "target_user_id": 324, "weight": 0.11}, {"source": "Dev448", "source_user_id": 448, "target": "Dev305", "target_user_id": 305, "weight": 0.16}, {"source": "Dev448", "source_user_id": 448, "target": "Dev446", "target_user_id": 446, "weight": 0.11}, {"source": "Dev447", "source_user_id": 447, "target": "Dev324", "target_user_id": 324, "weight": 0.16}, {"source": "Dev447", "source_user_id": 447, "target": "Dev305", "target_user_id": 305, "weight": 0.24}, {"source": "Dev447", "source_user_id": 447, "target": "Dev446", "target_user_id": 446, "weight": 0.4}, {"source": "Dev324", "source_user_id": 324, "target": "Dev305", "target_user_id": 305, "weight": 0.14}, {"source": "Dev324", "source_user_id": 324, "target": "Dev446", "target_user_id": 446, "weight": 0.08}, {"source": "Dev305", "source_user_id": 305, "target": "Dev446", "target_user_id": 446, "weight": 0.18}, {"source": "Dev281", "source_user_id": 281, "target": "Dev372", "target_user_id": 372, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev5", "target_user_id": 5, "weight": 0.17}, {"source": "Dev281", "source_user_id": 281, "target": "Dev27", "target_user_id": 27, "weight": 0.17}, {"source": "Dev281", "source_user_id": 281, "target": "Dev425", "target_user_id": 425, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev363", "target_user_id": 363, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev411", "target_user_id": 411, "weight": 0.11}, {"source": "Dev281", "source_user_id": 281, "target": "Dev359", "target_user_id": 359, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev448", "target_user_id": 448, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev326", "target_user_id": 326, "weight": 0.05}, {"source": "Dev281", "source_user_id": 281, "target": "Dev447", "target_user_id": 447, "weight": 0.11}, {"source": "Dev372", "source_user_id": 372, "target": "Dev5", "target_user_id": 5, "weight": 0.1}, {"source": "Dev372", "source_user_id": 372, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev359", "target_user_id": 359, "weight": 0.1}, {"source": "Dev372", "source_user_id": 372, "target": "Dev448", "target_user_id": 448, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev326", "target_user_id": 326, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev372", "source_user_id": 372, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev5", "source_user_id": 5, "target": "Dev326", "target_user_id": 326, "weight": 0.23}, {"source": "Dev27", "source_user_id": 27, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev425", "source_user_id": 425, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev363", "source_user_id": 363, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev411", "source_user_id": 411, "target": "Dev326", "target_user_id": 326, "weight": 0.17}, {"source": "Dev359", "source_user_id": 359, "target": "Dev448", "target_user_id": 448, "weight": 0.11}, {"source": "Dev359", "source_user_id": 359, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev359", "source_user_id": 359, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev448", "source_user_id": 448, "target": "Dev326", "target_user_id": 326, "weight": 0.11}, {"source": "Dev326", "source_user_id": 326, "target": "Dev447", "target_user_id": 447, "weight": 0.11}, {"source": "Dev326", "source_user_id": 326, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev5", "source_user_id": 5, "target": "Dev242", "target_user_id": 242, "weight": 0.41}, {"source": "Dev5", "source_user_id": 5, "target": "Dev220", "target_user_id": 220, "weight": 0.3}, {"source": "Dev5", "source_user_id": 5, "target": "Dev261", "target_user_id": 261, "weight": 0.05}, {"source": "Dev5", "source_user_id": 5, "target": "Dev395", "target_user_id": 395, "weight": 0.09}, {"source": "Dev242", "source_user_id": 242, "target": "Dev220", "target_user_id": 220, "weight": 0.11}, {"source": "Dev242", "source_user_id": 242, "target": "Dev27", "target_user_id": 27, "weight": 0.29}, {"source": "Dev242", "source_user_id": 242, "target": "Dev425", "target_user_id": 425, "weight": 0.12}, {"source": "Dev242", "source_user_id": 242, "target": "Dev363", "target_user_id": 363, "weight": 0.18}, {"source": "Dev242", "source_user_id": 242, "target": "Dev411", "target_user_id": 411, "weight": 0.24}, {"source": "Dev242", "source_user_id": 242, "target": "Dev305", "target_user_id": 305, "weight": 0.37}, {"source": "Dev242", "source_user_id": 242, "target": "Dev447", "target_user_id": 447, "weight": 0.12}, {"source": "Dev242", "source_user_id": 242, "target": "Dev261", "target_user_id": 261, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev242", "source_user_id": 242, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev220", "source_user_id": 220, "target": "Dev27", "target_user_id": 27, "weight": 0.24}, {"source": "Dev220", "source_user_id": 220, "target": "Dev425", "target_user_id": 425, "weight": 0.12}, {"source": "Dev220", "source_user_id": 220, "target": "Dev363", "target_user_id": 363, "weight": 0.24}, {"source": "Dev220", "source_user_id": 220, "target": "Dev411", "target_user_id": 411, "weight": 0.18}, {"source": "Dev220", "source_user_id": 220, "target": "Dev305", "target_user_id": 305, "weight": 0.17}, {"source": "Dev220", "source_user_id": 220, "target": "Dev447", "target_user_id": 447, "weight": 0.12}, {"source": "Dev220", "source_user_id": 220, "target": "Dev446", "target_user_id": 446, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev261", "target_user_id": 261, "weight": 0.06}, {"source": "Dev27", "source_user_id": 27, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev425", "source_user_id": 425, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev363", "source_user_id": 363, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev411", "source_user_id": 411, "target": "Dev261", "target_user_id": 261, "weight": 0.06}, {"source": "Dev411", "source_user_id": 411, "target": "Dev395", "target_user_id": 395, "weight": 0.07}, {"source": "Dev305", "source_user_id": 305, "target": "Dev261", "target_user_id": 261, "weight": 0.1}, {"source": "Dev305", "source_user_id": 305, "target": "Dev395", "target_user_id": 395, "weight": 0.06}, {"source": "Dev447", "source_user_id": 447, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev261", "source_user_id": 261, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev446", "source_user_id": 446, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev293", "target_user_id": 293, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev17", "target_user_id": 17, "weight": 0.02}, {"source": "Dev18", "source_user_id": 18, "target": "Dev28", "target_user_id": 28, "weight": 0.02}, {"source": "Dev18", "source_user_id": 18, "target": "Dev438", "target_user_id": 438, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev17", "target_user_id": 17, "weight": 0.02}, {"source": "Dev293", "source_user_id": 293, "target": "Dev28", "target_user_id": 28, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev438", "target_user_id": 438, "weight": 0.01}, {"source": "Dev293", "source_user_id": 293, "target": "Dev144", "target_user_id": 144, "weight": 0.01}, {"source": "Dev17", "source_user_id": 17, "target": "Dev28", "target_user_id": 28, "weight": 0.01}, {"source": "Dev17", "source_user_id": 17, "target": "Dev438", "target_user_id": 438, "weight": 0.01}, {"source": "Dev28", "source_user_id": 28, "target": "Dev438", "target_user_id": 438, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev161", "target_user_id": 161, "weight": 0.17}, {"source": "Dev180", "source_user_id": 180, "target": "Dev53", "target_user_id": 53, "weight": 0.13}, {"source": "Dev180", "source_user_id": 180, "target": "Dev439", "target_user_id": 439, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev180", "source_user_id": 180, "target": "Dev136", "target_user_id": 136, "weight": 0.08}, {"source": "Dev180", "source_user_id": 180, "target": "Dev389", "target_user_id": 389, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev392", "target_user_id": 392, "weight": 0.12}, {"source": "Dev180", "source_user_id": 180, "target": "Dev390", "target_user_id": 390, "weight": 0.08}, {"source": "Dev180", "source_user_id": 180, "target": "Dev391", "target_user_id": 391, "weight": 0.11}, {"source": "Dev180", "source_user_id": 180, "target": "Dev387", "target_user_id": 387, "weight": 0.06}, {"source": "Dev180", "source_user_id": 180, "target": "Dev46", "target_user_id": 46, "weight": 0.19}, {"source": "Dev161", "source_user_id": 161, "target": "Dev53", "target_user_id": 53, "weight": 0.16}, {"source": "Dev161", "source_user_id": 161, "target": "Dev439", "target_user_id": 439, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev389", "target_user_id": 389, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev161", "source_user_id": 161, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev387", "target_user_id": 387, "weight": 0.04}, {"source": "Dev161", "source_user_id": 161, "target": "Dev46", "target_user_id": 46, "weight": 0.09}, {"source": "Dev53", "source_user_id": 53, "target": "Dev439", "target_user_id": 439, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev53", "source_user_id": 53, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev53", "source_user_id": 53, "target": "Dev55", "target_user_id": 55, "weight": 0.04}, {"source": "Dev53", "source_user_id": 53, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev53", "source_user_id": 53, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev434", "target_user_id": 434, "weight": 0.04}, {"source": "Dev439", "source_user_id": 439, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev439", "source_user_id": 439, "target": "Dev389", "target_user_id": 389, "weight": 0.11}, {"source": "Dev439", "source_user_id": 439, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev439", "source_user_id": 439, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev439", "source_user_id": 439, "target": "Dev46", "target_user_id": 46, "weight": 0.07}, {"source": "Dev434", "source_user_id": 434, "target": "Dev136", "target_user_id": 136, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev434", "source_user_id": 434, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev389", "target_user_id": 389, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev392", "target_user_id": 392, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev136", "source_user_id": 136, "target": "Dev391", "target_user_id": 391, "weight": 0.08}, {"source": "Dev389", "source_user_id": 389, "target": "Dev392", "target_user_id": 392, "weight": 0.09}, {"source": "Dev389", "source_user_id": 389, "target": "Dev390", "target_user_id": 390, "weight": 0.06}, {"source": "Dev389", "source_user_id": 389, "target": "Dev391", "target_user_id": 391, "weight": 0.06}, {"source": "Dev389", "source_user_id": 389, "target": "Dev46", "target_user_id": 46, "weight": 0.07}, {"source": "Dev392", "source_user_id": 392, "target": "Dev390", "target_user_id": 390, "weight": 0.04}, {"source": "Dev392", "source_user_id": 392, "target": "Dev391", "target_user_id": 391, "weight": 0.04}, {"source": "Dev392", "source_user_id": 392, "target": "Dev46", "target_user_id": 46, "weight": 0.08}, {"source": "Dev390", "source_user_id": 390, "target": "Dev391", "target_user_id": 391, "weight": 0.08}, {"source": "Dev390", "source_user_id": 390, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev390", "source_user_id": 390, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev391", "source_user_id": 391, "target": "Dev387", "target_user_id": 387, "weight": 0.03}, {"source": "Dev391", "source_user_id": 391, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev387", "source_user_id": 387, "target": "Dev46", "target_user_id": 46, "weight": 0.06}, {"source": "Dev38", "source_user_id": 38, "target": "Dev366", "target_user_id": 366, "weight": 0.08}, {"source": "Dev38", "source_user_id": 38, "target": "Dev152", "target_user_id": 152, "weight": 0.12}, {"source": "Dev38", "source_user_id": 38, "target": "Dev119", "target_user_id": 119, "weight": 0.16}, {"source": "Dev38", "source_user_id": 38, "target": "Dev291", "target_user_id": 291, "weight": 0.12}, {"source": "Dev38", "source_user_id": 38, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev38", "source_user_id": 38, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev38", "source_user_id": 38, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev366", "source_user_id": 366, "target": "Dev152", "target_user_id": 152, "weight": 0.08}, {"source": "Dev366", "source_user_id": 366, "target": "Dev119", "target_user_id": 119, "weight": 0.08}, {"source": "Dev366", "source_user_id": 366, "target": "Dev291", "target_user_id": 291, "weight": 0.12}, {"source": "Dev366", "source_user_id": 366, "target": "Dev97", "target_user_id": 97, "weight": 0.12}, {"source": "Dev366", "source_user_id": 366, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev366", "source_user_id": 366, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev119", "target_user_id": 119, "weight": 0.16}, {"source": "Dev152", "source_user_id": 152, "target": "Dev291", "target_user_id": 291, "weight": 0.08}, {"source": "Dev152", "source_user_id": 152, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev152", "source_user_id": 152, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev291", "target_user_id": 291, "weight": 0.16}, {"source": "Dev119", "source_user_id": 119, "target": "Dev97", "target_user_id": 97, "weight": 0.08}, {"source": "Dev119", "source_user_id": 119, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev291", "source_user_id": 291, "target": "Dev97", "target_user_id": 97, "weight": 0.12}, {"source": "Dev291", "source_user_id": 291, "target": "Dev241", "target_user_id": 241, "weight": 0.08}, {"source": "Dev291", "source_user_id": 291, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev97", "source_user_id": 97, "target": "Dev241", "target_user_id": 241, "weight": 0.04}, {"source": "Dev97", "source_user_id": 97, "target": "Dev404", "target_user_id": 404, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev282", "target_user_id": 282, "weight": 0.05}, {"source": "Dev14", "source_user_id": 14, "target": "Dev211", "target_user_id": 211, "weight": 0.2}, {"source": "Dev14", "source_user_id": 14, "target": "Dev94", "target_user_id": 94, "weight": 0.2}, {"source": "Dev14", "source_user_id": 14, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev282", "target_user_id": 282, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev93", "target_user_id": 93, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev333", "target_user_id": 333, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev211", "target_user_id": 211, "weight": 0.1}, {"source": "Dev2", "source_user_id": 2, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev2", "source_user_id": 2, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev93", "target_user_id": 93, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev282", "source_user_id": 282, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev282", "source_user_id": 282, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev414", "target_user_id": 414, "weight": 0.1}, {"source": "Dev93", "source_user_id": 93, "target": "Dev333", "target_user_id": 333, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev437", "target_user_id": 437, "weight": 0.1}, {"source": "Dev93", "source_user_id": 93, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev93", "source_user_id": 93, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev437", "target_user_id": 437, "weight": 0.15}, {"source": "Dev414", "source_user_id": 414, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev414", "source_user_id": 414, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev333", "source_user_id": 333, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev211", "target_user_id": 211, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev437", "source_user_id": 437, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev211", "source_user_id": 211, "target": "Dev94", "target_user_id": 94, "weight": 0.05}, {"source": "Dev211", "source_user_id": 211, "target": "Dev446", "target_user_id": 446, "weight": 0.03}, {"source": "Dev211", "source_user_id": 211, "target": "Dev202", "target_user_id": 202, "weight": 0.05}, {"source": "Dev94", "source_user_id": 94, "target": "Dev229", "target_user_id": 229, "weight": 0.05}, {"source": "Dev94", "source_user_id": 94, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev229", "source_user_id": 229, "target": "Dev446", "target_user_id": 446, "weight": 0.15}, {"source": "Dev282", "source_user_id": 282, "target": "Dev336", "target_user_id": 336, "weight": 0.13}, {"source": "Dev282", "source_user_id": 282, "target": "Dev335", "target_user_id": 335, "weight": 0.09}, {"source": "Dev282", "source_user_id": 282, "target": "Dev317", "target_user_id": 317, "weight": 0.19}, {"source": "Dev282", "source_user_id": 282, "target": "Dev339", "target_user_id": 339, "weight": 0.05}, {"source": "Dev282", "source_user_id": 282, "target": "Dev399", "target_user_id": 399, "weight": 0.16}, {"source": "Dev282", "source_user_id": 282, "target": "Dev438", "target_user_id": 438, "weight": 0.05}, {"source": "Dev336", "source_user_id": 336, "target": "Dev335", "target_user_id": 335, "weight": 0.14}, {"source": "Dev336", "source_user_id": 336, "target": "Dev317", "target_user_id": 317, "weight": 0.12}, {"source": "Dev336", "source_user_id": 336, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev336", "source_user_id": 336, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev336", "source_user_id": 336, "target": "Dev399", "target_user_id": 399, "weight": 0.12}, {"source": "Dev336", "source_user_id": 336, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev317", "target_user_id": 317, "weight": 0.14}, {"source": "Dev335", "source_user_id": 335, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev335", "source_user_id": 335, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev423", "target_user_id": 423, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev339", "target_user_id": 339, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev317", "source_user_id": 317, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev423", "source_user_id": 423, "target": "Dev339", "target_user_id": 339, "weight": 0.05}, {"source": "Dev423", "source_user_id": 423, "target": "Dev399", "target_user_id": 399, "weight": 0.05}, {"source": "Dev423", "source_user_id": 423, "target": "Dev438", "target_user_id": 438, "weight": 0.05}, {"source": "Dev339", "source_user_id": 339, "target": "Dev399", "target_user_id": 399, "weight": 0.09}, {"source": "Dev339", "source_user_id": 339, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev399", "source_user_id": 399, "target": "Dev438", "target_user_id": 438, "weight": 0.09}, {"source": "Dev89", "source_user_id": 89, "target": "Dev85", "target_user_id": 85, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev198", "target_user_id": 198, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev89", "source_user_id": 89, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev89", "source_user_id": 89, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev89", "source_user_id": 89, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev89", "source_user_id": 89, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev89", "source_user_id": 89, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev89", "source_user_id": 89, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev198", "target_user_id": 198, "weight": 0.33}, {"source": "Dev85", "source_user_id": 85, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev85", "source_user_id": 85, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev85", "source_user_id": 85, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev85", "source_user_id": 85, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev85", "source_user_id": 85, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev85", "source_user_id": 85, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev85", "source_user_id": 85, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev271", "target_user_id": 271, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev397", "target_user_id": 397, "weight": 0.26}, {"source": "Dev198", "source_user_id": 198, "target": "Dev223", "target_user_id": 223, "weight": 0.33}, {"source": "Dev198", "source_user_id": 198, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev198", "source_user_id": 198, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev198", "source_user_id": 198, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev269", "target_user_id": 269, "weight": 0.07}, {"source": "Dev198", "source_user_id": 198, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev198", "source_user_id": 198, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev198", "source_user_id": 198, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev397", "target_user_id": 397, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev223", "target_user_id": 223, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev331", "target_user_id": 331, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev330", "target_user_id": 330, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev373", "target_user_id": 373, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev384", "target_user_id": 384, "weight": 0.04}, {"source": "Dev271", "source_user_id": 271, "target": "Dev332", "target_user_id": 332, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev223", "target_user_id": 223, "weight": 0.26}, {"source": "Dev397", "source_user_id": 397, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev397", "source_user_id": 397, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev397", "source_user_id": 397, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev397", "source_user_id": 397, "target": "Dev327", "target_user_id": 327, "weight": 0.11}, {"source": "Dev397", "source_user_id": 397, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev331", "target_user_id": 331, "weight": 0.15}, {"source": "Dev223", "source_user_id": 223, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev223", "source_user_id": 223, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev223", "source_user_id": 223, "target": "Dev327", "target_user_id": 327, "weight": 0.15}, {"source": "Dev223", "source_user_id": 223, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev330", "target_user_id": 330, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev331", "source_user_id": 331, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev331", "source_user_id": 331, "target": "Dev327", "target_user_id": 327, "weight": 0.11}, {"source": "Dev331", "source_user_id": 331, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev330", "source_user_id": 330, "target": "Dev373", "target_user_id": 373, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev330", "source_user_id": 330, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev373", "source_user_id": 373, "target": "Dev384", "target_user_id": 384, "weight": 0.08}, {"source": "Dev373", "source_user_id": 373, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev373", "source_user_id": 373, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev384", "source_user_id": 384, "target": "Dev332", "target_user_id": 332, "weight": 0.08}, {"source": "Dev384", "source_user_id": 384, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev332", "source_user_id": 332, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev178", "source_user_id": 178, "target": "Dev356", "target_user_id": 356, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev269", "target_user_id": 269, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev356", "source_user_id": 356, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev367", "target_user_id": 367, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev269", "source_user_id": 269, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev367", "source_user_id": 367, "target": "Dev327", "target_user_id": 327, "weight": 0.04}, {"source": "Dev367", "source_user_id": 367, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev327", "source_user_id": 327, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev16", "target_user_id": 16, "weight": 0.23}, {"source": "Dev18", "source_user_id": 18, "target": "Dev45", "target_user_id": 45, "weight": 0.07}, {"source": "Dev18", "source_user_id": 18, "target": "Dev351", "target_user_id": 351, "weight": 0.07}, {"source": "Dev18", "source_user_id": 18, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev18", "source_user_id": 18, "target": "Dev183", "target_user_id": 183, "weight": 0.13}, {"source": "Dev18", "source_user_id": 18, "target": "Dev236", "target_user_id": 236, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev435", "target_user_id": 435, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev45", "target_user_id": 45, "weight": 0.07}, {"source": "Dev16", "source_user_id": 16, "target": "Dev351", "target_user_id": 351, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev16", "source_user_id": 16, "target": "Dev236", "target_user_id": 236, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev435", "target_user_id": 435, "weight": 0.04}, {"source": "Dev45", "source_user_id": 45, "target": "Dev351", "target_user_id": 351, "weight": 0.03}, {"source": "Dev45", "source_user_id": 45, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev45", "source_user_id": 45, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev174", "target_user_id": 174, "weight": 0.03}, {"source": "Dev351", "source_user_id": 351, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev174", "source_user_id": 174, "target": "Dev183", "target_user_id": 183, "weight": 0.03}, {"source": "Dev236", "source_user_id": 236, "target": "Dev435", "target_user_id": 435, "weight": 0.08}, {"source": "Dev5", "source_user_id": 5, "target": "Dev211", "target_user_id": 211, "weight": 0.04}, {"source": "Dev5", "source_user_id": 5, "target": "Dev48", "target_user_id": 48, "weight": 0.04}, {"source": "Dev5", "source_user_id": 5, "target": "Dev170", "target_user_id": 170, "weight": 0.08}, {"source": "Dev5", "source_user_id": 5, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev211", "source_user_id": 211, "target": "Dev324", "target_user_id": 324, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev48", "target_user_id": 48, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev27", "target_user_id": 27, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev411", "target_user_id": 411, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev425", "target_user_id": 425, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev363", "target_user_id": 363, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev305", "target_user_id": 305, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev214", "target_user_id": 214, "weight": 0.02}, {"source": "Dev211", "source_user_id": 211, "target": "Dev447", "target_user_id": 447, "weight": 0.02}, {"source": "Dev324", "source_user_id": 324, "target": "Dev395", "target_user_id": 395, "weight": 0.04}, {"source": "Dev324", "source_user_id": 324, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev48", "source_user_id": 48, "target": "Dev27", "target_user_id": 27, "weight": 0.04}, {"source": "Dev48", "source_user_id": 48, "target": "Dev305", "target_user_id": 305, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev27", "source_user_id": 27, "target": "Dev214", "target_user_id": 214, "weight": 0.04}, {"source": "Dev411", "source_user_id": 411, "target": "Dev170", "target_user_id": 170, "weight": 0.04}, {"source": "Dev411", "source_user_id": 411, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev170", "source_user_id": 170, "target": "Dev425", "target_user_id": 425, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev363", "target_user_id": 363, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev305", "target_user_id": 305, "weight": 0.08}, {"source": "Dev170", "source_user_id": 170, "target": "Dev447", "target_user_id": 447, "weight": 0.04}, {"source": "Dev170", "source_user_id": 170, "target": "Dev446", "target_user_id": 446, "weight": 0.08}, {"source": "Dev425", "source_user_id": 425, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev363", "source_user_id": 363, "target": "Dev214", "target_user_id": 214, "weight": 0.09}, {"source": "Dev305", "source_user_id": 305, "target": "Dev214", "target_user_id": 214, "weight": 0.04}, {"source": "Dev214", "source_user_id": 214, "target": "Dev447", "target_user_id": 447, "weight": 0.09}, {"source": "Dev214", "source_user_id": 214, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev290", "source_user_id": 290, "target": "Dev8", "target_user_id": 8, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev227", "target_user_id": 227, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev382", "target_user_id": 382, "weight": 0.07}, {"source": "Dev290", "source_user_id": 290, "target": "Dev138", "target_user_id": 138, "weight": 0.18}, {"source": "Dev290", "source_user_id": 290, "target": "Dev142", "target_user_id": 142, "weight": 0.28}, {"source": "Dev290", "source_user_id": 290, "target": "Dev140", "target_user_id": 140, "weight": 0.14}, {"source": "Dev290", "source_user_id": 290, "target": "Dev137", "target_user_id": 137, "weight": 0.21}, {"source": "Dev290", "source_user_id": 290, "target": "Dev225", "target_user_id": 225, "weight": 0.21}, {"source": "Dev8", "source_user_id": 8, "target": "Dev227", "target_user_id": 227, "weight": 0.08}, {"source": "Dev8", "source_user_id": 8, "target": "Dev382", "target_user_id": 382, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev138", "target_user_id": 138, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev142", "target_user_id": 142, "weight": 0.1}, {"source": "Dev8", "source_user_id": 8, "target": "Dev140", "target_user_id": 140, "weight": 0.03}, {"source": "Dev8", "source_user_id": 8, "target": "Dev137", "target_user_id": 137, "weight": 0.14}, {"source": "Dev8", "source_user_id": 8, "target": "Dev225", "target_user_id": 225, "weight": 0.1}, {"source": "Dev227", "source_user_id": 227, "target": "Dev382", "target_user_id": 382, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev138", "target_user_id": 138, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev142", "target_user_id": 142, "weight": 0.07}, {"source": "Dev227", "source_user_id": 227, "target": "Dev140", "target_user_id": 140, "weight": 0.03}, {"source": "Dev227", "source_user_id": 227, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev227", "source_user_id": 227, "target": "Dev225", "target_user_id": 225, "weight": 0.14}, {"source": "Dev382", "source_user_id": 382, "target": "Dev138", "target_user_id": 138, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev142", "target_user_id": 142, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev140", "target_user_id": 140, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev382", "source_user_id": 382, "target": "Dev225", "target_user_id": 225, "weight": 0.03}, {"source": "Dev138", "source_user_id": 138, "target": "Dev142", "target_user_id": 142, "weight": 0.25}, {"source": "Dev138", "source_user_id": 138, "target": "Dev140", "target_user_id": 140, "weight": 0.21}, {"source": "Dev138", "source_user_id": 138, "target": "Dev137", "target_user_id": 137, "weight": 0.1}, {"source": "Dev138", "source_user_id": 138, "target": "Dev225", "target_user_id": 225, "weight": 0.11}, {"source": "Dev142", "source_user_id": 142, "target": "Dev140", "target_user_id": 140, "weight": 0.21}, {"source": "Dev142", "source_user_id": 142, "target": "Dev137", "target_user_id": 137, "weight": 0.24}, {"source": "Dev142", "source_user_id": 142, "target": "Dev225", "target_user_id": 225, "weight": 0.21}, {"source": "Dev140", "source_user_id": 140, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev140", "source_user_id": 140, "target": "Dev225", "target_user_id": 225, "weight": 0.11}, {"source": "Dev137", "source_user_id": 137, "target": "Dev225", "target_user_id": 225, "weight": 0.14}, {"source": "Dev77", "source_user_id": 77, "target": "Dev104", "target_user_id": 104, "weight": 0.14}, {"source": "Dev77", "source_user_id": 77, "target": "Dev362", "target_user_id": 362, "weight": 0.18}, {"source": "Dev77", "source_user_id": 77, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev77", "source_user_id": 77, "target": "Dev365", "target_user_id": 365, "weight": 0.18}, {"source": "Dev77", "source_user_id": 77, "target": "Dev65", "target_user_id": 65, "weight": 0.05}, {"source": "Dev77", "source_user_id": 77, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev104", "source_user_id": 104, "target": "Dev362", "target_user_id": 362, "weight": 0.05}, {"source": "Dev104", "source_user_id": 104, "target": "Dev365", "target_user_id": 365, "weight": 0.09}, {"source": "Dev362", "source_user_id": 362, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev362", "source_user_id": 362, "target": "Dev365", "target_user_id": 365, "weight": 0.05}, {"source": "Dev181", "source_user_id": 181, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev365", "source_user_id": 365, "target": "Dev65", "target_user_id": 65, "weight": 0.05}, {"source": "Dev365", "source_user_id": 365, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev65", "source_user_id": 65, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev326", "source_user_id": 326, "target": "Dev324", "target_user_id": 324, "weight": 0.12}, {"source": "Dev326", "source_user_id": 326, "target": "Dev220", "target_user_id": 220, "weight": 0.12}, {"source": "Dev326", "source_user_id": 326, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev326", "source_user_id": 326, "target": "Dev305", "target_user_id": 305, "weight": 0.12}, {"source": "Dev372", "source_user_id": 372, "target": "Dev305", "target_user_id": 305, "weight": 0.05}, {"source": "Dev324", "source_user_id": 324, "target": "Dev220", "target_user_id": 220, "weight": 0.11}, {"source": "Dev324", "source_user_id": 324, "target": "Dev359", "target_user_id": 359, "weight": 0.06}, {"source": "Dev324", "source_user_id": 324, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev359", "target_user_id": 359, "weight": 0.18}, {"source": "Dev220", "source_user_id": 220, "target": "Dev308", "target_user_id": 308, "weight": 0.06}, {"source": "Dev220", "source_user_id": 220, "target": "Dev448", "target_user_id": 448, "weight": 0.06}, {"source": "Dev359", "source_user_id": 359, "target": "Dev305", "target_user_id": 305, "weight": 0.2}, {"source": "Dev308", "source_user_id": 308, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev308", "source_user_id": 308, "target": "Dev305", "target_user_id": 305, "weight": 0.11}, {"source": "Dev308", "source_user_id": 308, "target": "Dev170", "target_user_id": 170, "weight": 0.05}, {"source": "Dev5", "source_user_id": 5, "target": "Dev94", "target_user_id": 94, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev381", "target_user_id": 381, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev145", "target_user_id": 145, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev94", "source_user_id": 94, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev94", "source_user_id": 94, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev381", "source_user_id": 381, "target": "Dev145", "target_user_id": 145, "weight": 0.04}, {"source": "Dev381", "source_user_id": 381, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev381", "source_user_id": 381, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev145", "source_user_id": 145, "target": "Dev214", "target_user_id": 214, "weight": 0.41}, {"source": "Dev145", "source_user_id": 145, "target": "Dev63", "target_user_id": 63, "weight": 0.04}, {"source": "Dev145", "source_user_id": 145, "target": "Dev263", "target_user_id": 263, "weight": 0.04}, {"source": "Dev63", "source_user_id": 63, "target": "Dev263", "target_user_id": 263, "weight": 0.19}, {"source": "Dev205", "source_user_id": 205, "target": "Dev250", "target_user_id": 250, "weight": 0.17}, {"source": "Dev205", "source_user_id": 205, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev351", "source_user_id": 351, "target": "Dev114", "target_user_id": 114, "weight": 0.11}, {"source": "Dev105", "source_user_id": 105, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev250", "source_user_id": 250, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev311", "source_user_id": 311, "target": "Dev114", "target_user_id": 114, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev46", "target_user_id": 46, "weight": 0.03}, {"source": "Dev14", "source_user_id": 14, "target": "Dev180", "target_user_id": 180, "weight": 0.03}, {"source": "Dev161", "source_user_id": 161, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev180", "source_user_id": 180, "target": "Dev28", "target_user_id": 28, "weight": 0.05}, {"source": "Dev14", "source_user_id": 14, "target": "Dev53", "target_user_id": 53, "weight": 0.04}, {"source": "Dev14", "source_user_id": 14, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev46", "source_user_id": 46, "target": "Dev335", "target_user_id": 335, "weight": 0.03}, {"source": "Dev46", "source_user_id": 46, "target": "Dev181", "target_user_id": 181, "weight": 0.03}, {"source": "Dev53", "source_user_id": 53, "target": "Dev335", "target_user_id": 335, "weight": 0.02}, {"source": "Dev53", "source_user_id": 53, "target": "Dev38", "target_user_id": 38, "weight": 0.07}, {"source": "Dev53", "source_user_id": 53, "target": "Dev137", "target_user_id": 137, "weight": 0.07}, {"source": "Dev53", "source_user_id": 53, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev335", "target_user_id": 335, "weight": 0.05}, {"source": "Dev180", "source_user_id": 180, "target": "Dev38", "target_user_id": 38, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev137", "target_user_id": 137, "weight": 0.02}, {"source": "Dev180", "source_user_id": 180, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev335", "source_user_id": 335, "target": "Dev38", "target_user_id": 38, "weight": 0.02}, {"source": "Dev335", "source_user_id": 335, "target": "Dev137", "target_user_id": 137, "weight": 0.04}, {"source": "Dev335", "source_user_id": 335, "target": "Dev181", "target_user_id": 181, "weight": 0.05}, {"source": "Dev38", "source_user_id": 38, "target": "Dev137", "target_user_id": 137, "weight": 0.02}, {"source": "Dev38", "source_user_id": 38, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev137", "source_user_id": 137, "target": "Dev181", "target_user_id": 181, "weight": 0.02}, {"source": "Dev392", "source_user_id": 392, "target": "Dev335", "target_user_id": 335, "weight": 0.03}, {"source": "Dev242", "source_user_id": 242, "target": "Dev448", "target_user_id": 448, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev359", "target_user_id": 359, "weight": 0.04}, {"source": "Dev281", "source_user_id": 281, "target": "Dev305", "target_user_id": 305, "weight": 0.06}, {"source": "Dev281", "source_user_id": 281, "target": "Dev242", "target_user_id": 242, "weight": 0.06}, {"source": "Dev242", "source_user_id": 242, "target": "Dev308", "target_user_id": 308, "weight": 0.1}, {"source": "Dev242", "source_user_id": 242, "target": "Dev324", "target_user_id": 324, "weight": 0.04}, {"source": "Dev38", "source_user_id": 38, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev119", "source_user_id": 119, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev152", "source_user_id": 152, "target": "Dev358", "target_user_id": 358, "weight": 0.04}, {"source": "Dev18", "source_user_id": 18, "target": "Dev36", "target_user_id": 36, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev363", "target_user_id": 363, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev27", "target_user_id": 27, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev411", "target_user_id": 411, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev447", "target_user_id": 447, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev425", "target_user_id": 425, "weight": 0.05}, {"source": "Dev18", "source_user_id": 18, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev236", "source_user_id": 236, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev16", "source_user_id": 16, "target": "Dev36", "target_user_id": 36, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev363", "target_user_id": 363, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev27", "target_user_id": 27, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev411", "target_user_id": 411, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev447", "target_user_id": 447, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev425", "target_user_id": 425, "weight": 0.05}, {"source": "Dev16", "source_user_id": 16, "target": "Dev446", "target_user_id": 446, "weight": 0.05}, {"source": "Dev435", "source_user_id": 435, "target": "Dev446", "target_user_id": 446, "weight": 0.04}, {"source": "Dev36", "source_user_id": 36, "target": "Dev363", "target_user_id": 363, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev27", "target_user_id": 27, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev411", "target_user_id": 411, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev447", "target_user_id": 447, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev425", "target_user_id": 425, "weight": 0.16}, {"source": "Dev36", "source_user_id": 36, "target": "Dev446", "target_user_id": 446, "weight": 0.11}, {"source": "Dev18", "source_user_id": 18, "target": "Dev178", "target_user_id": 178, "weight": 0.12}, {"source": "Dev446", "source_user_id": 446, "target": "Dev227", "target_user_id": 227, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev8", "target_user_id": 8, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev178", "target_user_id": 178, "weight": 0.06}, {"source": "Dev29", "source_user_id": 29, "target": "Dev138", "target_user_id": 138, "weight": 0.07}, {"source": "Dev29", "source_user_id": 29, "target": "Dev290", "target_user_id": 290, "weight": 0.11}, {"source": "Dev29", "source_user_id": 29, "target": "Dev140", "target_user_id": 140, "weight": 0.04}, {"source": "Dev29", "source_user_id": 29, "target": "Dev142", "target_user_id": 142, "weight": 0.11}, {"source": "Dev282", "source_user_id": 282, "target": "Dev81", "target_user_id": 81, "weight": 0.11}, {"source": "Dev415", "source_user_id": 415, "target": "Dev81", "target_user_id": 81, "weight": 0.06}, {"source": "Dev415", "source_user_id": 415, "target": "Dev336", "target_user_id": 336, "weight": 0.08}, {"source": "Dev415", "source_user_id": 415, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev81", "source_user_id": 81, "target": "Dev316", "target_user_id": 316, "weight": 0.11}, {"source": "Dev81", "source_user_id": 81, "target": "Dev336", "target_user_id": 336, "weight": 0.03}, {"source": "Dev81", "source_user_id": 81, "target": "Dev370", "target_user_id": 370, "weight": 0.06}, {"source": "Dev81", "source_user_id": 81, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev398", "source_user_id": 398, "target": "Dev336", "target_user_id": 336, "weight": 0.04}, {"source": "Dev398", "source_user_id": 398, "target": "Dev317", "target_user_id": 317, "weight": 0.06}, {"source": "Dev316", "source_user_id": 316, "target": "Dev336", "target_user_id": 336, "weight": 0.11}, {"source": "Dev316", "source_user_id": 316, "target": "Dev317", "target_user_id": 317, "weight": 0.1}, {"source": "Dev336", "source_user_id": 336, "target": "Dev370", "target_user_id": 370, "weight": 0.06}, {"source": "Dev370", "source_user_id": 370, "target": "Dev317", "target_user_id": 317, "weight": 0.04}, {"source": "Dev415", "source_user_id": 415, "target": "Dev399", "target_user_id": 399, "weight": 0.07}, {"source": "Dev316", "source_user_id": 316, "target": "Dev399", "target_user_id": 399, "weight": 0.07}, {"source": "Dev14", "source_user_id": 14, "target": "Dev36", "target_user_id": 36, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev14", "source_user_id": 14, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev363", "target_user_id": 363, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev27", "target_user_id": 27, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev411", "target_user_id": 411, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev447", "target_user_id": 447, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev425", "target_user_id": 425, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev348", "target_user_id": 348, "weight": 0.06}, {"source": "Dev241", "source_user_id": 241, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev446", "source_user_id": 446, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev348", "source_user_id": 348, "target": "Dev382", "target_user_id": 382, "weight": 0.06}, {"source": "Dev154", "source_user_id": 154, "target": "Dev205", "target_user_id": 205, "weight": 0.16}]}

let dadosUsuarios = [
    {
      "user_id": 77,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        13,
        22,
        23,
        48,
        52,
        60,
        68,
        69,
        94,
        105,
        108,
        139,
        160,
        176,
        228,
        230,
        231,
        266,
        268
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mateus Assis Maximo de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 78,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        13
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "CSS",
        "HTML",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Rogério César da Nóbrega",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 79,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        13,
        48,
        139,
        105
      ],
      "softskills": [],
      "hardskill": [
        "iOS"
      ],
      "nomeCompleto": "Adelito Borba Farias",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 80,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        13
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Cláudio Cardoso de Almeida Júnior",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 81,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 31,
      "contractRoleName": "Junior",
      "projects_id": [
        13,
        22,
        48,
        60,
        69,
        68,
        153,
        119,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [
        "JavaScript",
        "IOT",
        "JavaScript",
        "JavaScript",
        "IOT"
      ],
      "nomeCompleto": "Diego Renato dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 82,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 31,
      "contractRoleName": "Junior",
      "projects_id": [
        13,
        106,
        246,
        262,
        233
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jonhnanthan Victor Pereira Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 83,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 31,
      "contractRoleName": "Junior",
      "projects_id": [
        13
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Nattan de Oliveira Lucena",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 14,
      "bio": null,
      "systemRole": "DIRECTOR",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        7,
        5,
        6,
        4,
        9,
        8,
        10,
        11,
        27,
        38,
        87,
        91,
        95,
        96,
        102,
        103,
        116,
        158,
        173,
        178,
        185,
        195,
        196,
        227,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sérgio Augusto Freitas Pinto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 127,
      "bio": null,
      "systemRole": "DIRECTOR",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Angelo Perkusich",
      "methodology": []
    },
    {
      "user_id": 128,
      "bio": null,
      "systemRole": "DIRECTOR",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Taciana Rached",
      "methodology": []
    },
    {
      "user_id": 59,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        18,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Frederico Moreira Bublitz",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 60,
      "bio": null,
      "systemRole": "DIRECTOR",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [
        96
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hyggo Almeida",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 61,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 6,
      "contractRoleID": 27,
      "contractRoleName": "Project Manager",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Caramelo",
      "methodology": []
    },
    {
      "user_id": 3,
      "bio": "Assistant professor at UFPB - Campus IV\nPh.D. in Software Engineering.\nWorks at Virtus as a Project manager since 2015.",
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 12,
      "contractRoleName": "Project Manager",
      "projects_id": [
        38,
        65,
        67,
        75,
        55,
        53,
        82,
        84,
        85,
        87,
        136,
        143,
        146,
        147,
        127
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rodrigo de Almeida Vilar de Miranda",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 94,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 14,
      "contractRoleName": "Senior",
      "projects_id": [
        18,
        27,
        4,
        45,
        38,
        75,
        82,
        107,
        125,
        156,
        7,
        158,
        179,
        180,
        181,
        199,
        200,
        201,
        282
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wagner Leal da Costa Torres de Andrade",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 131,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 14,
      "contractRoleName": "Senior",
      "projects_id": [
        58,
        74,
        131,
        154,
        162,
        165,
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Fonseca Meneses",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 171,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 15,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Yuri Siqueira Nascimento Melo",
      "methodology": []
    },
    {
      "user_id": 269,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 15,
      "contractRoleName": "Middle",
      "projects_id": [
        82,
        153,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jackson Alves Lino",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 374,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 16,
      "contractRoleName": "Junior",
      "projects_id": [
        115
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Giuan Adauto de Sousa Araújo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 348,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 3,
      "contractRoleID": 16,
      "contractRoleName": "Junior",
      "projects_id": [
        107,
        156,
        180,
        199,
        258,
        270
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Antonio Leite dos Santos Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 90,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 42,
      "contractRoleName": "Project Manager",
      "projects_id": [
        20,
        32,
        70
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Barros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 91,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 42,
      "contractRoleName": "Project Manager",
      "projects_id": [
        18
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Bezerra",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 95,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 45,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniel Ribeiro Albert",
      "methodology": []
    },
    {
      "user_id": 96,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 44,
      "contractRoleName": "Senior",
      "projects_id": [
        18
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tales Ribeiro Morais Gurjão",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 97,
      "bio": "Dev",
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 45,
      "contractRoleName": "Middle",
      "projects_id": [
        89,
        113,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Paulo César de Lira Nóbrega",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 98,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 45,
      "contractRoleName": "Middle",
      "projects_id": [
        17,
        47
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raíssa Matias da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 99,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 44,
      "contractRoleName": "Senior",
      "projects_id": [
        18
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Yuri Farias Gomes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 100,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 9,
      "contractRoleID": 46,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ed Rodolfo Farias da Silva",
      "methodology": []
    },
    {
      "user_id": 57,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 22,
      "contractRoleName": "Project Manager",
      "projects_id": [
        10,
        11,
        41,
        49,
        77,
        76,
        82,
        117,
        118,
        168,
        169,
        267
      ],
      "softskills": [],
      "hardskill": [
        "IOT",
        "Lua",
        "IOT",
        "Lua"
      ],
      "nomeCompleto": "Ádrian Guedes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 65,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 24,
      "contractRoleName": "Senior",
      "projects_id": [
        11,
        49,
        76,
        118,
        117,
        176,
        231,
        239
      ],
      "softskills": [],
      "hardskill": [
        "IOT",
        "IOT",
        "IOT",
        "IOT",
        "IOT",
        "IOT",
        "RESTful APIs",
        "RESTful APIs",
        "C++",
        "C++",
        "iOS",
        "iOS",
        "Java"
      ],
      "nomeCompleto": "Renan Pinto da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 67,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 24,
      "contractRoleName": "Senior",
      "projects_id": [
        11,
        49,
        76,
        77,
        118,
        117,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thalita da Nóbrega Gonçalves",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 68,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 26,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Oliveiros Cavalcanti de Oliveira Neto",
      "methodology": []
    },
    {
      "user_id": 74,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 24,
      "contractRoleName": "Senior",
      "projects_id": [
        41,
        76,
        11,
        118
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "Python",
        "Python",
        "Python"
      ],
      "nomeCompleto": "Leonardo Carvalho Cordeiro",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 76,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 26,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Web",
        "Web",
        "Web",
        "Web",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Matheus Oliveira de Azevedo",
      "methodology": []
    },
    {
      "user_id": 244,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 24,
      "contractRoleName": "Senior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adalberto Francisco Monteiro Neto",
      "methodology": []
    },
    {
      "user_id": 261,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 26,
      "contractRoleName": "Junior",
      "projects_id": [
        41,
        76,
        11,
        118,
        150,
        216,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Talles Henriques Sousa Gomes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 262,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 5,
      "contractRoleID": 26,
      "contractRoleName": "Junior",
      "projects_id": [
        41,
        77,
        11,
        117,
        118,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kawê Romero Costa de Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 50,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 17,
      "contractRoleName": "Project Manager",
      "projects_id": [
        8,
        47,
        151,
        109,
        79
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jemerson Figueiredo Damásio",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 53,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 21,
      "contractRoleName": "Junior",
      "projects_id": [
        8,
        38,
        73,
        82,
        92,
        71,
        114,
        113,
        155,
        196,
        209
      ],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript"
      ],
      "nomeCompleto": "Amanda Lopes Fabrício",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 54,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 20,
      "contractRoleName": "Middle",
      "projects_id": [
        8,
        146
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Android",
        "Android",
        "Android",
        "Android"
      ],
      "nomeCompleto": "Paulo Ouriques",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 55,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 21,
      "contractRoleName": "Junior",
      "projects_id": [
        8,
        124,
        155
      ],
      "softskills": [],
      "hardskill": [
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Web",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Web",
        "iOS",
        "Swift",
        "iOS",
        "Swift",
        "Android",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "Web",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "André Iago Maracajá Albuquerque",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 56,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 21,
      "contractRoleName": "Junior",
      "projects_id": [
        8,
        40,
        83,
        106,
        248,
        262
      ],
      "softskills": [],
      "hardskill": [
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web"
      ],
      "nomeCompleto": "Bruno José Clementino",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 92,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 4,
      "contractRoleID": 18,
      "contractRoleName": "Master",
      "projects_id": [
        17,
        8,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lorena Fernandes Maia",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 16,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        91,
        100,
        115,
        164,
        194,
        239,
        240
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "José Geraldo de Lima Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 25,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 11,
      "contractRoleName": "External",
      "projects_id": [
        3,
        6
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Judicael Guimarães Gomes Filho",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 26,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 11,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Araújo",
      "methodology": []
    },
    {
      "user_id": 27,
      "bio": "Tester",
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 8,
      "contractRoleName": "Senior",
      "projects_id": [
        72,
        82,
        80,
        85,
        99,
        103,
        123,
        145,
        144,
        149,
        148,
        150,
        171,
        177,
        179,
        213,
        239,
        240,
        258,
        284,
        279
      ],
      "softskills": [],
      "hardskill": [
        "Web",
        "JavaScript"
      ],
      "nomeCompleto": "Filipe Guimarães Ramos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 36,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 6,
      "contractRoleName": "Project Manager",
      "projects_id": [
        7,
        82,
        128,
        131,
        154,
        162,
        165,
        239,
        240,
        258,
        127
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "André Meireles de Andrade",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 45,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        100,
        115,
        164
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Israel da Costa Cunha",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 62,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 7,
      "contractRoleName": "Master",
      "projects_id": [
        106,
        85,
        166,
        244,
        262
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "MongoDB",
        "MongoDB",
        "MongoDB",
        "MongoDB"
      ],
      "nomeCompleto": "Edney Ramalho e Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 103,
      "bio": null,
      "systemRole": "SQA",
      "contractId": 2,
      "contractRoleID": 6,
      "contractRoleName": "Project Manager",
      "projects_id": [
        40,
        42,
        38,
        7,
        44,
        12,
        5,
        28,
        82,
        96,
        35,
        85,
        172
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabrício Epaminondas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 241,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 6,
      "contractRoleName": "Project Manager",
      "projects_id": [
        106,
        85,
        102,
        116,
        157,
        185,
        232,
        244,
        246,
        247,
        248,
        249,
        258,
        270
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antônio Carlos de Macedo Dantas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 202,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        105,
        108,
        153,
        127,
        158,
        250
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo de Melo Fernandes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "KANBAN"
      ]
    },
    {
      "user_id": 7,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        40,
        82,
        85,
        112,
        142,
        140,
        106,
        166,
        248,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luma Gomes do Nascimento",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 310,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emerson Barbosa da Cunha",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 307,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafaelly Santana",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 44,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        105,
        108,
        93
      ],
      "softskills": [],
      "hardskill": [
        "IOT",
        "IOT",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Renato da Silva Ramiro",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 211,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 7,
      "contractRoleName": "Master",
      "projects_id": [
        38,
        67,
        73,
        3,
        86,
        87,
        91,
        95,
        119,
        126,
        123,
        131,
        124,
        112,
        153,
        154,
        158,
        171,
        172,
        120
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Artur Alves de Farias",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 250,
      "bio": "...",
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        105,
        108,
        265,
        192,
        138
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wendley Paulo de França",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 352,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kallynny Karlla Alcantara Antonino",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 353,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82,
        105,
        108,
        69,
        94
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Naylla Vieira Almeida Estrela",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 362,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        7,
        105,
        108,
        139,
        176,
        230
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Robson Ferreira de Sousa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 364,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcela Tejo",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 371,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 11,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alex Carmo",
      "methodology": []
    },
    {
      "user_id": 105,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 6,
      "contractRoleName": "Project Manager",
      "projects_id": [
        15,
        36,
        66,
        89,
        160,
        5,
        174,
        227,
        234,
        189,
        191,
        192,
        190,
        260,
        138,
        129,
        265,
        133,
        277,
        278
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Sousa de Azevedo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 107,
      "bio": "Software Engineering",
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        15,
        66,
        36
      ],
      "softskills": [],
      "hardskill": [
        "Web",
        "iOS"
      ],
      "nomeCompleto": "Bruno Nascimento Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 193,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        36,
        66,
        85,
        82,
        86,
        89
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Jackson de Araújo Alves",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 291,
      "bio": "Bacharela em Sistemas de Informação pela Universidade Federal da Paraíba Campus IV Litoral Norte.",
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        66,
        85,
        82,
        86,
        89,
        113,
        114,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Nathane Henrique da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 234,
      "bio": "Senior Developer",
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 8,
      "contractRoleName": "Senior",
      "projects_id": [
        47
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Manoel Pereira Leite Neto",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 275,
      "bio": null,
      "systemRole": "DESIGNER_LEADER",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        211
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alex Galvão",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 194,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        40,
        57,
        99,
        103,
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Elizabeth Camila Alcantara Naressi",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 181,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 9,
      "contractRoleName": "Middle",
      "projects_id": [
        82,
        99,
        5,
        176,
        230,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Recesso",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 165,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 8,
      "contractRoleName": "Senior",
      "projects_id": [
        38,
        70,
        103,
        5,
        227,
        234
      ],
      "softskills": [],
      "hardskill": [
        "MongoDB",
        "iOS"
      ],
      "nomeCompleto": "Guilherme Emmanuel de Sousa Neves",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 260,
      "bio": null,
      "systemRole": "SQA",
      "contractId": 2,
      "contractRoleID": 6,
      "contractRoleName": "Project Manager",
      "projects_id": [
        82,
        96,
        7,
        85,
        136,
        283,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leonardo Melo de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 447,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 2,
      "contractRoleID": 10,
      "contractRoleName": "Junior",
      "projects_id": [
        5,
        85,
        82,
        149,
        148,
        150,
        171,
        145,
        144,
        179,
        177,
        123,
        214,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Paulo André Braga Souto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 93,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 11,
      "contractRoleID": 52,
      "contractRoleName": "Project Manager",
      "projects_id": [
        15,
        36,
        66,
        82,
        86,
        85,
        89,
        158
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jefferson de Araujo Alves",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 148,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 30,
      "contractRoleID": 153,
      "contractRoleName": "Project Manager",
      "projects_id": [
        26,
        52,
        65,
        61
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Abraão de Morais Marinho dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 155,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 30,
      "contractRoleID": 156,
      "contractRoleName": "Middle",
      "projects_id": [
        26,
        52,
        65
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luiz Antonio Costa Correa Filho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 152,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 30,
      "contractRoleID": 157,
      "contractRoleName": "Junior",
      "projects_id": [
        26,
        52,
        65,
        98,
        113,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ulysses de Medeiros Gomes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 8,
      "bio": "Mestrando em Tecnologias Estratégicas em Saúde - UEPB\nGraduado em Sistemas de Informação - Facisa\nDesenvolvedor no Laboratório de Sistemas Embarcados e Computação Pervasiva (Embedded/Virtus)\nUniversidade Federal de Campina Grande - UFCG\nCertificação Internacional em Engenharia de Requisitos - 15-CPRE-FL-00109-BR\nCPRE Insignia: https://www.ireb.org/en/service/cpre-registry-list/351/\nScrum Fundamentals Certifield Credential",
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        1,
        47,
        92,
        104,
        151,
        175,
        205,
        240
      ],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT"
      ],
      "nomeCompleto": "Genilson Medeiros Martins",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 11,
      "bio": "UI/UX Designer Pleno",
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Sobreira Dias Honorato",
      "methodology": []
    },
    {
      "user_id": 144,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        1,
        46,
        92,
        104,
        153,
        152,
        127,
        264
      ],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "André Felipe Neves Muniz",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 132,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 1,
      "contractRoleName": "Project Manager",
      "projects_id": [
        25,
        26,
        46,
        78,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Vitorino",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 225,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 2,
      "contractRoleName": "Master",
      "projects_id": [
        46,
        47,
        82,
        71,
        92,
        109,
        175,
        205,
        116,
        185,
        242,
        253,
        228
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marsell Senko",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 290,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 2,
      "contractRoleName": "Master",
      "projects_id": [
        71,
        79,
        92,
        82,
        85,
        175,
        205,
        253,
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luiz Alexandre Cabral Escorel",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 226,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        46,
        71,
        109,
        227,
        234
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Maria Daniela Costa Henrique",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 236,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        47,
        71,
        109,
        164,
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Adelino de Mello Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 235,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        47,
        71,
        109,
        172,
        202
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Tavares Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 229,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        46,
        71,
        79,
        82,
        92,
        109,
        104,
        158,
        252
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Deyvison Melo de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 228,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        46,
        71,
        79,
        82,
        92,
        109,
        104
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Josimar Alves de Almeida Junior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 227,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        46,
        71,
        109,
        175,
        205,
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Isaac de Morais Marinho dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 138,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        25,
        78,
        79,
        85,
        175,
        205,
        253,
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João B. Escorel de Albuquerque",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 142,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 1,
      "contractRoleName": "Project Manager",
      "projects_id": [
        25,
        78,
        71,
        79,
        82,
        92,
        104,
        85,
        175,
        205,
        253,
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Alan Ferreira dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 140,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        25,
        78,
        79,
        175,
        205,
        253,
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tiago Leite da Nóbrega",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 178,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        25,
        78,
        79,
        163,
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius Almeida Macedo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 292,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        25,
        78,
        71,
        82,
        92
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Calandreli Oliveira Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 320,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 179,
      "contractRoleName": "External",
      "projects_id": [
        71
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Guilherme Giohji Hoshino",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 321,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 179,
      "contractRoleName": "External",
      "projects_id": [
        71
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Laércio da Cruz Asano Júnior",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 322,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 179,
      "contractRoleName": "External",
      "projects_id": [
        71
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ericson da Fonseca",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 323,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 179,
      "contractRoleName": "External",
      "projects_id": [
        71
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Evelyn Tiaki Morishita",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 137,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        79,
        71,
        92,
        104,
        151,
        85,
        82,
        175,
        205,
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Recesso",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 13,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        71,
        104,
        151
      ],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "iOS"
      ],
      "nomeCompleto": "Pedro Henriques Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 346,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alice Kellen Andrade Pedrosa",
      "methodology": []
    },
    {
      "user_id": 355,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        79
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Patrick Herbeth Guimarães Azevedo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 356,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        79,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Catarina Ludmile Souza Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 18,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 1,
      "contractRoleName": "Project Manager",
      "projects_id": [
        25,
        78,
        83,
        100,
        115,
        124,
        152,
        153,
        164,
        187,
        193,
        194,
        229,
        239,
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Santos Navarro",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 367,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        100,
        115,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arkjoaquitonyo Eleoterio da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 102,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        17,
        100
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Brasileiro Campos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 28,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        82,
        100,
        124,
        152,
        176,
        231,
        195
      ],
      "softskills": [],
      "hardskill": [
        "MongoDB",
        "MongoDB",
        "iOS"
      ],
      "nomeCompleto": "Marcos D. de Almeida Leite",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 113,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        19,
        83
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ycaro Fernandes Amazonas Ratis",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 382,
      "bio": "Software Engineer",
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        79,
        175,
        205,
        258,
        270
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Batista Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 300,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        73,
        82,
        92,
        71
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Caroline Wanderley Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 400,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 1,
      "contractRoleName": "Project Manager",
      "projects_id": [
        104,
        71,
        79,
        178
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emanuel Dantas Filho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 293,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        124,
        152,
        153,
        194,
        72,
        80
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Aristótenes Vilar",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 31,
      "bio": "",
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        124
      ],
      "softskills": [],
      "hardskill": [
        "Web",
        "RESTful APIs",
        "Web",
        "RESTful APIs",
        "RESTful APIs",
        "Mobile",
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Leonardo Araújo Cartaxo da Costa",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 429,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Hyvo de Carvalho Andrade",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 430,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antonio Rodrigues Coutinho",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 17,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        124,
        152,
        194
      ],
      "softskills": [],
      "hardskill": [
        "MongoDB",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Anderson Alves de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 435,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        109,
        79,
        164,
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ewerton Paulo da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 351,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 3,
      "contractRoleName": "Senior",
      "projects_id": [
        83,
        115,
        85,
        164,
        129,
        138,
        192,
        260,
        265,
        106,
        133,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Catharine Quintans Bezerra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 183,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 4,
      "contractRoleName": "Middle",
      "projects_id": [
        99,
        103,
        124,
        115,
        164,
        187,
        193
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Victor Batista Camilo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 264,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rodolfo Moraes Martins",
      "methodology": []
    },
    {
      "user_id": 446,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        104,
        71,
        79,
        158,
        149,
        148,
        239,
        150,
        171,
        177,
        179,
        240,
        258,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Rafael Albuquerque Dutra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 289,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        61,
        90
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gervásio Costa Assis Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 340,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 1,
      "contractRoleID": 5,
      "contractRoleName": "Junior",
      "projects_id": [
        86,
        66,
        124
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bianca Layse Soares Furtado",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 133,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 15,
      "contractRoleID": 73,
      "contractRoleName": "Master",
      "projects_id": [
        94,
        48
      ],
      "softskills": [],
      "hardskill": [
        "Desktop",
        "Desktop",
        "Desktop",
        "Desktop",
        "Desktop",
        "Desktop",
        "Linux",
        "Desktop",
        "Desktop",
        "Linux",
        "RFID",
        "RFID",
        "MongoDB",
        "MongoDB"
      ],
      "nomeCompleto": "Marcos Rodrigues Guedes",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 134,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 15,
      "contractRoleID": 76,
      "contractRoleName": "Junior",
      "projects_id": [
        23
      ],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "RFID",
        "RFID",
        "IOT",
        "Mobile",
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Julio Andherson de Oliveira Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 135,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 15,
      "contractRoleID": 76,
      "contractRoleName": "Junior",
      "projects_id": [
        23
      ],
      "softskills": [],
      "hardskill": [
        "Desktop",
        "IOT",
        "RFID",
        "IOT",
        "RFID",
        "IOT",
        "RFID",
        "iOS",
        "iOS",
        "RESTful APIs",
        "iOS",
        "iOS",
        "RESTful APIs",
        "Linux",
        "Linux",
        "Linux",
        "Linux",
        "RFID",
        "RFID",
        "Spring Java",
        "Mobile",
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Igor Candeia França de Morais",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 30,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 28,
      "contractRoleID": 145,
      "contractRoleName": "Senior",
      "projects_id": [
        46,
        47,
        82
      ],
      "softskills": [],
      "hardskill": [
        "Web",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "iOS",
        "Android",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript"
      ],
      "nomeCompleto": "Anne Lorayne Gerônimo Silva Augusto Moreira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 5,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 116,
      "contractRoleName": "Project Manager",
      "projects_id": [
        44,
        57,
        72,
        82,
        80,
        91,
        99,
        103,
        122,
        123,
        150,
        148,
        149,
        145,
        144,
        171,
        177,
        179,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        279
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniel Abella Cavalcante Mendonça de Souza",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 6,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 119,
      "contractRoleName": "Middle",
      "projects_id": [
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pamella Jessica Burity de Freitas",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 218,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 120,
      "contractRoleName": "Junior",
      "projects_id": [
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bueno Nepomuceno",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 219,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 119,
      "contractRoleName": "Middle",
      "projects_id": [
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Atylla Gomes dos Santos",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 220,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 120,
      "contractRoleName": "Junior",
      "projects_id": [
        44,
        80,
        91,
        103,
        123,
        150,
        215,
        177
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Márcio Ferreira Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 221,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 120,
      "contractRoleName": "Junior",
      "projects_id": [
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabrícia Martins Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 240,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 116,
      "contractRoleName": "Project Manager",
      "projects_id": [
        40,
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tiago Lima Massoni",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 243,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 23,
      "contractRoleID": 120,
      "contractRoleName": "Junior",
      "projects_id": [
        44
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Silvia Azevedo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 197,
      "bio": "Software Engineer at Virtus (João Pessoa)",
      "systemRole": "NULL",
      "contractId": 38,
      "contractRoleID": 199,
      "contractRoleName": "Middle",
      "projects_id": [
        36,
        89,
        113
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Odravison Amaral Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 366,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 38,
      "contractRoleID": 199,
      "contractRoleName": "Middle",
      "projects_id": [
        89,
        113,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eline Raquel de Macedo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 449,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 50,
      "contractRoleID": 272,
      "contractRoleName": "Project Manager",
      "projects_id": [
        128,
        170,
        238,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rony Marcolino de Andrade",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 399,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 50,
      "contractRoleID": 272,
      "contractRoleName": "Project Manager",
      "projects_id": [
        105,
        108,
        85,
        82,
        161,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tony Carlos Moura Cavalcanti",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 450,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 50,
      "contractRoleID": 272,
      "contractRoleName": "Project Manager",
      "projects_id": [
        165,
        173,
        136,
        197,
        198,
        206,
        226,
        263,
        241
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruna Maria Justino Cruz",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 114,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 60,
      "contractRoleName": "Middle",
      "projects_id": [
        19,
        83,
        172,
        202,
        265,
        192
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tales Satiro Soares",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 200,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 61,
      "contractRoleName": "Junior",
      "projects_id": [
        83,
        106,
        166,
        248,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ahemenson Fernandes Cavalcante",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 350,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 60,
      "contractRoleName": "Middle",
      "projects_id": [
        83
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dandara Dantas Navarro",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 358,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 61,
      "contractRoleName": "Junior",
      "projects_id": [
        98,
        232,
        116,
        185,
        253
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mendelssohn Dantas de Sá",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 270,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 60,
      "contractRoleName": "Middle",
      "projects_id": [
        82,
        98,
        116,
        102,
        185,
        106,
        166,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Géssica Keli da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 38,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 59,
      "contractRoleName": "Senior",
      "projects_id": [
        67,
        73,
        82,
        98,
        113,
        157,
        232,
        196
      ],
      "softskills": [],
      "hardskill": [
        "RESTful APIs",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Fagner Silva Martins",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 119,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 12,
      "contractRoleID": 61,
      "contractRoleName": "Junior",
      "projects_id": [
        65,
        82,
        98,
        113,
        114,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leonardo dos Santos Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 101,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 10,
      "contractRoleID": 51,
      "contractRoleName": "Junior",
      "projects_id": [
        17
      ],
      "softskills": [],
      "hardskill": [
        "Linux",
        "HTML",
        "Desktop",
        "HTML",
        "Desktop",
        "Desktop",
        "Lua"
      ],
      "nomeCompleto": "Arthur Silva Freire",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 104,
      "bio": "Designer",
      "systemRole": "DESIGNER",
      "contractId": 10,
      "contractRoleID": 51,
      "contractRoleName": "Junior",
      "projects_id": [
        69,
        94,
        139,
        176
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Xavier de Ataíde",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 141,
      "bio": "A Front End developer passionate about creating web applications.",
      "systemRole": "NULL",
      "contractId": 14,
      "contractRoleID": 70,
      "contractRoleName": "Middle",
      "projects_id": [
        25,
        78
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vandhuy Martins",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 42,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 14,
      "contractRoleID": 67,
      "contractRoleName": "Project Manager",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Java"
      ],
      "nomeCompleto": "Rafael de Souza Mendes",
      "methodology": []
    },
    {
      "user_id": 216,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 14,
      "contractRoleID": 71,
      "contractRoleName": "Junior",
      "projects_id": [
        25,
        78
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Miguel de Souza",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 190,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 14,
      "contractRoleID": 71,
      "contractRoleName": "Junior",
      "projects_id": [
        25
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Araújo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 35,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 25,
      "contractRoleID": 131,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Angular 2",
        "JavaScript",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "RESTful APIs",
        "Web",
        "Web"
      ],
      "nomeCompleto": "Italo Tavares de Moura",
      "methodology": []
    },
    {
      "user_id": 149,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 25,
      "contractRoleID": 131,
      "contractRoleName": "Middle",
      "projects_id": [
        26,
        42,
        47
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Erick John Fidelis Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 2,
      "bio": null,
      "systemRole": "DIRECTOR",
      "contractId": 25,
      "contractRoleID": 128,
      "contractRoleName": "Project Manager",
      "projects_id": [
        42,
        82,
        86,
        126,
        158
      ],
      "softskills": [],
      "hardskill": [
        "Spring Java",
        "Spring Java",
        "Spring Java"
      ],
      "nomeCompleto": "Franclis Galdino da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 217,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 25,
      "contractRoleID": 130,
      "contractRoleName": "Senior",
      "projects_id": [
        42,
        48
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fernando Felix do Nascimento Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 282,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 180,
      "contractRoleName": "Project Manager",
      "projects_id": [
        68,
        69,
        93,
        85,
        105,
        108,
        119,
        120,
        126,
        158,
        161,
        127,
        136,
        178,
        243,
        250,
        251,
        252,
        256,
        264
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Igor Henrique Ferreira Moreno da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 335,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        93,
        85,
        82,
        161,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "[Recesso Felipe Neiva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 336,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        93,
        114,
        85,
        82,
        161,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Newton Savio Souza Marques da Fonseca",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 368,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 181,
      "contractRoleName": "Master",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Batista Morais dos Santos",
      "methodology": []
    },
    {
      "user_id": 372,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        73,
        93,
        149,
        177,
        212,
        228
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Antônio da Silva Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 370,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        93,
        120,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sydeney Wagner Silva Araujo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 317,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        82,
        69,
        93,
        85,
        161,
        243,
        251
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Yago Luiz Monteiro Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 316,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        82,
        69,
        93,
        120,
        85,
        119,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luan da Silva Balbino",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 423,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 35,
      "contractRoleID": 184,
      "contractRoleName": "Junior",
      "projects_id": [
        93,
        85,
        161,
        127,
        250
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Camila Carvalho da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 185,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabiane Paiva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 191,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        73
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Afonso Henrique Moreira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 242,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        80,
        123,
        150,
        212,
        211,
        215,
        214,
        216,
        213,
        284,
        279
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danilo Raniery Alves Coutinho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 246,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Taís dos Santos Nascimento",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 247,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        82,
        85,
        111,
        127,
        252
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emilio de Farias Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 71,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        67,
        73,
        82,
        97,
        101,
        137,
        182,
        203,
        280
      ],
      "softskills": [],
      "hardskill": [
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "Python",
        "Python",
        "Python",
        "Python",
        "Python",
        "JavaScript",
        "HTML",
        "RESTful APIs",
        "RESTful APIs",
        "RESTful APIs",
        "RESTful APIs",
        "iOS",
        "IOT",
        "iOS"
      ],
      "nomeCompleto": "Caio Fábio Marinho Barbosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 249,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 106,
      "contractRoleName": "Middle",
      "projects_id": [
        38
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fernando de Oliveira Ferreira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 239,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        38,
        75
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Matos de Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 281,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 103,
      "contractRoleName": "Project Manager",
      "projects_id": [
        61,
        73,
        82,
        90,
        97,
        101,
        137,
        149,
        123,
        182,
        203,
        213,
        280
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diogo de Almeida Vilar de Miranda",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 294,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        73
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Gilson Rosa",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 295,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 107,
      "contractRoleName": "Junior",
      "projects_id": [
        73
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo Bernardes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 9,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 105,
      "contractRoleName": "Senior",
      "projects_id": [
        40
      ],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Ruan Pierre de Oliveira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 161,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 105,
      "contractRoleName": "Senior",
      "projects_id": [
        73,
        82,
        113,
        114,
        155,
        195,
        208
      ],
      "softskills": [],
      "hardskill": [
        "JavaScript"
      ],
      "nomeCompleto": "Vladwoguer Marcelino de Souza Bezerra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 208,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 21,
      "contractRoleID": 104,
      "contractRoleName": "Master",
      "projects_id": [
        73
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Barbosa Araujo Ramos",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 115,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 24,
      "contractRoleID": 124,
      "contractRoleName": "Middle",
      "projects_id": [
        40,
        57,
        99,
        103
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Heitor J. de Andrade Lira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 187,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 24,
      "contractRoleID": 127,
      "contractRoleName": "External",
      "projects_id": [
        40
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Sampaio",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 188,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 24,
      "contractRoleID": 127,
      "contractRoleName": "External",
      "projects_id": [
        40
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniel Souza",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 251,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 24,
      "contractRoleID": 127,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Araújo",
      "methodology": []
    },
    {
      "user_id": 168,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 88,
      "contractRoleName": "Project Manager",
      "projects_id": [
        30,
        50,
        51,
        62,
        63,
        64,
        141,
        140,
        142,
        159,
        245,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Henrique César Florêncio",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 169,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        101,
        137,
        182,
        203,
        157
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jordan Ferreira Nunes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 175,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 88,
      "contractRoleName": "Project Manager",
      "projects_id": [
        29,
        30,
        50,
        51,
        142
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Augusto Queiroz de Macedo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 177,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 90,
      "contractRoleName": "Senior",
      "projects_id": [
        30,
        29,
        62,
        159,
        229
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Paul Monthaler",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 184,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 91,
      "contractRoleName": "Middle",
      "projects_id": [
        245,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Sena Lins Calda",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 34,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 91,
      "contractRoleName": "Middle",
      "projects_id": [
        29,
        64,
        159
      ],
      "softskills": [],
      "hardskill": [
        "RESTful APIs",
        "RESTful APIs",
        "Angular 2",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "JavaScript",
        "JavaScript"
      ],
      "nomeCompleto": "Giovani Cavalcante Barbosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 253,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Helder Ronyer Regis Alves",
      "methodology": []
    },
    {
      "user_id": 255,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tatiana Saturno da Silva",
      "methodology": []
    },
    {
      "user_id": 63,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 88,
      "contractRoleName": "Project Manager",
      "projects_id": [
        50,
        63,
        142,
        140,
        179,
        201
      ],
      "softskills": [],
      "hardskill": [
        "Lua",
        "IOT",
        "IOT",
        "IOT",
        "Lua",
        "Lua",
        "IOT",
        "IOT",
        "Lua",
        "Lua",
        "IOT",
        "IOT",
        "IOT",
        "Lua",
        "Java",
        "Java"
      ],
      "nomeCompleto": "Diego E. Ferreira dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 257,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 88,
      "contractRoleName": "Project Manager",
      "projects_id": [
        228,
        266
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Lima Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 263,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        50,
        64,
        63,
        140,
        142,
        179,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ítalo Renan de Macedo Lins",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 296,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Myllenno Silva Monteiro Lima",
      "methodology": []
    },
    {
      "user_id": 297,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        63,
        140,
        141,
        142
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dimitre Andrew Aires de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 298,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Caio Batista Oliveira",
      "methodology": []
    },
    {
      "user_id": 73,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        64,
        62,
        140,
        249,
        245
      ],
      "softskills": [],
      "hardskill": [
        "JavaScript",
        "JavaScript",
        "Python",
        "Python",
        "Python",
        "Python",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Rafael Oliveira Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 222,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 88,
      "contractRoleName": "Project Manager",
      "projects_id": [
        75,
        102,
        51,
        110,
        111,
        112,
        141,
        140,
        142,
        159,
        170,
        235,
        238,
        245,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Normando Carvalho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 405,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Washington Bruno",
      "methodology": []
    },
    {
      "user_id": 406,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 90,
      "contractRoleName": "Senior",
      "projects_id": [
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Williams Cavalcanti de Arruda",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 407,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniella Lima de Carvalho",
      "methodology": []
    },
    {
      "user_id": 408,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luiz Alberto Fonseca",
      "methodology": []
    },
    {
      "user_id": 409,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 90,
      "contractRoleName": "Senior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Igor Ramos de Luna",
      "methodology": []
    },
    {
      "user_id": 420,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        111,
        235,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diogo Florencio de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 421,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 90,
      "contractRoleName": "Senior",
      "projects_id": [
        111,
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jonatah Romero Barbosa Braz",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 422,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 91,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Joeumar Crysthofferson Cordeiro de Souza",
      "methodology": []
    },
    {
      "user_id": 425,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 92,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82,
        145,
        144,
        149,
        123,
        148,
        150,
        171,
        179,
        177,
        214,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Uélio Dornelas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 369,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 18,
      "contractRoleID": 90,
      "contractRoleName": "Senior",
      "projects_id": [
        85,
        82,
        99,
        103
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Elyfran Fernandes Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 180,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 237,
      "contractRoleName": "Project Manager",
      "projects_id": [
        35,
        82,
        114,
        155,
        207,
        208,
        209,
        210,
        195,
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Walter Onofre Guerra Filho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 299,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 242,
      "contractRoleName": "Junior",
      "projects_id": [
        75
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Miranda",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 389,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 240,
      "contractRoleName": "Senior",
      "projects_id": [
        114,
        155,
        195,
        207
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabiano de Miranda Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 392,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 240,
      "contractRoleName": "Senior",
      "projects_id": [
        114,
        93,
        155,
        195,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fernando Abrantes Vita",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 393,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 240,
      "contractRoleName": "Senior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Aislan Monteiro de Lima",
      "methodology": []
    },
    {
      "user_id": 390,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 239,
      "contractRoleName": "Specialist",
      "projects_id": [
        114,
        155,
        196,
        207
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Luís do Nascimento",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 424,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 256,
      "contractRoleName": "Stakeholder",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Johannes Ferreira",
      "methodology": []
    },
    {
      "user_id": 434,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 256,
      "contractRoleName": "Stakeholder",
      "projects_id": [
        114,
        155
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Denis Fernandes",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 439,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 242,
      "contractRoleName": "Junior",
      "projects_id": [
        114,
        155,
        195,
        207
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Anderson Manoel de Azevedo Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 136,
      "bio": "PU5EPX",
      "systemRole": "NULL",
      "contractId": 45,
      "contractRoleID": 238,
      "contractRoleName": "Master",
      "projects_id": [
        35,
        114,
        155,
        176
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "EPx",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 365,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [
        94,
        139,
        176,
        231,
        268
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Muniz Felix",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 146,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 253,
      "contractRoleName": "Middle",
      "projects_id": [
        22,
        48,
        60,
        68,
        94
      ],
      "softskills": [],
      "hardskill": [
        "Web"
      ],
      "nomeCompleto": "Bruno Nascimento de Figueiredo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 414,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82,
        126,
        158
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "William Balbino Cunha Barbosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 415,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 252,
      "contractRoleName": "Senior",
      "projects_id": [
        120,
        82,
        85,
        119,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jonatas Rodrigo Kinas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 398,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 253,
      "contractRoleName": "Middle",
      "projects_id": [
        105,
        108,
        85,
        82,
        120,
        243,
        251
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Moreno Matos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 416,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 249,
      "contractRoleName": "Project Manager",
      "projects_id": [
        120,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Montiê Alves Vitorino",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 248,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 249,
      "contractRoleName": "Project Manager",
      "projects_id": [
        45,
        120,
        85,
        125
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mauricio Beltrão Rossiter Correa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 417,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [
        120
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ruan Gomes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 318,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Henrique Oliveira Toscano Ximenes",
      "methodology": []
    },
    {
      "user_id": 319,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jerônimo Lucena de Lima Neto",
      "methodology": []
    },
    {
      "user_id": 418,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 254,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wellington Lima",
      "methodology": []
    },
    {
      "user_id": 426,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 257,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marina Dioto",
      "methodology": []
    },
    {
      "user_id": 427,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 257,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Roberto Rodrigues Malveira",
      "methodology": []
    },
    {
      "user_id": 428,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 257,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Inês Moreira Vilanova Pinheiro",
      "methodology": []
    },
    {
      "user_id": 451,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 47,
      "contractRoleID": 257,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Leonardo Mendes Melo Pimentel",
      "methodology": []
    },
    {
      "user_id": 437,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 48,
      "contractRoleID": 263,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        85,
        126,
        158
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Rafael Araújo Vasconcelos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 438,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 48,
      "contractRoleID": 263,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        85,
        124,
        152,
        161,
        187,
        193
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kalber Roberto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 150,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 17,
      "contractRoleID": 85,
      "contractRoleName": "Middle",
      "projects_id": [
        26
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriella Mayara Tavares Alves",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 151,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 17,
      "contractRoleID": 86,
      "contractRoleName": "Junior",
      "projects_id": [
        26
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jorge Luis de Lima Feitosa",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 153,
      "bio": "Software Developer",
      "systemRole": "NULL",
      "contractId": 17,
      "contractRoleID": 86,
      "contractRoleName": "Junior",
      "projects_id": [
        26
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Thiago de Macedo Medeiros",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 154,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 17,
      "contractRoleID": 86,
      "contractRoleName": "Junior",
      "projects_id": [
        26,
        94,
        105,
        108,
        190,
        265,
        138
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Carlos Artur Nascimento Vieira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 205,
      "bio": "www.felipemuniz.net",
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 172,
      "contractRoleName": "Junior",
      "projects_id": [
        94,
        48,
        105,
        108,
        139,
        192,
        265,
        129
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Muniz Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 274,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 168,
      "contractRoleName": "Project Manager",
      "projects_id": [
        65,
        61
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo Portela Sousa",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 288,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 172,
      "contractRoleName": "Junior",
      "projects_id": [
        61,
        82,
        90
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diana Marcela da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 301,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 170,
      "contractRoleName": "Senior",
      "projects_id": [
        61,
        90
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Henrique de Pontes Ribeiro",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 302,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 170,
      "contractRoleName": "Senior",
      "projects_id": [
        61
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eduardo Jerônimo de Moura Júnior",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 303,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 172,
      "contractRoleName": "Junior",
      "projects_id": [
        61,
        90,
        118,
        169,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Elyervesson de Souza Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 84,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 33,
      "contractRoleID": 169,
      "contractRoleName": "Master",
      "projects_id": [
        82,
        90
      ],
      "softskills": [],
      "hardskill": [
        "Maven Java"
      ],
      "nomeCompleto": "Jota Freitas Junior",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 29,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 234,
      "contractRoleName": "Senior",
      "projects_id": [
        85,
        82,
        185,
        116,
        242,
        253,
        106,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gilmar J. Ramalho Batista",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 401,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 236,
      "contractRoleName": "Junior",
      "projects_id": [
        106,
        244,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Augusto Bezerra de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 402,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 232,
      "contractRoleName": "Master",
      "projects_id": [
        106,
        85,
        246,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus de Oliveira Barbosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 441,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 265,
      "contractRoleName": "External",
      "projects_id": [
        106
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alef Oliveira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 442,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 265,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Lúcia de Souza Melo",
      "methodology": []
    },
    {
      "user_id": 445,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 44,
      "contractRoleID": 236,
      "contractRoleName": "Junior",
      "projects_id": [
        106,
        85,
        166,
        247,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emilayne Feitosa Corlett",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 195,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 20,
      "contractRoleID": 102,
      "contractRoleName": "Junior",
      "projects_id": [
        36,
        66
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Luender de Lima Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 196,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 20,
      "contractRoleID": 100,
      "contractRoleName": "Senior",
      "projects_id": [
        36,
        66
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "George Alcantara Pereira de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 328,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 20,
      "contractRoleID": 102,
      "contractRoleName": "Junior",
      "projects_id": [
        66
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius Cezar de Queiroz",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 452,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 51,
      "contractRoleID": 282,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raiff Ramalho de Mello",
      "methodology": []
    },
    {
      "user_id": 453,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 51,
      "contractRoleID": 283,
      "contractRoleName": "Junior",
      "projects_id": [
        189,
        265,
        138,
        129
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gilmar Bezerra de Freitas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 130,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 32,
      "contractRoleName": "Project Manager",
      "projects_id": [
        22,
        48,
        35,
        170,
        120,
        119,
        238
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gutemberg Gonçalves dos Santos Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 143,
      "bio": "Software Test Analyst full at Virtus - Nucleus of Research, Development and Innovation in Information Technology of the Center of Electrical and Computer Engineering of the UFCG. Solid experience in the area of software testing and quality, working with test planning, execution of multiplatform manual tests, programming of automated tests with Selenium Webdriver, Protractor end-to-end test framework for AngularJS, programming of automated Web Services tests Rest Api in NodeJs, Programming of automated tests for desktop applications (C # with TestStack.White), experience in agile methodologies.",
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        22,
        48,
        60,
        69,
        68,
        82,
        94,
        105
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Caitano Junior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 145,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        22,
        48,
        60,
        69,
        68,
        105,
        131,
        162,
        179,
        201
      ],
      "softskills": [],
      "hardskill": [
        "iOS",
        "RESTful APIs",
        "iOS",
        "RESTful APIs",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "JavaScript",
        "JSON",
        "JavaScript",
        "JSON",
        "IOT",
        "IOT",
        "IOT",
        "IOT",
        "JavaScript",
        "IOT",
        "JavaScript"
      ],
      "nomeCompleto": "Franklin Wesley Sousa Bastos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 214,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 35,
      "contractRoleName": "Middle",
      "projects_id": [
        48,
        22,
        60,
        69,
        68,
        131,
        162,
        171,
        179,
        214
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabrício G. Lelis de Melo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 283,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 35,
      "contractRoleName": "Middle",
      "projects_id": [
        130,
        106,
        166,
        244,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Golzio Navarro Winkeler",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 285,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        69,
        93
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sarah Jéssika da Pontes Albuquerque",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 286,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        69
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Sales Lins Rodrigues",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 287,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 34,
      "contractRoleName": "Senior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luciana Veloso",
      "methodology": []
    },
    {
      "user_id": 339,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82,
        161
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Richard Senko",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 349,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        94,
        48,
        105,
        108
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Merencio Primo Passos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 204,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 35,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Lindemberg Lima Vilar",
      "methodology": []
    },
    {
      "user_id": 215,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        48
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gilles Medeiros Henriques",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 394,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 7,
      "contractRoleID": 36,
      "contractRoleName": "Junior",
      "projects_id": [
        68,
        69,
        82,
        85,
        172,
        202
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Paula Tavares de Melo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 375,
      "bio": "Senior Developer",
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 246,
      "contractRoleName": "Senior",
      "projects_id": [
        102
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vanderlan Gomes da Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 404,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [
        102,
        116,
        185,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Nícolas da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 396,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [
        102,
        116,
        185
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ramon Salém Sartori Mesquita",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 385,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 243,
      "contractRoleName": "Project Manager",
      "projects_id": [
        102,
        116
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Rogerio Salvador",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 413,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gerson Sales Araújo de Freitas Júnior",
      "methodology": []
    },
    {
      "user_id": 431,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [
        116,
        185
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emerson Davi Alexandre dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 432,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Wilker Moura Barbosa",
      "methodology": []
    },
    {
      "user_id": 433,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 247,
      "contractRoleName": "Middle",
      "projects_id": [
        116,
        185
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ivan Aguiar de Almeida",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 443,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sidney Pimentel Eleutério",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 210,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 46,
      "contractRoleID": 248,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antonio Alexandre Moura Costa",
      "methodology": []
    },
    {
      "user_id": 237,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 174,
      "contractRoleName": "Master",
      "projects_id": [
        47,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emiliano José Silva de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 207,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 173,
      "contractRoleName": "Project Manager",
      "projects_id": [
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mirko Barbosa Perkusich",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 306,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 174,
      "contractRoleName": "Master",
      "projects_id": [
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thamires Alves Neves de Oliveira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 324,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 177,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        72,
        80,
        123,
        171,
        148,
        215,
        177
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Maciel Pires",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 309,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 177,
      "contractRoleName": "Junior",
      "projects_id": [
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Antunes Gonçalves Dias Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 198,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 174,
      "contractRoleName": "Master",
      "projects_id": [
        39,
        14,
        37,
        53,
        54,
        55,
        82,
        84,
        135,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wesley Brenno Rodrigues Herculano",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 311,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 174,
      "contractRoleName": "Master",
      "projects_id": [
        82,
        265,
        192,
        138,
        129
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Singrid Camelo Palmeira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 327,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 174,
      "contractRoleName": "Master",
      "projects_id": [
        55,
        53,
        84,
        85,
        218,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vitruvio Soares Martins de Alencar",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 363,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 177,
      "contractRoleName": "Junior",
      "projects_id": [
        82,
        85,
        99,
        103,
        123,
        72,
        80,
        145,
        144,
        149,
        148,
        150,
        171,
        179,
        177,
        214,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ermeson da Silva Nóbrega",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 411,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 34,
      "contractRoleID": 177,
      "contractRoleName": "Junior",
      "projects_id": [
        72,
        80,
        85,
        82,
        123,
        145,
        144,
        149,
        148,
        150,
        171,
        179,
        177,
        214,
        239,
        240,
        258,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Valdevino Fernandes Favaro",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 380,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 42,
      "contractRoleID": 220,
      "contractRoleName": "Master",
      "projects_id": [
        102
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Reinaldo Gomes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 376,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 42,
      "contractRoleID": 224,
      "contractRoleName": "Junior",
      "projects_id": [
        102
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Yngrid Keila Silva Cabral",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 85,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 38,
      "contractRoleName": "Master",
      "projects_id": [
        14,
        37,
        39,
        54,
        55,
        53,
        84,
        135,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [
        "Android"
      ],
      "nomeCompleto": "Bruno Miranda Brandão",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 86,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Francisco Ioneiton da Silva",
      "methodology": []
    },
    {
      "user_id": 89,
      "bio": "Inhale the illusion. Exhale reality.",
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 38,
      "contractRoleName": "Master",
      "projects_id": [
        14,
        39,
        37,
        53,
        54,
        55,
        84,
        135,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [
        "Java",
        "Java",
        "Node.js",
        "Mobile",
        "Web",
        "Mobile"
      ],
      "nomeCompleto": "Samir Trajano Feitosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 129,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Jordão Ezequiel Serafim de Araújo",
      "methodology": []
    },
    {
      "user_id": 223,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [
        39,
        14,
        37,
        53,
        54,
        55,
        84,
        135,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "André Yuri Alves Soares de Gois",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 258,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leonardo Avelino de Jesus Silva",
      "methodology": []
    },
    {
      "user_id": 170,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [
        171,
        216,
        177
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jeremias Dinamerico Serafim de Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 315,
      "bio": "",
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [
        91
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Oliveira da Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 330,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [
        84,
        135,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adriano Martins",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 331,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [
        84,
        53,
        135,
        163,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raul Simões",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 332,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [
        84,
        135,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alex Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 338,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 39,
      "contractRoleName": "Senior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emanuel Batista da Silva Filho",
      "methodology": []
    },
    {
      "user_id": 373,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [
        84,
        135,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Cristiano Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 384,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [
        84,
        135,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Artur",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 397,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [
        84,
        54,
        53,
        39,
        14,
        135,
        163,
        239,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Romildo da Silva Freitas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 410,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 41,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "César Ferreira Tavares Neto",
      "methodology": []
    },
    {
      "user_id": 419,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 8,
      "contractRoleID": 212,
      "contractRoleName": "External",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mateus Nassar",
      "methodology": []
    },
    {
      "user_id": 266,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 32,
      "contractRoleID": 166,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wallison Fernando da Silva",
      "methodology": []
    },
    {
      "user_id": 267,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 32,
      "contractRoleID": 167,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alexandre Medeiros",
      "methodology": []
    },
    {
      "user_id": 268,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 32,
      "contractRoleID": 166,
      "contractRoleName": "Middle",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Andson F. Pontes Belo",
      "methodology": []
    },
    {
      "user_id": 313,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 32,
      "contractRoleID": 167,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Trigueiro Rocha Neto",
      "methodology": []
    },
    {
      "user_id": 391,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 22,
      "contractRoleID": 108,
      "contractRoleName": "Project Manager",
      "projects_id": [
        35,
        114,
        69,
        68,
        149,
        155,
        170,
        196,
        207,
        238
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leandro José Ventura Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 333,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 37,
      "contractRoleID": 194,
      "contractRoleName": "Junior",
      "projects_id": [
        86,
        158,
        127,
        250
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Cristal Tshishimbi Mazamba",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "KANBAN"
      ]
    },
    {
      "user_id": 48,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 37,
      "contractRoleID": 193,
      "contractRoleName": "Middle",
      "projects_id": [
        86,
        171,
        213
      ],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT"
      ],
      "nomeCompleto": "Felipe Eduardo Farias Belo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 383,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 37,
      "contractRoleID": 194,
      "contractRoleName": "Junior",
      "projects_id": [
        86,
        126
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo Santos Brito",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 440,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 37,
      "contractRoleID": 264,
      "contractRoleName": "Researcher",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ademar França de Sousa Neto",
      "methodology": []
    },
    {
      "user_id": 271,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 79,
      "contractRoleName": "Senior",
      "projects_id": [
        59,
        88,
        121,
        135,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Berg Elisson",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 174,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 80,
      "contractRoleName": "Middle",
      "projects_id": [
        59,
        88,
        121,
        115,
        164,
        181,
        200,
        282
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Renan Willamy Bezerra Barbosa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 342,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 255,
      "contractRoleName": "Software Architect",
      "projects_id": [
        88
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leonardo Salgado",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 343,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 201,
      "contractRoleName": "SST Project Manager",
      "projects_id": [
        88
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Domingues",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 344,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 81,
      "contractRoleName": "Junior",
      "projects_id": [
        88,
        121
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leandro Biajante",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 345,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 201,
      "contractRoleName": "SST Project Manager",
      "projects_id": [
        88
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alexandre Crivelente",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 387,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 81,
      "contractRoleName": "Junior",
      "projects_id": [
        88,
        121,
        115,
        153,
        155,
        196,
        208
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel de Brito Lemos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 388,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 81,
      "contractRoleName": "Junior",
      "projects_id": [
        88,
        121
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Suzane Vianna do Nascimento",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 403,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 16,
      "contractRoleID": 81,
      "contractRoleName": "Junior",
      "projects_id": [
        88,
        121
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Grisotto e Souza",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 273,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 26,
      "contractRoleID": 137,
      "contractRoleName": "Junior",
      "projects_id": [
        45
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Beatriz A. Monreal",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 176,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 26,
      "contractRoleID": 137,
      "contractRoleName": "Junior",
      "projects_id": [
        75
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Aparecido Silvano de Albuquerque",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 33,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 26,
      "contractRoleID": 136,
      "contractRoleName": "Middle",
      "projects_id": [
        45,
        125,
        181,
        200,
        282
      ],
      "softskills": [],
      "hardskill": [
        "Android",
        "Android",
        "CouchDB",
        "CouchDB",
        "JavaScript",
        "JavaScript",
        "iOS",
        "Android",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript"
      ],
      "nomeCompleto": "Mailson Nascimento Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 173,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 19,
      "contractRoleID": 93,
      "contractRoleName": "Project Manager",
      "projects_id": [
        32,
        70,
        131,
        154,
        165,
        137,
        182,
        229,
        231,
        254,
        191
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danilo Freire de Souza Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 354,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 40,
      "contractRoleID": 210,
      "contractRoleName": "Middle",
      "projects_id": [
        97,
        101,
        137,
        182,
        203,
        280
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antonio Lúcio Carvalho de Queiroz",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 361,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 40,
      "contractRoleID": 207,
      "contractRoleName": "Project Manager",
      "projects_id": [
        97
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Regina Caixeta",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 386,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 40,
      "contractRoleID": 207,
      "contractRoleName": "Project Manager",
      "projects_id": [
        101
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leandro Balby Marinho",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 305,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 31,
      "contractRoleID": 162,
      "contractRoleName": "Junior",
      "projects_id": [
        57,
        99,
        103,
        123,
        171,
        150,
        148,
        217,
        212,
        211,
        215,
        214,
        216,
        213,
        177,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Martins de Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 325,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 31,
      "contractRoleID": 162,
      "contractRoleName": "Junior",
      "projects_id": [
        91
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Davi Trajano Leal",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 359,
      "bio": "Software Development",
      "systemRole": "NULL",
      "contractId": 31,
      "contractRoleID": 162,
      "contractRoleName": "Junior",
      "projects_id": [
        99,
        91,
        103,
        123,
        149,
        145,
        144,
        212,
        177,
        218,
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Magno Miranda Dantas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 360,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 31,
      "contractRoleID": 161,
      "contractRoleName": "Middle",
      "projects_id": [
        99,
        103
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wemerson Thayne Vital Porto",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 172,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 62,
      "contractRoleName": "Project Manager",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rohit Gheyi",
      "methodology": []
    },
    {
      "user_id": 46,
      "bio": "",
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 63,
      "contractRoleName": "Master",
      "projects_id": [
        72,
        80,
        148,
        155,
        195,
        196,
        209,
        210,
        208,
        207
      ],
      "softskills": [],
      "hardskill": [
        "Android"
      ],
      "nomeCompleto": "[Day off Paulo de Tarso",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 47,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        150,
        268
      ],
      "softskills": [],
      "hardskill": [
        "RESTful APIs",
        "Android"
      ],
      "nomeCompleto": "Jailson da Silva Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 69,
      "bio": null,
      "systemRole": "DESIGNER",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "Android",
        "iOS",
        "iOS",
        "Android",
        "iOS",
        "Android",
        "Android",
        "Android",
        "Android",
        "iOS"
      ],
      "nomeCompleto": "Victor Santiago Correia de Araújo",
      "methodology": []
    },
    {
      "user_id": 308,
      "bio": "Engineer Software Junior at Virtus.",
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        80,
        144,
        145,
        213,
        177,
        216,
        218
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius José da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 326,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        80,
        123,
        149,
        177,
        217,
        235
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pablo Victor Félix dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 381,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        179,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Alberto Alves Bezerra",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 395,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        72,
        171,
        215,
        150
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luciano Augusto Albuquerque Reul",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 436,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 66,
      "contractRoleName": "Junior",
      "projects_id": [
        254
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danyllo Wagner Albuquerque",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 448,
      "bio": null,
      "systemRole": "NULL",
      "contractId": 13,
      "contractRoleID": 64,
      "contractRoleName": "Senior",
      "projects_id": [
        123,
        149,
        148,
        211,
        177,
        279
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Antônio Nóbrega da Costa Júnior",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 1,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Asus Services",
      "methodology": []
    },
    {
      "user_id": 4,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raphael Mendoça da Nóbrega",
      "methodology": []
    },
    {
      "user_id": 10,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "Lua",
        "IoT",
        "Lua",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "Java",
        "IOT",
        "JavaScript",
        "Java",
        "IOT",
        "JavaScript",
        "JavaScript",
        "Web",
        "Java",
        "JavaScript",
        "PostgreSQL",
        "JavaScript",
        "Java",
        "JavaScript",
        "Web",
        "Java",
        "JavaScript",
        "PostgreSQL"
      ],
      "nomeCompleto": "Fernando Mateus Oliveira",
      "methodology": []
    },
    {
      "user_id": 12,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT",
        "IoT"
      ],
      "nomeCompleto": "Zeus Cunha Barros",
      "methodology": []
    },
    {
      "user_id": 15,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vicente Ramos da Silva Neto",
      "methodology": []
    },
    {
      "user_id": 19,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adriano Maringolo Gomes",
      "methodology": []
    },
    {
      "user_id": 20,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alexandre Bolzon",
      "methodology": []
    },
    {
      "user_id": 21,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Allyn Lima Pierre",
      "methodology": []
    },
    {
      "user_id": 22,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thaís Ferreira de Oliveira",
      "methodology": []
    },
    {
      "user_id": 23,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fabiana Ferreira Peres",
      "methodology": []
    },
    {
      "user_id": 24,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Android",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "RESTful APIs",
        "IOT",
        "RESTful APIs",
        "Python",
        "Angular 2",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "JavaScript",
        "Angular 2",
        "JavaScript",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Joeffison Silvério de Andrade",
      "methodology": []
    },
    {
      "user_id": 32,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "Web",
        "Web",
        "Web"
      ],
      "nomeCompleto": "Leonardo Rodrigues da Costa",
      "methodology": []
    },
    {
      "user_id": 37,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Natã Venâncio Melo",
      "methodology": []
    },
    {
      "user_id": 39,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "Mobile",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "Mobile"
      ],
      "nomeCompleto": "Werton Vinícius Guimarães Gomes",
      "methodology": []
    },
    {
      "user_id": 40,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João V. Silvestre Lucas",
      "methodology": []
    },
    {
      "user_id": 41,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kawe R. Borgydark de Oliveira",
      "methodology": []
    },
    {
      "user_id": 43,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "César A. Nascimento Vieira",
      "methodology": []
    },
    {
      "user_id": 49,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "iOS",
        "iOS",
        "iOS",
        "iOS",
        "iOS"
      ],
      "nomeCompleto": "Bruno Fábio de Farias Paiva",
      "methodology": []
    },
    {
      "user_id": 51,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eder Coutinho",
      "methodology": []
    },
    {
      "user_id": 52,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raphael Calasso",
      "methodology": []
    },
    {
      "user_id": 58,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Barros Pontes",
      "methodology": []
    },
    {
      "user_id": 64,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Randerson Oliveira Melville Rebouças",
      "methodology": []
    },
    {
      "user_id": 66,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "IOT",
        "IOT",
        "IOT",
        "IOT",
        "Lua",
        "Lua"
      ],
      "nomeCompleto": "Lucas Medeiros Cavalcante",
      "methodology": []
    },
    {
      "user_id": 70,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Manuela Barreto Lopes de Andrade",
      "methodology": []
    },
    {
      "user_id": 72,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Pereira Cavalcanti",
      "methodology": []
    },
    {
      "user_id": 75,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ronaldo J. Pontes Regis Filho",
      "methodology": []
    },
    {
      "user_id": 87,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile"
      ],
      "nomeCompleto": "Guilherme Galvão Santos Baptista",
      "methodology": []
    },
    {
      "user_id": 88,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Mobile"
      ],
      "nomeCompleto": "Renan Diniz de Almeida",
      "methodology": []
    },
    {
      "user_id": 106,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Web",
        "Spring Java",
        "RESTful APIs",
        "Web",
        "Spring Java"
      ],
      "nomeCompleto": "Glauco Pimentel Gomes",
      "methodology": []
    },
    {
      "user_id": 108,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jose Franco Neto",
      "methodology": []
    },
    {
      "user_id": 109,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Bucardi",
      "methodology": []
    },
    {
      "user_id": 110,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo Diniz Lima",
      "methodology": []
    },
    {
      "user_id": 111,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "RESTful APIs",
        "RESTful APIs",
        "RESTful APIs",
        "RESTful APIs",
        "RESTful APIs",
        "JavaScript",
        "JavaScript",
        "JavaScript",
        "JavaScript"
      ],
      "nomeCompleto": "Marco Antônio Cavalcante Rosner",
      "methodology": []
    },
    {
      "user_id": 112,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sérgio Ardiano Oliveira Santos",
      "methodology": []
    },
    {
      "user_id": 116,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Robson Júnior da Silva Diniz",
      "methodology": []
    },
    {
      "user_id": 117,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Filipe Henrique Benjamim de Arruda",
      "methodology": []
    },
    {
      "user_id": 118,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Lacerda Querino de Albuquerque",
      "methodology": []
    },
    {
      "user_id": 120,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Theo Moura",
      "methodology": []
    },
    {
      "user_id": 121,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Cassio A. Góis Espindola",
      "methodology": []
    },
    {
      "user_id": 122,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinícius Cézar de Queiroz",
      "methodology": []
    },
    {
      "user_id": 123,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Singrid Camelo Palmeira",
      "methodology": []
    },
    {
      "user_id": 124,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Hyvo de Carvalho Andrade",
      "methodology": []
    },
    {
      "user_id": 125,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hingo Nikolas dos Santos",
      "methodology": []
    },
    {
      "user_id": 126,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dirceu de Medeiros Teixeira",
      "methodology": []
    },
    {
      "user_id": 139,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Turmalina",
      "methodology": []
    },
    {
      "user_id": 147,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [
        "Mobile",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web",
        "Web"
      ],
      "nomeCompleto": "Marcus Oliveira",
      "methodology": []
    },
    {
      "user_id": 156,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Julia de Paula",
      "methodology": []
    },
    {
      "user_id": 157,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcio Nunes",
      "methodology": []
    },
    {
      "user_id": 158,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Alves",
      "methodology": []
    },
    {
      "user_id": 159,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tamy Miura",
      "methodology": []
    },
    {
      "user_id": 160,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Elias Silverio",
      "methodology": []
    },
    {
      "user_id": 162,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Erick Melo",
      "methodology": []
    },
    {
      "user_id": 163,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rodrigo Mourão",
      "methodology": []
    },
    {
      "user_id": 164,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Saulo Soares de Toledo",
      "methodology": []
    },
    {
      "user_id": 166,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Caynan Sousa",
      "methodology": []
    },
    {
      "user_id": 167,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Gildo de Araújo Júnior",
      "methodology": []
    },
    {
      "user_id": 179,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tiago Santos",
      "methodology": []
    },
    {
      "user_id": 182,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Isaque Sales Domingos Fontinele",
      "methodology": []
    },
    {
      "user_id": 186,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Afonso Henrique Vilela",
      "methodology": []
    },
    {
      "user_id": 189,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniel Bezerra",
      "methodology": []
    },
    {
      "user_id": 192,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Larissa Narjara Queiroz de Medeiros",
      "methodology": []
    },
    {
      "user_id": 199,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ittalo Pessoa",
      "methodology": []
    },
    {
      "user_id": 201,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alexandre Ribeiro Araujo",
      "methodology": []
    },
    {
      "user_id": 203,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Luna Ribeiro",
      "methodology": []
    },
    {
      "user_id": 209,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        113,
        119,
        71,
        124,
        121,
        126,
        107,
        137,
        125,
        131
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Renata Mendonça Saraiva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 212,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Túlio Lacerda",
      "methodology": []
    },
    {
      "user_id": 213,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Sampaio",
      "methodology": []
    },
    {
      "user_id": 224,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luan de Luna Santos",
      "methodology": []
    },
    {
      "user_id": 230,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Henrique do Nascimento Cunha",
      "methodology": []
    },
    {
      "user_id": 231,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diana Marcela da Silva",
      "methodology": []
    },
    {
      "user_id": 232,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gervásio Costa Assis Júnior",
      "methodology": []
    },
    {
      "user_id": 233,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Elyervesson de Souza Pereira",
      "methodology": []
    },
    {
      "user_id": 238,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        75
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Nathan Martins Barreto",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 245,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinícius de Castro Retamero Siqueira",
      "methodology": []
    },
    {
      "user_id": 252,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        178,
        179
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ednaldo Dilorenzo de Souza Filho",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 254,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Breno Lacerda de Alustau Paiva",
      "methodology": []
    },
    {
      "user_id": 256,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danielle Tonhai",
      "methodology": []
    },
    {
      "user_id": 259,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Walter Inácio da Silva Filho",
      "methodology": []
    },
    {
      "user_id": 265,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        190,
        265,
        138,
        260
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Daniel Lucena Pires",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 272,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Eduardo Silva Alencar",
      "methodology": []
    },
    {
      "user_id": 276,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Angelina Sthephanny da Silva Sales",
      "methodology": []
    },
    {
      "user_id": 284,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Elvys Raposo Pontes",
      "methodology": []
    },
    {
      "user_id": 304,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Frederico Prado",
      "methodology": []
    },
    {
      "user_id": 312,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinícius Simionato",
      "methodology": []
    },
    {
      "user_id": 314,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hemã Vidal Negreiros Bezerra",
      "methodology": []
    },
    {
      "user_id": 334,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur de Araújo Farias",
      "methodology": []
    },
    {
      "user_id": 337,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus J. Toledo Dini",
      "methodology": []
    },
    {
      "user_id": 341,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Horácio do Lago",
      "methodology": []
    },
    {
      "user_id": 347,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur de Araújo Farias",
      "methodology": []
    },
    {
      "user_id": 357,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        80,
        144,
        145,
        177,
        213,
        192,
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antonio Pedro de Abreu Neto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 377,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Edlane de Oliveira Gusmão Alves",
      "methodology": []
    },
    {
      "user_id": 378,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Uenio Vicente Rocha",
      "methodology": []
    },
    {
      "user_id": 379,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcela Tassyany Galdino Santos",
      "methodology": []
    },
    {
      "user_id": 277,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        213
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thyago Martins Leal Pê",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 278,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kadmiel Johnson Nascimento Camilo",
      "methodology": []
    },
    {
      "user_id": 279,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Aristóteles Júnior Oliveira da Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 280,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thais Cavalcanti Bandeira",
      "methodology": []
    },
    {
      "user_id": 329,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Clara Azevêdo Paschoal",
      "methodology": []
    },
    {
      "user_id": 454,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        79,
        152,
        187,
        193
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Aline Aparecida Trindade da Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 457,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        189,
        265,
        129
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Nascimento Cabral",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 458,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        93,
        85,
        82,
        161,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Willian de Souza Arruda",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 459,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        131,
        154
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro de Oliveira Lira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 460,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        132,
        134,
        222,
        257,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Antonio Agripino da Costa Filho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 461,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        132,
        134,
        183,
        184,
        188,
        219,
        269,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Andrade de Almeida",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 462,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        132
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Samuel Mendes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 463,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        132,
        184,
        220,
        272,
        274,
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 464,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Ferdinandy Silva Chagas",
      "methodology": []
    },
    {
      "user_id": 465,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        131,
        162,
        165,
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Aramis Sales Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 466,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        131,
        162,
        165,
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adauto Ferreira de Barros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 467,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        173,
        120,
        243,
        251,
        238
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Christian Charles Dias",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 468,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        155,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Candeia Medeiros Maia",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 469,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcus Marinho Bezerra",
      "methodology": []
    },
    {
      "user_id": 470,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        155,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruna Salles Moreira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 471,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        128,
        116,
        185
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas de Sousa Wanderley",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 472,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        114,
        155,
        196,
        208
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Galileu Mendes Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 473,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        265,
        192
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Denys André dos Santos Lins",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 474,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        5
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Uian Sol Gorgônio",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 475,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        158,
        127,
        250
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Johnny Menezes Honorato",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "KANBAN"
      ]
    },
    {
      "user_id": 476,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        117,
        118,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dênnis Dantas de Sousa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 477,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        159,
        106,
        249,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thales Henrique Dantas Souto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 478,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        140,
        142,
        249,
        258,
        270,
        280
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hugo Gabriel Bezerra da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 479,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        140,
        142,
        179,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Renato Ely Domingues Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 480,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        152,
        190,
        265,
        138
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adyson Lucas Bernardo Queiroga",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 481,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        137,
        101
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Karam Takieddine",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 482,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85,
        72,
        80,
        123,
        145,
        144,
        149,
        150,
        148,
        171,
        179,
        177,
        214,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Guthyelvis dos Santos Xavier",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 483,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        146,
        147,
        189,
        265,
        138
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Maciel Nunes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 484,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        147,
        85,
        136,
        166,
        106,
        247,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "John Lennon Moura Lima",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 485,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Paula de Lima Borges Silva",
      "methodology": []
    },
    {
      "user_id": 486,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        265,
        189
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kewyn Akshlley Phillipe da Silva",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 487,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        158,
        180,
        199,
        127
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gerson Pires Vieira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 488,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        147,
        136
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Vinnicius dos Santos Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 489,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        147,
        136,
        146
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eduardo Nascimento Pessoa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 490,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        146,
        125,
        181,
        200,
        282
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hércules Silva de Souza",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 491,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        85,
        166,
        106,
        248,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Waldemar Junior Dias Coimbra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 492,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        144,
        213,
        177,
        216,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ruan Carlos Alves da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 493,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bruno Bueno de Lira Nepomuceno",
      "methodology": []
    },
    {
      "user_id": 494,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        115,
        164,
        181,
        125,
        200,
        282
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Kalebe Silva Furtado",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 495,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        80,
        148,
        211,
        279
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Batista Nunes Bezerra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 496,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        165,
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Augusto José Silva Firmo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 497,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Breno Henrique Medeiros Neves",
      "methodology": []
    },
    {
      "user_id": 498,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        120,
        85,
        82,
        119,
        243,
        256
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danilo Pequeno",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 499,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        166,
        246
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Torres Rocha",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 500,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        72,
        80,
        123,
        145,
        144,
        149,
        148,
        150,
        171,
        179,
        177,
        216,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lourival Fragoso Bonfim",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 501,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        177,
        228
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Alves da Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 502,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        131,
        154,
        85,
        162,
        157,
        232
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mateus Soares Bezerra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 503,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        147,
        136,
        145,
        213,
        177,
        216,
        284,
        279
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Roberto Silva de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 504,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Túlio Henriques Costa",
      "methodology": []
    },
    {
      "user_id": 505,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Francisco Ferreira Gouveia Filho",
      "methodology": []
    },
    {
      "user_id": 506,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Joerverson Barbosa Santos",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 507,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139,
        176,
        230
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ronily Gomes Morais",
      "methodology": [
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 508,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139,
        105,
        176,
        231,
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Anderson de Lima Ramos",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 509,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139,
        176,
        230,
        196,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tiago de Souza Pereira Lima",
      "methodology": [
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 510,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luiz Henrique Estrela Lopes",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 511,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Julio César da Silva Gomes",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 512,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        161,
        127,
        264
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Herbert Lordão Cordeiro de Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 513,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        131,
        154
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emanuel Joívo Bezerra Martins",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 514,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eric Breno Barros dos Santos",
      "methodology": []
    },
    {
      "user_id": 412,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        215
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eric Dantas de Sousa",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 444,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raquel Ribeiro Albert",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 455,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        145
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raphael Brandão de Lima",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 456,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raphael Michael Brandão de Lima",
      "methodology": []
    },
    {
      "user_id": 515,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jonatas Augusto de Freitas",
      "methodology": []
    },
    {
      "user_id": 516,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        145,
        144,
        149,
        123,
        148,
        150,
        171,
        179,
        177,
        214,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vitor Damasceno",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 517,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139,
        176,
        230,
        258,
        270
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sérgio Ewerton Barbosa Correia",
      "methodology": [
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 518,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        116,
        185,
        242,
        253
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Faria Motta Madia",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 519,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        136,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Enos Francisco Teteo da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 520,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        156,
        82,
        180,
        199,
        149,
        148,
        239,
        150,
        171,
        177,
        258,
        179,
        240,
        216,
        241
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Géssica Monique da Silva Alves",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 521,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        155,
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Narcizo Thiago Maniçoba",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 522,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        117,
        118,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Andreza Raquel Monteiro de Queiroz",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 523,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        155
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Felipe Scheidt",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 524,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        106,
        166,
        247,
        262
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ted Igor Soares Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 525,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        227,
        234
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Beatriz Pâmela Martins Nunes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 526,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        139,
        176,
        231,
        268
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Juliana Dantas Ribeiro Viana de Medeiros",
      "methodology": [
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 527,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Everton de Oliveira Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 528,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        228,
        266
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jair Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 529,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        176,
        231
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vélmer Oliveira Odon",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 530,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227,
        234
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Órion Darshan Winter de Lima",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 531,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        161,
        200,
        253,
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Andresso da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 532,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        161,
        243,
        251
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Cleuves Cajé de Carvalho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 533,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        165
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "André Felipe de Albuquerque Rodrigues",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 534,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        165
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcos Fábio Pereira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 535,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        165
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dalton Cezane Gomes Valadares",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 536,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        155,
        196,
        207
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Allender Vilar de Alencar",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 537,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        148,
        217,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Airton Felix Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 538,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        129,
        189,
        260,
        265,
        138,
        133
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Anderson Pablo Leite Silva",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 539,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        172,
        168,
        169,
        202,
        157,
        232,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luis Benedito Ainsworth Fahning",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 540,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        170,
        238
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lyang Leme de Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 541,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        172,
        82,
        202,
        148,
        239,
        150,
        171,
        177,
        258,
        179,
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Juliana Cordeiro Farias Leite",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 542,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        172,
        202,
        168,
        267
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Stayner Nóbrega Barros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 543,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        146,
        85,
        82,
        149,
        148,
        150,
        171,
        145,
        177,
        144,
        179,
        213,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jose Ismael dos Santos Falcone",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 544,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        136,
        85,
        82,
        149,
        148,
        150,
        171,
        145,
        177,
        144,
        179,
        123,
        213,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Claudio Victor Alves de Carvalho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 545,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        173,
        236,
        244
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Alexsandra Macedo Souto",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 546,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        173,
        236,
        244
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus dos Anjos Guerra",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 547,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Dayvson Weslley Cantalice do Nascimento",
      "methodology": []
    },
    {
      "user_id": 548,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        165,
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tarciso Braz de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 549,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Ivo de Lima Sobrinho",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 550,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        163,
        229
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Veruska Borges Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 551,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Adriano José Pinheiro Lemos",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 552,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        163
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Guilherme Lopes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 553,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        127,
        158,
        82,
        252
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tulio Henrique Escarião da Nóbrega",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 554,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Douglas Henrique Emiliano de Oliveira Lima",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 555,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        155,
        195,
        210
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Weverton Domingos de Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 556,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        148,
        211,
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luan Rocha Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 557,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Paulo Ferreira Leite",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 558,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        184,
        183,
        186,
        204,
        219,
        220,
        221,
        222,
        223,
        188,
        257,
        269,
        271,
        272,
        273,
        274,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hugo Gayoso Meira Suassuna de Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 559,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        145,
        213,
        177,
        216,
        253,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcelo Souza Santos",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 560,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        85,
        82,
        149,
        148,
        150,
        171,
        145,
        177,
        179,
        144,
        123,
        213,
        239,
        240,
        258
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Agatha Bhenares Alves Martins",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 561,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        183,
        184,
        186,
        220,
        271,
        274,
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Klynger Renan Menezes Dantas",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 562,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        173,
        206,
        225,
        226,
        233,
        236,
        237,
        241,
        263,
        259,
        224,
        178,
        275,
        276,
        281
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Wislayne Dayanne Pereira da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 563,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        183,
        184,
        188,
        220,
        269,
        274,
        85,
        82,
        272
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Henrique Silva Cavalcante",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 564,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        183,
        184,
        188
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Iuri Barbosa de Brito",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "KANBAN"
      ]
    },
    {
      "user_id": 565,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        146,
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raimundo Marcos Gonçalves Ludgério",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 566,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        188,
        269,
        274,
        222
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kelvin Dantas Vale",
      "methodology": [
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 567,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        219,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinícius Bonfim",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 568,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        184,
        188,
        222,
        272,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Wemerson Farias Lima",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 569,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Emmanuel Pereira da Cunha Silva",
      "methodology": []
    },
    {
      "user_id": 570,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        184,
        188,
        220,
        272,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago Morais de Oliveira",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 571,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        184,
        188,
        222,
        272,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rubens Fernandes Roux Abrantes",
      "methodology": [
        "SCRUM",
        "KANBAN",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 572,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Fernando Lopes da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 573,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Larrysa Mirelly Rosendo Figueiredo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 574,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        85,
        82,
        148,
        239,
        150,
        171,
        177,
        258,
        179,
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Isabela Hebele Silva Furtado",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 575,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jobson da Silva Batista",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 576,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Michael Uewerton Targino de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 577,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        136,
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcio Nascimento da Costa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 578,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        178,
        224,
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jeiseel Rodrigues da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 579,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        184,
        221,
        195
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Villanova Novaes Magalhães",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 580,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        193,
        226,
        229
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Williamberg de Albuquerque Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 581,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Caio José dos Santos Arruda",
      "methodology": []
    },
    {
      "user_id": 582,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        197,
        198,
        165,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rafael Dantas Santos de Azevêdo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 583,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        204,
        222,
        273,
        274,
        85,
        82
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danilo Barreto Cavalcanti",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 584,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        206,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luana Barbosa de Melo",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 585,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        206,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thalyta Barbosa do Nascimento",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 586,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Maria Cecília Kemiac Santos",
      "methodology": []
    },
    {
      "user_id": 587,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        206,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius Barbosa da Silva",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 588,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        206,
        216
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Italo Modesto Pereira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 589,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        223,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Thiago da Silva Cruz",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 590,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Débora Nunes Pinto de Oliveira",
      "methodology": []
    },
    {
      "user_id": 591,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        274,
        271
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Danilo Gomes de Andrade",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 592,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        220,
        186,
        271,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Fernando da Silva Sousa",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 593,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo Vilar de Farias",
      "methodology": []
    },
    {
      "user_id": 594,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius Nóbrega",
      "methodology": []
    },
    {
      "user_id": 595,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        223,
        274,
        269
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Pedro Melquiades Gomes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 596,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        222,
        274
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marcio Almeida",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 597,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        221
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Hawllysson Gardel Queiroz Almeida",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 598,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        221,
        274,
        222
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Emídio Alves de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 599,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "George Henrique Corcino Camboim",
      "methodology": []
    },
    {
      "user_id": 600,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        219,
        274,
        269
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kaline Alencar de Sá Menezes",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 601,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        223
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Farias Martins",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 602,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        226,
        232,
        157
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Higor Roberto Ferreira Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 603,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        189,
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "André Gomes Ferreira de Oliveira",
      "methodology": [
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 604,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        190,
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Yuri Souza dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 605,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        189,
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gutemberg Silva Filho",
      "methodology": [
        "KANBAN",
        "SCRUM"
      ]
    },
    {
      "user_id": 606,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        192,
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gildo Macedo Neto",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 607,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        233
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Caroliny Mylena Bezerra e Silva",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 608,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        233
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Dantas Santos de Azevêdo",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 609,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        233
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Guilherme Coelho de Oliveira",
      "methodology": [
        "KANBAN"
      ]
    },
    {
      "user_id": 610,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        212,
        237
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Edson Weslley Almeida do Nascimento",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 611,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        212,
        237
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Dantas Porto",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 612,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Almir Gonçalves Crispiniano",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 613,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Axél Crispim e Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 614,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        281
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eduardo Henrique Pontes Silva",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 615,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        281
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Eduardo Pereira dos Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 616,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        201
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Macêdo Claudino",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 617,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jessé Souza Cavalcanti Neto",
      "methodology": []
    },
    {
      "user_id": 618,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        232,
        157
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabrielly Trajano Amorin",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 619,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227,
        234
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lourival Gonçalves Prata Netto",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 620,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227,
        234
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mariane Silva de Carvalho",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 621,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        228
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Bernard Dantas Odon",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 622,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jorge Berti",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 623,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        255
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Arthur Dimitri Brito Oliveira",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 624,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        259
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Vinicius Matias de Lima",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 625,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        259
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Joélio Marinho Batista Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 626,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        284
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Anderson Cosme dos Santos",
      "methodology": []
    },
    {
      "user_id": 627,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Carlos Eduardo Silveira Dias",
      "methodology": []
    },
    {
      "user_id": 628,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Paulo Bassanesi",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 629,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "André Stramare",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 630,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        227
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Luis Aguirre",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 631,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        263
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Nayara Silva Pereira de Souza",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 632,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        263
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Matheus Silva Araújo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 633,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Maria Eduarda de Azevedo Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 634,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mateus Cavalcante de Almeida Aires",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 635,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Pedro Lucas Siqueira de Lima",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 636,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        259
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Raiani Idalino Pontes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 637,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        259
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Izabella Ribeiro de Souza Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 638,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        198,
        197,
        261
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Maysa Freire de Araújo",
      "methodology": [
        "SCRUM",
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 639,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Brenda Louisy Morais Alves",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 640,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Euclides Ramos de Araújo Filho",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 641,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        239
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gustavo da Costa Nóbrega Gambarra",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 642,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        196
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Joaquim José Cintra Maia Honório",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 643,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Guilherme Pretto",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 644,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        243
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ítalo Roger Ferreira Moreno Pinheiro",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 645,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        195
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Oliveira de Figueiredo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 646,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        195
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mayra Rafaella Galvincio Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 647,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        195
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ícaro Leal da Cunha Lima",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 648,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        251
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Larissa Teixeira da Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 649,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        251
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Clarice Sofia Henriques Soares",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 650,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Erasmo Isotton",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 651,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Juliano Vacaro",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 652,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        265
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Diego Gimenez Pedroso",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 653,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        229
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Tiago Brasileiro Araújo",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 654,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        201,
        241
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Sofia Rocha Cavalcanti",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 655,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        240
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Kaio Giovanni Bezerra de Lucena",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 656,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        241,
        282
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Nascimento Santos",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 657,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jaciane de Oliveira Cruz",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 658,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "José Nilton da Silva Lima Júnior",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 659,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        242
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Márcia Lais da Silva Pontes",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 660,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        276
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Igor Franca Gadêlha Filho",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 661,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        275
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Jamilson dos Santos Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 662,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        168
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "João Vitor Patricio Romão",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 663,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        168
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Lucas Abrantes Furtado Silva",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 664,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Igor Paiva Bragante de Araújo",
      "methodology": []
    },
    {
      "user_id": 665,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Ana Flávia Regis Macêdo",
      "methodology": []
    },
    {
      "user_id": 666,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Larissa da Silva Lima",
      "methodology": []
    },
    {
      "user_id": 668,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Mário Cadoso Simões de Farias",
      "methodology": []
    },
    {
      "user_id": 669,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Glauber Vinicius Ventura de Melo Ferreira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 670,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Leonardo Fernandes Mendonça de Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 671,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Flávio Mota Medeiros",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 672,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Igor Santana Batista",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 673,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Rodrigo Alves de Souza",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 674,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        82,
        85
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Filipe da Silva Oliveira",
      "methodology": [
        "SCRUM",
        "SCRUM"
      ]
    },
    {
      "user_id": 675,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        243
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Marley Lobão de Sousa",
      "methodology": [
        "SCRUM"
      ]
    },
    {
      "user_id": 676,
      "bio": "",
      "systemRole": "",
      "contractId": "",
      "contractRoleID": "",
      "contractRoleName": "",
      "projects_id": [
        243
      ],
      "softskills": [],
      "hardskill": [],
      "nomeCompleto": "Gabriel Araújo Miranda",
      "methodology": [
        "SCRUM"
      ]
    }
  ]

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
            methodologies: user.methodology,
            projectsId: user.projects_id,
            };
        });

        // Depois, iterar sobre cada nó em dadosGrafo e adicionar os dados de methodology e projects_id
        dadosGrafo.nodes.forEach(node => {
            if (usuarioParaDados[node.user_id]) {
            // Assegurar que methodologies e projectsId são arrays antes de atribuir
            node.methodology = Array.isArray(usuarioParaDados[node.user_id].methodologies) ? usuarioParaDados[node.user_id].methodologies : [];
            node.projects_id = Array.isArray(usuarioParaDados[node.user_id].projectsId) ? usuarioParaDados[node.user_id].projectsId : [];
            } else {
            // Se não existir correspondência em dadosUsuarios, inicializa com arrays vazios
            node.methodology = [];
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
              methodology: [...new Set(node.methodology)], // Remove duplicatas das metodologias
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

            if (Array.isArray(pessoa.methodology)) {
                
                pessoa.methodology = pessoa.methodology.map(method => method.toLowerCase());
            }
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

    function verificaMetodologia(methodology, pessoa) {
        for (let i = 0; i < methodology.length; i++) {
            if (pessoa.methodology.includes(methodology[i].toLowerCase())) {
            
            return true;
            }
        }
        return false;
    }  

      


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
                            
                            methodology: pess[i].methodology,
                            fit:0,
                            vetor_hardskill: [],
                            
                            vetor_metodologia: [],
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

    console.log('De um total de '+ pess.length+ ', ' +pessoa.length+' users foram adicionados com: '+skills_entrada+' e '+methodology)
    let level = []       
    for (let i = 0; i< pessoa.length; i++){ 
        level.push(pessoa[i].level)
    }

    converterSkillsParaMinusculas(skills_entrada)
    converterSkillsParaMinusculas(methodology)

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
    
    for(let i=0; i<methodology.length; i++){
        vetorProjeto.metodologia_entrada.push(1)
    }
    vetorProjeto = vetorProjeto.hardskill_entrada.concat( vetorProjeto.metodologia_entrada);

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
        const pessoasNormalizadas = pessoas.map(pessoa => {
            const vetorPessoa = pessoa.vetor_hardskill.concat( pessoa.vetor_metodologia);
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
        let maxTentativas = pessoa.length; // Limita as tentativas para evitar loop infinito
        while (tentativas < maxTentativas) {
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

    // Passo 1: gera população inicial 


  
    for (let u= 0; u <4; u++){  //tamanho da população
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

    let qtd_cromossomos = 0;
    let array_auxi = [];

    while (qtd_cromossomos < 4) {
        let popul = 0;
        array_auxi = [];
        let array_niveis = [];

        // A lógica para selecionar indivíduos únicos e criar um novo cromossomo permanece a mesma.
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
        console.log('array_auxi tamanho',array_auxi.length)
        console.log('array_auxi', JSON.stringify(array_auxi))
        //alert(tamanho_equipe)
        // Após formar um cromossomo completo, verifique sua unicidade antes de adicioná-lo à população.
        if (popul === tamanho_equipe) {
            // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
            for (let u = 0; u < array_auxi.length; u++) {
                arrayde_cromo[qtd_cromossomos].cromo.push(array_auxi[u].user_id);
                arrayde_cromo[qtd_cromossomos].fit.push(array_auxi[u].fit);
                arrayde_cromo[qtd_cromossomos].nomes.push(array_auxi[u].name);
                arrayde_cromo[qtd_cromossomos].levels.push(array_auxi[u].level);
            }
                qtd_cromossomos++;
        } else {
            console.log("não foi possível formar um cromossomo completo");
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
    for (let i = 0; i < pessoa.length; i++) {
        let MethodUnicas = pessoa[i].methodology.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        pessoa[i].methodology = MethodUnicas;
    }
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

    while( geracoes < 10  || iteracaoAtual < maxIteracoes ){//condição de parada



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
            console.log('deu certo')
            console.log('vetorProjeto',vetorProjeto)
            console.log('pessoa',pessoa)


            const k = vetorProjeto.length; // tamanho do vetor do projeto
        
            // Normalização do vetor de entrada do projeto
            const vetorProjetoNormalizado = vetorProjeto.map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
            // Normalização do vetor da pessoa (considerando ambos hardskills e metodologias)
            const vetorPessoaNormalizado = pessoa.vetor_hardskill.concat(pessoa.vetor_metodologia)
                                          .map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
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
fs.writeFile('sugestoes.csv', csvData, 'utf8', err => {
  if (err) {
    console.error('Erro ao salvar o arquivo CSV:', err);
  } else {
    console.log('Arquivo sugestoes.csv CSV salvo com sucesso.');
  }
});

fs.writeFile('genesMutados.json', JSON.stringify(stringJSON), err => {
    if (err) {
        console.error('Erro ao salvar o arquivo:', err);
    } else {
        console.log('Arquivo de genes mutados salvo com sucesso.');
    }
});