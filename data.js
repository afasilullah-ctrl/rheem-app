// ===== RHEEM / RUUD HVAC SERVICE REPORT — DATA =====
// Models sourced from: Master list for RUUD RHEEM UNITS 60 hz

const MODELS = {
  Rheem: {
    VRF: {
      outdoor: [
        "SAVR-H100/4R1C","SAVR-H120/4R1C","SAVR-H140/4R1C","SAVR-H160/4R1C","SAVR-H180/4R1C",
        "SAVR-H250/6R1C","SAVR-H280/6R1C","SAVR-H330/6R1C","SAVR-H400/6R1C","SAVR-H450/6R1C",
        "SAVR-H250/6R1MD","SAVR-H280/6R1MD","SAVR-H330/6R1MD","SAVR-H400/6R1MD","SAVR-H450/6R1MD",
        "SAVR-H500/6R1MD","SAVR-H560/6R1MD","SAVR-H610/6R1MD","SAVR-H680/6R1MD","SAVR-H730/6R1MD",
        "SAVR-H785/6R1MD","SAVR-H850/6R1MD","SAVR-H900/6R1MD","SAVR-H950/6R1MD","SAVR-H1010/6R1MD",
        "SAVR-H140/2R1D","SAVR-H180/6R1D"
      ],
      indoor: [
        "SAVRMD-H045/R1X","SAVRMD-H056/R1X","SAVRMD-H071/R1X","SAVRMD-H080/R1X","SAVRMD-H090/R1X",
        "SAVRMD-H100/R1X","SAVRMD-H125/R1X","SAVRMD-H140/R1X","SAVRMD-H150/R1X",
        "SAVRMD-H045/R1XM","SAVRMD-H056/R1XM","SAVRMD-H071/R1XM","SAVRMD-H090/R1XM",
        "SAVRMD-H112/R1XM","SAVRMD-H125/R1XM","SAVRMD-H140/R1XM","SAVRMD-H150/R1XM",
        "SAVRWM-H022/R1X","SAVRWM-H028/R1X","SAVRWM-H036/R1X","SAVRWM-H045/R1X",
        "SAVRWM-H056/R1X","SAVRWM-H071/R1X",
        "SAVRCF-H045/R1XF","SAVRCF-H056/R1XF","SAVRCF-H071/R1XF","SAVRCF-H080/R1XF",
        "SAVRCF-H090/R1XF","SAVRCF-H112/R1XF","SAVRCF-H125/R1XF","SAVRCF-H140/R1XF",
        "SAVRCA-H028/R1X","SAVRCA-H036/R1X","SAVRCA-H036/R1XY","SAVRCA-H045/R1X",
        "SAVRCA-H056/R1X","SAVRCA-H056/R1XY","SAVRCA-H071/R1X","SAVRCA-H071/R1XY",
        "SAVRCA-H080/R1X","SAVRCA-H112/R1XY","SAVRCA-H140/R1XY",
        "SAVRSD-H022/R1XY","SAVRSD-H036/R1XY",
        "SAVRHD-H220/R1X","SAVRHD-H280/R1X",
        "FAHU","AHU"
      ]
    },
    "Ducted Split": {
      outdoor: [
        "RVRL-018JHB00-S","RVRL-024JHB00-S","RVRL-030JHB00-S",
        "RVRL-036JHB00-S","RVRL-048JHB00-S","RVRL-060JHB00-S",
        "SPRL-018JA","SPRL-024JA","SPRL-036JA","SPRL-048JA","SPRL-060JA",
        "EA1418AJ1NB030","EA1424BJ1NB030","EA1430AJ1NB030",
        "EA1436AJ1NB030","EA1448AJ1NB030","EA1455AJ1NB030","EA1465AJ1NB030",
        "SAWL090","SAWL120","SAWL150","SAWL180","SAWL240","SAWL300"
      ],
      indoor: [
        "SSGN-018JA011","SSGN-024JA011","SSGN-030JA011","SSGN-036JA011",
        "SSGN-042EA011","SSGN-048EA011","SSGN-060EA011",
        "EL3T1812SPBCJA030","EL3T2212SPBCJA030","EL3T2812SPBCJA030","EL3T3212SPBCJA030",
        "EL3T4817STACJB030","EL3T4817STACJB031","EL3T5517STACJA030","EL3T6518STACJA030",
        "EH1T18","EH1T24","EH1T36","EH1T48","EH1T60",
        "RIRL-018JH00-S","RIRL-024JH00-S","RIRL-030JH00-S",
        "RIRL-036JH00-S","RIRL-048JH00-S","RIRL-060JH00-S"
      ]
    },
    "Wall Mount Split": {
      outdoor: [
        "RW12CRCT00","RW12CRHT00",
        "RW18CRCT01","RW18CRCT02","RW18CRHT00","RW18CIHT01",
        "RW24CRCT00","RW24CRCT01","RW24CRHT01","RW24CRHT02","RW24CIHT01",
        "RW30CRCT00","RW30CRCT01","RW30CRHT00","RW30CRHT01",
        "RW36CRCT00","RW36CRCT01","RW36CRHT00","RW36CRHT01",
        "RW12CIHT01"
      ],
      indoor: ["(Matching indoor unit — same model suffix)"]
    },
    "Package": {
      outdoor: [
        "EMRHRX072AVT000AAAA0",
        "EMRHRX096AEA000AAAA0","EMRHRX096AEA000ABAA0",
        "EMRHRX120AEA000AAAA0","EMRHRX120AEA000ABAA0",
        "EMRHRX170AEA000AAAA0","EMRHRX190AEA000AAAA0",
        "EMRHRX240AEA000AAAA0","EMRHRX300AEA000AAAA0","EMRHRX360AEA000AAAA0",
        "SLKL 90","SLKL 120","SLKL 150","SLKL 180","SLKL 240","SLKL 300",
        "SRSA 120","SRSA 180","SRSA 240","SRSA 300","SRSA 360","SRSA 420","SRSA 540",
        "SSPM48","SSPM60"
      ],
      indoor: ["(Integrated — Package Unit)"]
    },
    "Cassette": {
      outdoor: ["(VRF Outdoor Unit)"],
      indoor: ["RC18CIHA01","RC24CIHA01","RC36CIHA01","RC42CIHA01"]
    },
    "Others": {
      outdoor: ["(Specify manually)"],
      indoor: ["(Specify manually)"]
    }
  },
  Ruud: {
    VRF: {
      outdoor: [
        "UAVR-H100/4R1C","UAVR-H120/4R1C","UAVR-H140/4R1C","UAVR-H160/4R1C","UAVR-H180/4R1C",
        "UAVR-H250/6R1C","UAVR-H280/6R1C","UAVR-H330/6R1C","UAVR-H400/6R1C","UAVR-H450/6R1C",
        "UAVR-H250/6R1MD","UAVR-H280/6R1MD","AVR-H330/6R1MD","UAVR-H400/6R1MD","UAVR-H450/6R1MD",
        "UAVR-H500/6R1MD","UAVR-H560/6R1MD","UAVR-H610/6R1MD","UAVR-H680/6R1MD","UAVR-H730/6R1MD",
        "UAVR-H785/6R1MD","UAVR-H850/6R1MD","UAVR-H900/6R1MD","UAVR-H950/6R1MD","UAVR-H1010/6R1MD",
        "UAVR-H140/2R1D","UAVR-H180/6R1D"
      ],
      indoor: [
        "UAVRMD-H045/R1X","UAVRMD-H056/R1X","UAVRMD-H071/R1X","UAVRMD-H080/R1X","UAVRMD-H090/R1X",
        "UAVRMD-H100/R1X","UAVRMD-H125/R1X","UAVRMD-H140/R1X","UAVRMD-H150/R1X",
        "UAVRMD-H045/R1XM","UAVRMD-H056/R1XM","UAVRMD-H071/R1XM","UAVRMD-H090/R1XM",
        "UAVRMD-H112/R1XM","UAVRMD-H125/R1XM","UAVRMD-H150/R1XM","UAVR-H140/R1XM",
        "UAVRWM-H022/R1X","UAVRWM-H028/R1X","UAVRWM-H036/R1X","UAVRWM-H045/R1X",
        "UAVRWM-H056/R1X","UAVRWM-H071/R1X",
        "UAVRCF-H045/R1XF","UAVRCF-H056/R1XF","UAVRCF-H071/R1XF","UAVRCF-H080/R1XF",
        "UAVRCF-H090/R1XF","UAVRCF-H112/R1XF","UAVRCF-H125/R1XF","UAVRCF-H140/R1XF",
        "UAVRCA-H028/R1X","UAVRCA-H036/R1X","UAVRCA-H036/R1XY","UAVRCA-H045/R1X",
        "UAVRCA-H056/R1X","UAVRCA-H056/R1XY","UAVRCA-H071/R1X","UAVRCA-H071/R1XY",
        "UAVRCA-H080/R1X","UAVRCA-H112/R1XY","UAVRCA-H140/R1XY",
        "UAVRSD-H022/R1XY","UAVRSD-H036/R1XY",
        "UAVRHD-H220/R1X","UAVRHD-H280/R1X",
        "FAHU","AHU"
      ]
    },
    "Ducted Split": {
      outdoor: [
        "UVRL-018JHB00-S","UVRL-024JHB00-S","UVRL-030JHB00-S",
        "UVRL-036JHB00-S","UVRL-048JHB00-S","UVRL-060JHB00-S",
        "VPRL-018JA","VPRL-024JA","VPRL-036JA","VPRL-048JA","VPRL-060JA",
        "VA1418AJ1NB030","VA1424BJ1NB030","VA1430AJ1NB030",
        "VA1436AJ1NB030","VA1448AJ1NB030","VA1455AJ1NB030","VA1465AJ1NB030",
        "VAWL090","VAWL120","VAWL150","VAWL180","VAWL240","VAWL300"
      ],
      indoor: [
        "VSGN-018JA011","VSGN-024JA011","VSGN-030JA011","VSGN-036JA011",
        "VSGN-042EA011","VSGN-048EA011","VSGN-060EA011",
        "VL3T1812SPBCJA030","VL3T2212SPBCJA030","VL3T2812SPBCJA030","VL3T3212SPBCJA030",
        "VL3T4817STACJB030","VL3T4817STACJB031","VL3T5517STACJA030","VL3T6518STACJA030",
        "VH1T18","VH1T24","VH1T36","VH1T48","VH1T60",
        "UIRL-018JH00-S","UIRL-024JH00-S","UIRL-030JH00-S",
        "UIRL-036JH00-S","UIRL-048JH00-S","UIRL-060JH00-S"
      ]
    },
    "Wall Mount Split": {
      outdoor: [
        "UW12CRCT00","UW12CRHT00",
        "UW18CRCT01","UW18CRCT02","UW18CRHT00","UW18CIHT01",
        "UW24CRCT00","UW24CRCT01","UW24CRHT01","UW24CRHT02","UW24CIHT01",
        "UW30CRCT00","UW30CRCT01","UW30CRHT00","UW30CRHT01",
        "UW36CRCT00","UW36CRCT01","UW36CRHT00","UW36CRHT01",
        "UW12CIHT01"
      ],
      indoor: ["(Matching indoor unit — same model suffix)"]
    },
    "Package": {
      outdoor: [
        "VMRHRX072AVT000AAAA0",
        "VMRHRX096AEA000AAAA0","VMRHRX096AEA000ABAA0",
        "VMRHRX120AEA000AAAA0","VMRHRX120AEA000ABAA0",
        "VMRHRX170AEA000AAAA0","VMRHRX190AEA000AAAA0",
        "VMRHRX240AEA000AAAA0","VMRHRX300AEA000AAAA0","VMRHRX360AEA000AAAA0",
        "VLKL 90","VLKL 120","VLKL 150","VLKL 180","VLKL 240","VLKL 300",
        "VRSA 120","VRSA 180","VRSA 240","VRSA 300","VRSA 360","VRSA 420","VRSA 540",
        "VSPM48","VSPM60"
      ],
      indoor: ["(Integrated — Package Unit)"]
    },
    "Cassette": {
      outdoor: ["(VRF Outdoor Unit)"],
      indoor: ["UC18CIHA01","UC24CIHA01","UC36CIHA01","UC42CIHA01"]
    },
    "Others": {
      outdoor: ["(Specify manually)"],
      indoor: ["(Specify manually)"]
    }
  }
};

// Blower current thresholds by model pattern
const BLOWER_THRESHOLDS = [
  { pattern: /EMRHRX(300|360)|VMRHRX(300|360)/i, threshold: 5, label: "EMRHR/VMRHR 300/360" },
  { pattern: /EMRHRX(170|190|240)|VMRHRX(170|190|240)/i, threshold: 4, label: "EMRHR/VMRHR 170/190/240" }
];

const TECH_PARAMS = {
  "SPRL-018JA": { tonnage:"1.5 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"2.6 kg", ratedCurrentT1:"6.5 A", ratedCurrentT3:"7.75 A", powerInputT1:"1500 W", powerInputT3:"1800 W", capacityT1:"18500 BTU/h", capacityT3:"17500 BTU/h", eerT1:"12.35", eerT3:"9.70", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-024JA": { tonnage:"2.0 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"2.9 kg", ratedCurrentT1:"8.5 A", ratedCurrentT3:"9.6 A", powerInputT1:"1800 W", powerInputT3:"2150 W", capacityT1:"21600 BTU/h", capacityT3:"19200 BTU/h", eerT1:"12.0", eerT3:"8.95", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-036JA": { tonnage:"2.5 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"3.1 kg", ratedCurrentT1:"10.0 A", ratedCurrentT3:"11.65 A", powerInputT1:"2300 W", powerInputT3:"2700 W", capacityT1:"29200 BTU/h", capacityT3:"27800 BTU/h", eerT1:"12.7", eerT3:"9.85", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-048JA": { tonnage:"3.0 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"4.0 kg", ratedCurrentT1:"16.0 A", ratedCurrentT3:"18.5 A", powerInputT1:"2750 W", powerInputT3:"3200 W", capacityT1:"33000 BTU/h", capacityT3:"30600 BTU/h", eerT1:"12.0", eerT3:"9.55", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-060JA": { tonnage:"3.5 TR", voltage:"400V 3Ø", refrigerant:"R-410A", totalCharge:"4.4 kg", ratedCurrentT1:"7.65 A", ratedCurrentT3:"8.5 A", powerInputT1:"3310 W", powerInputT3:"4030 W", capacityT1:"39800 BTU/h", capacityT3:"36600 BTU/h", eerT1:"12.0", eerT3:"9.10", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" }
};

const R410A_SATURATION = [
  { psig: 56, temp: -17.8 }, { psig: 70, temp: -12.2 }, { psig: 87, temp: -6.7 },
  { psig: 105, temp: -1.1 }, { psig: 117, temp: 2.2 }, { psig: 121, temp: 3.3 },
  { psig: 130, temp: 5.6 }, { psig: 145, temp: 10.0 }, { psig: 162, temp: 15.0 },
  { psig: 175, temp: 18.3 }, { psig: 200, temp: 23.9 }, { psig: 220, temp: 27.8 },
  { psig: 238, temp: 31.1 }, { psig: 255, temp: 34.4 }, { psig: 280, temp: 38.9 },
  { psig: 300, temp: 42.2 }, { psig: 325, temp: 46.1 }, { psig: 350, temp: 50.0 },
  { psig: 375, temp: 53.3 }, { psig: 400, temp: 56.7 }, { psig: 425, temp: 60.0 },
  { psig: 450, temp: 63.3 }
];

// ===== COMPREHENSIVE ERROR CODES =====
const ERROR_CODES = [
  // RSIN / RSON
  { model_category:"Ducted", series:"RSIN / RSON", code:"E0",  description:"Communication Error — Display ↔ Base Controller",   action:"Check wiring between display and base PCB. Auto-resets." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E1",  description:"Room Temperature Sensor Open",                       action:"Check sensor connector. Replace sensor if open circuit." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E2",  description:"Room Temperature Sensor Short",                      action:"Check sensor cable for shorts. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E3",  description:"Anti-Freeze Coil Sensor Open",                       action:"Check anti-freeze sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E4",  description:"Anti-Freeze Coil Sensor Short",                      action:"Check anti-freeze sensor cable for shorts. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E5",  description:"Anti-Freeze Coil Temperature Below Set Point",       action:"Check refrigerant charge, airflow and filters." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E7",  description:"HP / LP / SPPR Lock-Out (3× in 1 hour)",             action:"Check HP/LP switch, refrigerant pressures. Manual Reset required." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E8",  description:"Return Air Temperature Sensor Open",                 action:"Check return-air sensor connector. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E9",  description:"Return Air Temperature Sensor Short",                action:"Check return-air sensor cable. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E10", description:"Filter Clean Reminder (2000 hr runtime)",            action:"Clean or replace air filters. Reset filter timer." },
  // RIBL / RVBL
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"EA",  description:"IDU ↔ ODU Communication Error",              action:"Check A-B comms wiring. Check IDU controller and Ducted Master." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"Ed",  description:"ODU HP / LP / DTS Trip — Manual Reset",      action:"Check HP/LP switch, pressures, discharge temp sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A4",  description:"High DLT Trip — Discharge Temp > 110°C",     action:"Check refrigerant, EXV, condenser airflow. Manual reset." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"FP",  description:"Frozen Protection — Liquid Line < 2°C",      action:"Check airflow, filters, refrigerant charge, EXV." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U9",  description:"High Condensing Temp — Coil Mid > 66°C",     action:"Clean condenser coil/fins. Check outdoor fan." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"CF",  description:"Capacity Setting Error",                     action:"Verify capacity dip-switch setting in IDU controller." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d2",  description:"DC Bus Under-Voltage",                       action:"Check supply voltage. Drive DC < 140V." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d3",  description:"DC Bus Over-Voltage",                        action:"Check supply voltage. Drive DC > 420V." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d6",  description:"IGBT High Temperature > 100°C",              action:"Check drive heatsink. Power cycle. Replace drive." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b9",  description:"Compressor Overcurrent — Firmware",          action:"Power cycle. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"bA",  description:"Compressor Step-Out / Start Error",          action:"Check supply voltage and compressor windings." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U5",  description:"Phase Loss / Imbalance (3-phase)",           action:"Check all 3 supply phases. Imbalance must be ≤2%." },
  // RVBG Inverter
  { model_category:"Ducted", series:"RVBG Inverter", code:"E0",  description:"Communication Error — Display ↔ Base Controller (30s)", action:"Check wiring between display PCB and base controller." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E1",  description:"Room Temperature Sensor Open",                        action:"Check sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E2",  description:"Room Temperature Sensor Short",                       action:"Replace room temperature sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E3",  description:"Anti-Freeze Sensor Open",                            action:"Check anti-freeze sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E4",  description:"Anti-Freeze Sensor Short",                           action:"Replace anti-freeze sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EA",  description:"IDU ↔ ODU Communication Error (40s timeout)",         action:"Check A-B communication wiring." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FS",  description:"Float Switch Error — Open or Short",                  action:"Check float switch wiring. Clear drain line." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C6",  description:"IDU BLDC Fan Motor Error (Auto ×3)",                  action:"Check fan motor wiring and blade. Replace motor if needed." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C7",  description:"IDU BLDC Fan Motor Error (Manual — 4th time)",        action:"Replace IDU BLDC fan motor or main PCB." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C8",  description:"IDU EEPROM Fault",                                    action:"Replace IDU PCB or EEPROM." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"UA",  description:"External Refrigerant Leak Sensor — Manual Reset",     action:"Check refrigerant leak sensor. Inspect system for leaks." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EC",  description:"ODU High Pressure Switch Protection (Auto ×3)",       action:"Check HP switch, refrigerant charge, condenser fan." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"Ed",  description:"High Pressure Switch Protection (Manual — 4th time)", action:"Check HP switch, refrigerant, condenser coil and fan." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FP",  description:"IDU Coil Freezing Protection (Manual — 4th time)",    action:"Check airflow, filters, refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"d6",  description:"IPM Temperature Over-High Protection",                action:"Check drive heatsink cooling. Power cycle." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"b9",  description:"Compressor Phase Current Protection (Manual — 4th)",  action:"Check compressor and drive. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"bA",  description:"Compressor Starting Abnormal / Out-of-Step",          action:"Check capacitor, supply voltage, compressor windings." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U1",  description:"ODU AC Voltage Over-High",                           action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U2",  description:"ODU AC Voltage Over-Low",                            action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U9",  description:"ODU Coil Overheat Protection (Manual — 4th time)",   action:"Clean condenser coil. Check fan operation." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FC",  description:"Refrigerant Leak Detection",                         action:"Check for refrigerant leaks. Repair and recharge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EF",  description:"Low Pressure Switch Protection (Manual — 4th time)", action:"Check LP switch and refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"dE",  description:"IPM Module Fault (Manual — 4th time)",               action:"Power cycle. Replace drive module if fault persists." },
  // VRF Modular C/D Series
  { model_category:"VRF", series:"VRF Modular C/D", code:"A1",  description:"Indoor Ambient Temperature Sensor Failure",           action:"Check IDU PCB fuse, sensor wiring. Replace sensor or PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"A5",  description:"Indoor Water Pump Failure",                           action:"Check pump power, switch wiring, drain blockage." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"A6",  description:"Indoor PG Fan Motor Failure",                         action:"Check fan motor wiring and blockage. Replace motor or PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"A8",  description:"Indoor EEPROM Module Failure",                        action:"Replace indoor PCB or EEPROM module." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"A9",  description:"Communication Failure — IDU ↔ ODU",                   action:"Check comms wiring between units. Check power and PCBs." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"AA",  description:"Communication Failure — IDU ↔ Wired Controller",      action:"Check controller wiring. Replace controller or IDU PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"AC",  description:"Central Control Address Conflict",                    action:"Check and correct central control address settings on all IDUs." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"AJ",  description:"Indoor Total Capacity Exceeded",                      action:"Stop some IDUs. Check EXV and sensors." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"C1",  description:"Outdoor Ambient Sensor Tao Fault",                    action:"Check ODU ambient sensor and wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"E1",  description:"4-Way Valve Fault",                                   action:"Check 4-way valve coil and wiring. Replace valve." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"E3",  description:"Compressor 1 Discharge Temp Too High",                action:"Check refrigerant charge, EXV, expansion valve, condenser airflow." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"F1",  description:"High Pressure Sensor Pd Failure",                    action:"Check HP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"F3",  description:"High Pressure Pd Protection",                        action:"Check HP, condenser coil/fan, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"F4",  description:"Low Pressure Sensor Ps Failure",                     action:"Check LP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"F6",  description:"Low Pressure Ps Too Low",                            action:"Check indoor fan, evaporator, EXV, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"F8",  description:"Compression Ratio Too High",                         action:"Check stop valves, condenser, EXV, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"H1",  description:"HP Switch Failure",                                  action:"Check HP switch, refrigerant, fans, stop valves." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"H5",  description:"Refrigerant Shortage",                               action:"Check for leaks. Repair and recharge." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"HJ",  description:"Main Power Failure — Phase Sequence",                action:"Tighten terminals. Correct phase sequence. Replace outdoor PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"J2",  description:"ODU ↔ IDU Communication Failure",                    action:"Check IDU-ODU comms wiring. Replace PCBs as needed." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"J7",  description:"ODU Main PCB EEPROM Failure",                        action:"Replace main PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"JJ",  description:"Indoor Total Capacity Exceeding 130%",               action:"Reduce total IDU capacity to within 130% of ODU." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"47",  description:"Indoor Unit Loss Failure",                           action:"Check IDU communication wiring and power. Replace IDU PCB." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"31",  description:"Drive Module IPM Protection",                        action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"VRF Modular C/D", code:"35",  description:"Compressor Phase Current Overload",                  action:"Check compressor and drive board. Replace faulty component." },
  // SAVR B VRF Outdoor
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H1",  description:"HP Switch HPSi Failure — Inverter Comp",         action:"Check HP switch, stop valves, outdoor fan." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H4",  description:"Low Pressure Switch LPS Failure",                action:"Check LP switch, stop valves, EXV, outdoor fan." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H5",  description:"Refrigerant Shortage",                           action:"Check for leaks. Repair and recharge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H8",  description:"Fixed Comp 1 Over-Current Protection",           action:"Check stop valve, air outlet, supply voltage, compressor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HA",  description:"AC Power Under-Voltage Protection",              action:"Check supply voltage, phase, wiring." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HJ",  description:"Main Power Failure — Phase Reversal/Lack",       action:"Check supply phase sequence. Replace ODU PCB if needed." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E1",  description:"4-Way Valve Failure",                            action:"Check 4-way valve coil and PCB connection. Replace valve." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E3",  description:"Inverter Comp Exhaust Temp Tdi Over Protection", action:"Check refrigerant charge, EXV, stop valves, exhaust sensor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J2",  description:"ODU ↔ IDU Communication Failure",                action:"Check IDU-ODU communication wiring." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"31",  description:"Drive Module IPM Protection F0",                 action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"47",  description:"Indoor Unit Loss Failure",                       action:"Check IDU communication wiring and power." },
  // Commercial Package
  { model_category:"Commercial", series:"EMRHR Package", code:"20",  description:"Low Pressure Switch Open — Circuit 1",         action:"Check refrigerant charge, LP switch. Auto-reset ×3 then lockout." },
  { model_category:"Commercial", series:"EMRHR Package", code:"21",  description:"Low Pressure Switch Open — Circuit 2",         action:"Check refrigerant charge, LP switch Circuit 2." },
  { model_category:"Commercial", series:"EMRHR Package", code:"29",  description:"High Pressure Switch Open — Circuit 1",        action:"Check HP switch, condenser coil/fan. Lockout after 3 events." },
  { model_category:"Commercial", series:"EMRHR Package", code:"30",  description:"High Pressure Switch Open — Circuit 2",        action:"Check HP switch Circuit 2. Check condenser coil and fan." },
  { model_category:"Commercial", series:"EMRHR Package", code:"42",  description:"Invalid Thermostat Signal",                    action:"Check thermostat wiring and compatibility." },
  { model_category:"Commercial", series:"EMRHR Package", code:"49",  description:"Freeze Switch Open — Circuit 1",               action:"Check evaporator, airflow, filters, freeze switch wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"50",  description:"Freeze Switch Open — Circuit 2",               action:"Check evaporator, airflow, filters on circuit 2." },
  { model_category:"Commercial", series:"EMRHR Package", code:"59",  description:"Water Sensed — Shutdown",                      action:"Check condensate drain and trap. Clear drain pan." },
  { model_category:"Commercial", series:"EMRHR Package", code:"83",  description:"Coil 1 Temperature Sensor Fail",               action:"Check/replace coil sensor 1 and wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"84",  description:"Outdoor Air Temperature Sensor Fail",          action:"Check/replace outdoor temperature sensor." },
  { model_category:"Commercial", series:"EMRHR Package", code:"85",  description:"Coil 2 Temperature Sensor Fail",               action:"Check/replace coil sensor 2 and wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"88",  description:"Emergency Stop Fault",                         action:"Check emergency stop input wiring. Reset after fault cleared." },
  { model_category:"Commercial", series:"EMRHR Package", code:"93",  description:"Control Board Fault",                          action:"Check control board wiring. Replace board if confirmed." },
  { model_category:"Commercial", series:"EMRHR Package", code:"97",  description:"Smoke Detection",                              action:"Check smoke detector wiring/sensor. Reset after area clear." },
  { model_category:"Commercial", series:"SRHA Package", code:"D3D4-Fast", description:"High Pressure Switch Activated",          action:"Check condenser blockage, outdoor fan, refrigerant overcharge." },
  { model_category:"Commercial", series:"SRHA Package", code:"D3D4-Slow", description:"Low Pressure Switch Activated",           action:"Check refrigerant charge. Inspect LP switch. Check for leaks." },
  { model_category:"Commercial", series:"SRHA Package", code:"D1D2-ON",   description:"Compressor Locked Out",                   action:"Investigate root cause. Manual reset after resolving fault." },
  // Mini Split
  { model_category:"Mini Split", series:"RW Rotary", code:"E0", description:"IDU / ODU Communication Failure",         action:"Check comms wiring between IDU and ODU." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E1", description:"Indoor Temperature Sensor Fault",         action:"Check resistance/connector. Replace sensor." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E2", description:"Indoor Pipe Temperature Sensor Fault",    action:"Check sensor wiring. Replace if faulty." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E6", description:"Indoor Fan Motor Malfunction",            action:"Check fan motor and DC voltage. Replace motor." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E0",  description:"IDU / ODU Communication Failure",      action:"Check IDU wiring, comms wiring and ODU power." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E4",  description:"AC Cooling System Abnormal — Gas Shortage", action:"Check refrigerant charge. Confirm stop valves fully open." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E6",  description:"IDU Fan Motor / DC Fan Failure",        action:"Check fan motor, blade, and IDU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E9",  description:"IPM / Compressor Drive Abnormal",       action:"Check ODU PCB, compressor windings, drive module." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P0",  description:"IPM Module Protection",                action:"Check U/V/W wiring, compressor, fan, refrigerant charge." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P1",  description:"Over / Under Voltage Protection",      action:"Check supply voltage 220V ±10%." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P4",  description:"ODU Discharge Pipe Over-Temperature",  action:"Check refrigerant charge, EXV, condenser ventilation." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P5",  description:"Sub-Cooling Protection",               action:"Clean IDU filter, check airflow, inspect fan motor." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P9",  description:"Compressor Driving Protection",        action:"Check compressor wire sequence. Restart after 3 min." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F8",  description:"4-Way Valve Reversing Abnormal",       action:"Check 4-way valve wiring and coil. Replace if faulty." },
  { model_category:"Mini Split", series:"RW Inverter", code:"Fy",  description:"Gas Leakage Protection",               action:"Inspect pipe connections for leaks. Repair and recharge." },
  { model_category:"Mini Split", series:"RC Cassette", code:"E1",  description:"Indoor Environment Sensor Failure",    action:"Replace faulty sensor." },
  { model_category:"Mini Split", series:"RC Cassette", code:"E2",  description:"Indoor Evaporator Sensor Failure",     action:"Replace faulty sensor." },
  { model_category:"Mini Split", series:"RC Cassette", code:"E4",  description:"Outdoor Unit Protection — HP/LP Trip", action:"Check connections, gas, outdoor ventilation." },
  { model_category:"Mini Split", series:"RC Cassette", code:"d3",  description:"Full Water Alarm — Float Switch",      action:"Check float switch and drain pump. Replace faulty part." },
  { model_category:"Mini Split", series:"RDMA Wall Mount", code:"F1", description:"Indoor Ambient Sensor Open/Short",  action:"Check sensor wiring. Replace sensor or main board." },
  { model_category:"Mini Split", series:"RDMA Wall Mount", code:"F2", description:"Indoor Evaporator Sensor Open/Short", action:"Check sensor terminal. Replace sensor or main board." },
  { model_category:"Mini Split", series:"RDMA Wall Mount", code:"H6", description:"PG Motor Not Operating",            action:"Check PG motor connections, fan blade. Replace motor if damaged." },
  { model_category:"Mini Split", series:"RDMA Wall Mount", code:"EC", description:"Refrigerant Leakage Detection",     action:"Inspect refrigerant pipe connections. Repair leak. Recharge." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E2", description:"Room Temperature Sensor Fault",     action:"Check sensor resistance ~5kΩ at 25°C. Replace sensor or board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E3", description:"Coil Temperature Sensor Fault",     action:"Check sensor resistance. Replace sensor or board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E4", description:"Outdoor Unit Abnormal",             action:"Check compressor current, refrigerant, condenser, fan capacitor." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E5", description:"No Feedback from Indoor PG Fan",    action:"Reinsert motor plugs. Check windings. Replace motor or board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E7", description:"Outdoor Feedback Fault",            action:"Check indoor/outdoor wiring. Secure connectors. Check supply phase." }
];
