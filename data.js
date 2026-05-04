// ===== RHEEM / RUUD HVAC SERVICE REPORT DATA =====

const MODELS = {
  Rheem: {
    VRF: {
      outdoor: [
        "SAVR-H100/4R1C","SAVR-H120/4R1C","SAVR-H140/4R1C","SAVR-H160/4R1C","SAVR-H180/4R1C",
        "SAVR-H250/6R1MD","SAVR-H280/6R1MD","SAVR-H330/6R1MD","SAVR-H400/6R1MD","SAVR-H450/6R1MD",
        "SAVR-H500/6R1MD","SAVR-H560/6R1MD","SAVR-H610/6R1MD","SAVR-H680/6R1MD","SAVR-H730/6R1MD",
        "SAVR-H785/6R1MD","SAVR-H850/6R1MD","SAVR-H900/6R1MD","SAVR-H950/6R1MD","SAVR-H1010/6R1MD",
        "SAVR-H140/2R1D","SAVR-H180/6R1D"
      ],
      indoor: [
        "SAVRMD-H045/R1X","SAVRMD-H056/R1X","SAVRMD-H071/R1X","SAVRMD-H080/R1X","SAVRMD-H090/R1X",
        "SAVRMD-H100/R1X","SAVRMD-H125/R1X","SAVRMD-H140/R1X","SAVRMD-H150/R1X",
        "SAVRWM-H022/R1X","SAVRWM-H028/R1X","SAVRWM-H036/R1X","SAVRWM-H045/R1X",
        "SAVRWM-H056/R1X","SAVRWM-H071/R1X",
        "SAVRCF-H045/R1XF","SAVRCF-H056/R1XF","SAVRCF-H071/R1XF","SAVRCF-H080/R1XF",
        "SAVRCF-H090/R1XF","SAVRCF-H112/R1XF","SAVRCF-H125/R1XF","SAVRCF-H140/R1XF",
        "SAVRCA-H028/R1X","SAVRCA-H036/R1X","SAVRCA-H045/R1X","SAVRCA-H056/R1X",
        "SAVRCA-H071/R1X","SAVRCA-H080/R1X","SAVRCA-H112/R1XY","SAVRCA-H140/R1XY",
        "SAVRSD-H022/R1XY","SAVRSD-H036/R1XY",
        "SAVRHD-H220/R1X","SAVRHD-H280/R1X",
        "SAVRMD-H045/R1XM","SAVRMD-H056/R1XM","SAVRMD-H071/R1XM","SAVRMD-H090/R1XM",
        "SAVRMD-H112/R1XM","SAVRMD-H125/R1XM","SAVRMD-H140/R1XM","SAVRMD-H150/R1XM"
      ]
    },
    "Ducted Split": {
      outdoor: [
        "RVRL-018JHB00-S","RVRL-024JHB00-S","RVRL-030JHB00-S",
        "RVRL-036JHB00-S","RVRL-048JHB00-S","RVRL-060JHB00-S",
        "SPRL-018JA","SPRL-024JA","SPRL-036JA","SPRL-048JA","SPRL-060JA"
      ],
      indoor: [
        "SSGN-018JA011","SSGN-024JA011","SSGN-030JA011","SSGN-036JA011",
        "SSGN-042EA011","SSGN-048EA011","SSGN-060EA011",
        "EL3T1812SPBCJA030","EL3T2212SPBCJA030","EL3T2812SPBCJA030",
        "EL3T3212SPBCJA030","EL3T4817STACJB030","EL3T5517STACJA030","EL3T6518STACJA030",
        "RIRL-018JH00-S","RIRL-024JH00-S","RIRL-030JH00-S",
        "RIRL-036JH00-S","RIRL-048JH00-S","RIRL-060JH00-S",
        "EH1T18","EH1T24","EH1T36","EH1T48","EH1T60",
        "EA1430AJ1NB030","EA1418AJ1NB030","EA1424BJ1NB030",
        "EA1436AJ1NB030","EA1448AJ1NB030","EA1455AJ1NB030","EA1465AJ1NB030"
      ]
    },
    "Wall Mount Split": {
      outdoor: [
        "RW12CRCT00","RW12CRHT00","RW18CRCT00","RW18CRHT00","RW18CRCT02",
        "RW24CRCT00","RW24CRHT01","RW24CRHT02","RW30CRCT00",
        "RW30CRHT00","RW30CRCT01","RW30CRHT01","RW36CRCT00","RW36CRHT00",
        "RW36CRCT01","RW36CRHT01","RW12CIHT01","RW18CIHT01","RW24CIHT01"
      ],
      indoor: ["(Matching indoor unit - same model suffix)"]
    },
    "Package": {
      outdoor: [
        "EMRHRX072AVT000AAAA0",
        "EMRHRX096AEA000AAAA0","EMRHRX096AEA000ABAA0",
        "EMRHRX120AEA000AAAA0","EMRHRX120AEA000ABAA0",
        "EMRHRX170AEA000AAAA0","EMRHRX190AEA000AAAA0",
        "EMRHRX240AEA000AAAA0","EMRHRX300AEA000AAAA0",
        "EMRHRX360AEA000AAAA0"
      ],
      indoor: ["(Integrated - Package Unit)"]
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
        "SAVR-H100/4R1C","SAVR-H120/4R1C","SAVR-H140/4R1C","SAVR-H160/4R1C","SAVR-H180/4R1C",
        "SAVR-H250/6R1MD","SAVR-H280/6R1MD","SAVR-H330/6R1MD","SAVR-H400/6R1MD","SAVR-H450/6R1MD",
        "SAVR-H500/6R1MD","SAVR-H560/6R1MD","SAVR-H610/6R1MD","SAVR-H680/6R1MD","SAVR-H730/6R1MD",
        "SAVR-H785/6R1MD","SAVR-H850/6R1MD","SAVR-H900/6R1MD","SAVR-H950/6R1MD","SAVR-H1010/6R1MD",
        "SAVR-H140/2R1D","SAVR-H180/6R1D"
      ],
      indoor: [
        "SAVRMD-H045/R1X","SAVRMD-H056/R1X","SAVRMD-H071/R1X","SAVRMD-H080/R1X","SAVRMD-H090/R1X",
        "SAVRMD-H100/R1X","SAVRMD-H125/R1X","SAVRMD-H140/R1X","SAVRMD-H150/R1X",
        "SAVRWM-H022/R1X","SAVRWM-H028/R1X","SAVRWM-H036/R1X","SAVRWM-H045/R1X",
        "SAVRWM-H056/R1X","SAVRWM-H071/R1X",
        "SAVRCF-H045/R1XF","SAVRCF-H056/R1XF","SAVRCF-H071/R1XF","SAVRCF-H080/R1XF",
        "SAVRCF-H090/R1XF","SAVRCF-H112/R1XF","SAVRCF-H125/R1XF","SAVRCF-H140/R1XF",
        "SAVRCA-H028/R1X","SAVRCA-H036/R1X","SAVRCA-H045/R1X","SAVRCA-H056/R1X",
        "SAVRCA-H071/R1X","SAVRCA-H080/R1X","SAVRCA-H112/R1XY","SAVRCA-H140/R1XY"
      ]
    },
    "Ducted Split": {
      outdoor: ["SPRL-018JA","SPRL-024JA","SPRL-036JA","SPRL-048JA","SPRL-060JA"],
      indoor: [
        "SSGN-018JA011","SSGN-024JA011","SSGN-030JA011","SSGN-036JA011",
        "SSGN-042EA011","SSGN-048EA011","SSGN-060EA011",
        "EH1T18","EH1T24","EH1T36","EH1T48","EH1T60"
      ]
    },
    "Wall Mount Split": {
      outdoor: [
        "RW12CRCT00","RW12CRHT00","RW18CRCT00","RW18CRHT00",
        "RW24CRCT00","RW24CRHT01","RW30CRCT00","RW30CRHT00",
        "RW36CRCT00","RW36CRHT00"
      ],
      indoor: ["(Matching indoor unit)"]
    },
    "Package": {
      outdoor: [
        "SLKL 90","SLKL 120","SLKL 150","SLKL 180","SLKL 240","SLKL 300",
        "SRSA 120","SRSA 180","SRSA 240","SRSA 300","SRSA 360","SRSA 420","SRSA 540",
        "VMRHRX072","VMRHRX096","VMRHRX120","VMRHRX170","VMRHRX190","VMRHRX240",
        "VMRHRX300","VMRHRX360"
      ],
      indoor: ["(Integrated - Package Unit)"]
    },
    "Cassette": {
      outdoor: ["(VRF Outdoor Unit)"],
      indoor: ["RC18CIHA01","RC24CIHA01","RC36CIHA01","RC42CIHA01"]
    },
    "Others": {
      outdoor: ["(Specify manually)"],
      indoor: ["(Specify manually)"]
    }
  }
};

const TECH_PARAMS = {
  "SPRL-018JA": { tonnage:"1.5 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"2.6 kg", ratedCurrentT1:"6.5 A", ratedCurrentT3:"7.75 A", powerInputT1:"1500 W", powerInputT3:"1800 W", capacityT1:"18500 BTU/h", capacityT3:"17500 BTU/h", eerT1:"12.35", eerT3:"9.70", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-024JA": { tonnage:"2.0 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"2.9 kg", ratedCurrentT1:"8.5 A", ratedCurrentT3:"9.6 A", powerInputT1:"1800 W", powerInputT3:"2150 W", capacityT1:"21600 BTU/h", capacityT3:"19200 BTU/h", eerT1:"12.0", eerT3:"8.95", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-036JA": { tonnage:"2.5 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"3.1 kg", ratedCurrentT1:"10.0 A", ratedCurrentT3:"11.65 A", powerInputT1:"2300 W", powerInputT3:"2700 W", capacityT1:"29200 BTU/h", capacityT3:"27800 BTU/h", eerT1:"12.7", eerT3:"9.85", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-048JA": { tonnage:"3.0 TR", voltage:"230V 1Ø", refrigerant:"R-410A", totalCharge:"4.0 kg", ratedCurrentT1:"16.0 A", ratedCurrentT3:"18.5 A", powerInputT1:"2750 W", powerInputT3:"3200 W", capacityT1:"33000 BTU/h", capacityT3:"30600 BTU/h", eerT1:"12.0", eerT3:"9.55", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" },
  "SPRL-060JA": { tonnage:"3.5 TR", voltage:"400V 3Ø", refrigerant:"R-410A", totalCharge:"4.4 kg", ratedCurrentT1:"7.65 A", ratedCurrentT3:"8.5 A", powerInputT1:"3310 W", powerInputT3:"4030 W", capacityT1:"39800 BTU/h", capacityT3:"36600 BTU/h", eerT1:"12.0", eerT3:"9.10", designPressureHigh:"450 PSIG", designPressureLow:"250 PSIG" }
};

// Blower current thresholds by model pattern
const BLOWER_THRESHOLDS = [
  { pattern: /EMRHRX(300|360)/i, threshold: 5, label: "EMRHRX300/360" },
  { pattern: /EMRHRX(170|190|240)/i, threshold: 4, label: "EMRHRX170/190/240" },
  { pattern: /VMRHRX(300|360)/i, threshold: 5, label: "VMRHRX300/360" },
  { pattern: /VMRHRX(170|190|240)/i, threshold: 4, label: "VMRHRX170/190/240" }
];

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

// ===== COMPREHENSIVE ERROR CODES — All Models from Service Guide =====
const ERROR_CODES = [

  // ── RSIN / RSON (Standard Ducted) ──
  { model_category:"Ducted", series:"RSIN / RSON", code:"E0",  description:"Communication Error — Display ↔ Base Controller",  action:"Check wiring between display and base PCB. Auto-resets after error cleared." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E1",  description:"Room Temperature Sensor Open",                      action:"Check sensor connector. Replace sensor if open circuit. Blower-only mode active." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E2",  description:"Room Temperature Sensor Short",                     action:"Check sensor cable for shorts. Replace sensor. Blower-only mode active." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E3",  description:"Anti-Freeze Coil Sensor Open",                      action:"Check anti-freeze sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E4",  description:"Anti-Freeze Coil Sensor Short",                     action:"Check anti-freeze sensor cable for shorts. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E5",  description:"Anti-Freeze Coil Temperature Below Set Point",      action:"Check refrigerant charge, airflow and filters. Verify AFT set-point." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E7",  description:"HP / LP / SPPR Lock-Out (3× in 1 hour)",            action:"Check HP/LP switch, refrigerant pressures. Manual Reset: press MODE+FAN 10 sec." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E8",  description:"Return Air Temperature Sensor Open",                action:"Check return-air sensor connector. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E9",  description:"Return Air Temperature Sensor Short",               action:"Check return-air sensor cable. Replace sensor." },
  { model_category:"Ducted", series:"RSIN / RSON", code:"E10", description:"Filter Clean Reminder (2000 hr runtime)",           action:"Clean or replace air filters. Reset filter timer via service menu." },

  // ── RIBL / RVBL (Ducted Inverter) ──
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E0",  description:"Communication Error — Display ↔ Base Controller",  action:"Check comms wiring between display and base PCB." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E1",  description:"Room Temperature Sensor Open",                      action:"Check/replace room temperature sensor and wiring." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E2",  description:"Room Temperature Sensor Short",                     action:"Check/replace room temperature sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E3",  description:"Anti-Freeze Temperature Sensor Open",               action:"Check/replace anti-freeze sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E4",  description:"Anti-Freeze Temperature Sensor Short",              action:"Check/replace anti-freeze sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E6",  description:"Gas Temperature Sensor Open",                       action:"Check/replace gas temperature sensor and wiring." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E7",  description:"Gas Temperature Sensor Short",                      action:"Check/replace gas temperature sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E8",  description:"Return Air Temperature Sensor Open",                action:"Check/replace return-air sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"E9",  description:"Return Air Temperature Sensor Short",               action:"Check/replace return-air sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"EA",  description:"Communication Error — IDU ↔ ODU",                   action:"Check A-B communication wiring. Check IDU controller and Ducted Master Controller/Drive." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"Ed",  description:"ODU HP / LP / DTS Trip — Manual Reset",             action:"Check HP/LP switch, refrigerant pressures, discharge temperature sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A0",  description:"DLT Sensor Failure",                                action:"Check/replace DLT sensor and wiring." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A1",  description:"Ambient Temperature Sensor Failure",                action:"Check/replace ambient sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A2",  description:"Mid-Coil Temperature Sensor Failure",               action:"Check/replace mid-coil sensor." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A4",  description:"High DLT Trip — Discharge Temp > 110°C",            action:"Check refrigerant charge, EXV, condenser airflow. Manual reset required." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A5",  description:"Compressor U-Phase Loss (3-phase)",                 action:"Check U-phase supply wiring. Power cycle after repair." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A6",  description:"Compressor V-Phase Loss (3-phase)",                 action:"Check V-phase supply wiring. Power cycle after repair." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A7",  description:"Compressor W-Phase Loss (3-phase)",                 action:"Check W-phase supply wiring. Power cycle after repair." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A8",  description:"Compressor Short Circuit (3-phase)",                action:"Check compressor terminals for short. Replace compressor if confirmed." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"A9",  description:"Drive Earth Fault (3-phase)",                      action:"Check insulation from drive output to earth. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b1",  description:"Compressor Overcurrent — Hardware (1-phase)",       action:"Power cycle. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b2",  description:"Inverter Compressor Overload",                     action:"Check compressor current vs RLA. Check condenser blockage." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b4",  description:"Compressor Motor ETR Error (3-phase)",             action:"Check compressor current. Check thermal protection. Replace drive if needed." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b5",  description:"Compressor Motor Thermal Error (3-phase)",         action:"Power cycle drive. Replace drive if issue persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b6",  description:"Drive Internal Fault (3-phase)",                   action:"Power cycle. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b8",  description:"Inverter IPM Overheat — IPM > 75°C (3-phase)",     action:"Check drive heatsink and cooling airflow." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"b9",  description:"Compressor Overcurrent — Firmware (1-phase)",      action:"Power cycle. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"bA",  description:"Compressor Step-Out / Start Error",                action:"Check capacitor (1-phase), supply voltage, compressor windings." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"C1",  description:"PFC Overcurrent — Hardware (1-phase)",             action:"Power cycle. Replace drive module if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"C2",  description:"PFC Overcurrent — Firmware (1-phase)",             action:"Power cycle. Replace drive module if fault persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"CF",  description:"Capacity Setting Error",                           action:"Verify capacity dip-switch on drive. Set correct capacity in IDU controller." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d2",  description:"DC Bus Under-Voltage (1-phase)",                   action:"Check supply voltage. Drive DC < 140V." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d3",  description:"DC Bus Over-Voltage (1-phase)",                    action:"Check supply voltage. Drive DC > 420V." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d6",  description:"IGBT High Temperature — > 100°C (1-phase)",        action:"Check drive heatsink. Power cycle. Replace drive if persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"d8",  description:"Drive Communication Abnormal (3-phase)",           action:"Check A-B comms wiring. Replace 3-phase inverter drive." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"dA",  description:"Instantaneous Voltage Drop (1-phase)",             action:"Check supply voltage stability. Power cycle." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"FP",  description:"Frozen Protection — Liquid Line < 2°C",            action:"Check airflow, filters, refrigerant charge, expansion valve." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U1",  description:"AC Bus Over-Voltage (1-phase)",                    action:"Check supply voltage. Exceeds 310V DC limit." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U2",  description:"AC Bus Under-Voltage (1-phase)",                   action:"Check supply voltage. Below 130V DC limit." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U5",  description:"Phase Loss / Voltage Imbalance (3-phase)",         action:"Check all 3 supply phases. Imbalance must be ≤2%. Power cycle after repair." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U6",  description:"Compressor Overcurrent (3-phase)",                 action:"Check compressor for mechanical fault. Replace drive if persists." },
  { model_category:"Ducted", series:"RIBL / RVBL Inverter", code:"U9",  description:"High Condensing Temp — Coil Mid > 66°C",           action:"Clean condenser coil/fins. Check outdoor fan. Check ambient temperature." },

  // ── RIAL / RVAL (Heat Pump Inverter) ──
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A1",  description:"Indoor Room Temperature Sensor Fault",          action:"Check sensor wiring. Replace sensor or indoor main PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A2",  description:"Evaporator Mid-Coil Temperature Sensor Fault",  action:"Check sensor wiring. Replace sensor or indoor PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A3",  description:"Indoor Liquid Pipe Temperature Sensor Fault",   action:"Check liquid-pipe sensor wiring. Replace sensor or main PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A4",  description:"Indoor Gas Pipe Temperature Sensor Fault",      action:"Check gas-pipe sensor wiring. Replace sensor or main PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A5",  description:"Drainage Fault / Float Switch",                 action:"Check drain pipe for blockage. Check pump and float switch wiring." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A6",  description:"Indoor Fan Motor Fault",                        action:"Check fan motor wiring and capacitor. Replace motor or main PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A8",  description:"Indoor EEPROM Module Failure",                  action:"Replace indoor PCB or EEPROM module." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"A9",  description:"Communication Failure — IDU ↔ ODU",             action:"Check communication wiring between units. Check power supply and PCBs." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"AA",  description:"Communication Failure — IDU ↔ Wired Controller", action:"Check controller wiring. Replace controller or main PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"C1",  description:"ODU Ambient Temperature Sensor Fault",          action:"Check ODU ambient sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"C2",  description:"Defrost Temperature Sensor Fault (ODU)",        action:"Check defrost sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"C3",  description:"Discharge Temperature Sensor Fault (ODU)",      action:"Check discharge sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"C6",  description:"Suction Temperature Sensor Fault (ODU)",        action:"Check suction sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"C8",  description:"ODU Condenser Mid-Coil Temperature Sensor Fault", action:"Check condenser sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"E1",  description:"4-Way Valve Fault",                            action:"Check 4-way valve coil and wiring. Replace valve." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"H1",  description:"High Pressure Switch Fault",                   action:"Check HP switch, refrigerant charge, condenser coil/fan, expansion valve." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"H4",  description:"Low Pressure Switch Fault",                    action:"Check LP switch, refrigerant charge. Confirm service valves fully open." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"J2",  description:"Communication Error — IDU ↔ ODU",              action:"Check wiring. Replace indoor or outdoor PCB." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"J3",  description:"Driver PCB ↔ Outdoor Main PCB Comm Error",     action:"Check driver PCB and main PCB wiring. Replace faulty board." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"31",  description:"Inverter Module Protection Fault",              action:"Check drive module and supply voltage. Replace if faulty." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"34",  description:"Compressor Start Failure",                     action:"Check compressor power wiring and supply voltage." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"35",  description:"Compressor Over-Current Protection",           action:"Check current levels and supply voltage stability." },
  { model_category:"Ducted", series:"RIAL / RVAL Heat Pump", code:"36",  description:"Over/Under Voltage Protection",                 action:"Check supply voltage is within spec. Replace drive module if needed." },

  // ── EMRHR Commercial Package ──
  { model_category:"Commercial", series:"EMRHR Package", code:"0",   description:"Standby — Normal",                              action:"No fault. Normal standby state." },
  { model_category:"Commercial", series:"EMRHR Package", code:"20",  description:"Low Pressure Switch Open — Circuit 1",          action:"Check refrigerant charge, LP switch Circuit 1. Auto-reset (3× then lockout)." },
  { model_category:"Commercial", series:"EMRHR Package", code:"21",  description:"Low Pressure Switch Open — Circuit 2",          action:"Check refrigerant charge, LP switch Circuit 2. Auto-reset (3× then lockout)." },
  { model_category:"Commercial", series:"EMRHR Package", code:"29",  description:"High Pressure Switch Open — Circuit 1",         action:"Check HP switch Circuit 1. Check condenser coil and fan. Lockout after 3 events." },
  { model_category:"Commercial", series:"EMRHR Package", code:"30",  description:"High Pressure Switch Open — Circuit 2",         action:"Check HP switch Circuit 2. Check condenser coil and fan." },
  { model_category:"Commercial", series:"EMRHR Package", code:"42",  description:"Invalid Thermostat Signal",                     action:"Check thermostat wiring and compatibility." },
  { model_category:"Commercial", series:"EMRHR Package", code:"49",  description:"Freeze Switch Open — Circuit 1",                action:"Check evaporator coil, airflow, filters, freeze switch wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"50",  description:"Freeze Switch Open — Circuit 2",                action:"Check evaporator coil, airflow, filters, freeze switch wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"59",  description:"Water Sensed — Shutdown",                       action:"Check condensate drain and trap. Check for coil icing. Clean drain pan." },
  { model_category:"Commercial", series:"EMRHR Package", code:"83",  description:"Coil 1 Temperature Sensor Fail",                action:"Check/replace coil sensor 1 and wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"84",  description:"Outdoor Air Temperature Sensor Fail",           action:"Check/replace outdoor temperature sensor." },
  { model_category:"Commercial", series:"EMRHR Package", code:"85",  description:"Coil 2 Temperature Sensor Fail",                action:"Check/replace coil sensor 2 and wiring." },
  { model_category:"Commercial", series:"EMRHR Package", code:"88",  description:"Emergency Stop Fault",                          action:"Check emergency stop input wiring. Reset after fault cleared." },
  { model_category:"Commercial", series:"EMRHR Package", code:"93",  description:"Control Board Fault",                           action:"Check control board wiring. Replace board if fault confirmed." },
  { model_category:"Commercial", series:"EMRHR Package", code:"97",  description:"Smoke Detection",                              action:"Check smoke detector wiring and sensor. Reset after area is clear." },

  // ── SRHA Package ──
  { model_category:"Commercial", series:"SRHA Package", code:"D3,D4 Fast Blink", description:"High Pressure Switch Activated",   action:"Check condenser coil for blockage, outdoor fan, refrigerant overcharge." },
  { model_category:"Commercial", series:"SRHA Package", code:"D3,D4 Slow Blink", description:"Low Pressure Switch Activated",    action:"Check refrigerant charge. Inspect LP1/LP2 switch. Check for refrigerant leak." },
  { model_category:"Commercial", series:"SRHA Package", code:"D1,D2 Blinking",   description:"Compressor Recovering",           action:"Wait for compressor recovery timer. Normal protection." },
  { model_category:"Commercial", series:"SRHA Package", code:"D1,D2 Steady ON",  description:"Compressor Locked Out",           action:"Investigate root cause (pressure fault, overcurrent). Manual reset." },

  // ── RNTA Condensing Units ──
  { model_category:"Commercial", series:"RNTA Condensing", code:"HP SYS1 ERR",   description:"High Pressure Fault — System 1",  action:"Check HP switch, refrigerant charge, condenser airflow. Auto-reset." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"HP SYS2 ERR",   description:"High Pressure Fault — System 2",  action:"Check HP switch, refrigerant charge, condenser. Auto-reset." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"LP SYS1 ERR",   description:"Low Pressure Fault — System 1",   action:"Check refrigerant charge, LP switch, stop valves. Auto-reset ×3 then manual." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"HI CURRENT SYS1", description:"High Current — Compressor 1",  action:"Check supply voltage, compressor health. Auto-reset ×3 then manual." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"HI CURRENT SYS2", description:"High Current — Compressor 2",  action:"Check supply voltage, compressor health. Auto-reset ×3 then manual." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"HI DLT SYS1",   description:"High Discharge Line Temp — Sys 1", action:"Check refrigerant charge, condenser airflow, DLT sensor. Auto-reset ×3 then manual." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"HI DLT SYS2",   description:"High Discharge Line Temp — Sys 2", action:"Same as SYS1. Auto-reset ×3 then manual." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"AMB PROBE",      description:"Ambient Probe Fault",              action:"Check ambient probe wiring. Replace probe." },
  { model_category:"Commercial", series:"RNTA Condensing", code:"DLT FAULT",      description:"DLT Probe Short/Open",             action:"Check DLT probe wiring. Replace probe." },

  // ── VRF Modular C Series ──
  { model_category:"VRF", series:"VRF Modular C Series", code:"A1",  description:"Indoor Ambient Temperature Sensor Failure",   action:"Check IDU PCB fuse, sensor wiring. Replace sensor or PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A2",  description:"Mid-Evaporator Temperature Sensor Failure",   action:"Check IDU PCB fuse, sensor wiring. Replace sensor or PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A3",  description:"Evaporator Inlet Temperature Sensor Failure",  action:"Check sensor resistance. Replace if outside range." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A4",  description:"Evaporator Outlet Temperature Sensor Failure", action:"Check sensor. Replace if resistance outside range." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A5",  description:"Indoor Water Pump Failure",                    action:"Check pump power, switch wiring, drain blockage." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A6",  description:"Indoor PG Fan Motor Failure",                  action:"Check fan motor wiring and blockage. Replace motor or PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A7",  description:"Reversible Synchronous (Louver) Motor Failure", action:"Check step motor and PCB connection. Replace if faulty." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A8",  description:"Indoor EEPROM Module Failure",                 action:"Replace indoor PCB or EEPROM module." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A9",  description:"Communication Failure — IDU ↔ ODU",            action:"Check comms wiring between units. Check power and PCBs." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AA",  description:"Communication Failure — IDU ↔ Wired Controller", action:"Check controller wiring. Replace controller or IDU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AC",  description:"Central Control Address Conflict",             action:"Check and correct central control address settings on all IDUs." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AE",  description:"Operation Mode Conflict",                     action:"Correct system address settings." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AH",  description:"Refrigerant System Address Repeated",         action:"Stop some indoor units. Correct address settings." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AJ",  description:"Indoor Unit Total Capacity Exceeded",         action:"Stop some IDUs. Check EXV and sensors." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"AF",  description:"EXV Leakage",                                 action:"Inspect EXV. Replace if leaking." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"A0",  description:"EXV Open Failure",                            action:"Check EXV coil and valve body. Replace if needed." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C1",  description:"Outdoor Ambient Sensor (Tao) Fault",          action:"Check ODU ambient sensor and wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C2",  description:"Defrost Sensor (Tdef1) Fault",                action:"Check defrost sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C3",  description:"Compressor 1 Discharge Temp Sensor Fault",    action:"Check discharge sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C4",  description:"Compressor 2 Discharge Temp Sensor Fault",    action:"Check discharge sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C6",  description:"Suction Temperature Sensor Fault",            action:"Check suction sensor wiring. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"C9",  description:"Condenser Outlet Temp Sensor (Tho1) Fault",   action:"Check condenser outlet sensor. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"E1",  description:"4-Way Valve Fault",                           action:"Check 4-way valve coil and wiring. Replace valve." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"E3",  description:"Compressor 1 Discharge Temp Too High",        action:"Check refrigerant charge, EXV, expansion valve, condenser airflow." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"E4",  description:"Compressor 2 Discharge Temp Too High",        action:"Check refrigerant charge, EXV, stop valves." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F1",  description:"High Pressure Sensor (Pd) Failure",           action:"Check HP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F3",  description:"High Pressure (Pd) Protection",               action:"Check HP, condenser coil/fan, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F4",  description:"Low Pressure Sensor (Ps) Failure",            action:"Check LP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F6",  description:"Low Pressure (Ps) Too Low",                   action:"Check indoor fan, evaporator, EXV, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F8",  description:"Compression Ratio Too High",                  action:"Check stop valves, condenser, EXV, refrigerant charge." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"F9",  description:"Compression Ratio Too Low",                   action:"Check 4-way valve, condenser, pressure sensor, refrigerant." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"FH",  description:"Discharge Temperature Too Low",               action:"Check compressor operation. Unrecoverable — confirm root cause." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"H1",  description:"HP Switch Failure",                           action:"Check HP switch, refrigerant, fans, stop valves." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"H5",  description:"Refrigerant Shortage",                        action:"Check for leaks. Repair and recharge." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"HF",  description:"Oil Shortage Fault",                          action:"Check oil temp sensor. Replace capillary if blocked. Add oil." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"HJ",  description:"Main Power Failure",                          action:"Tighten terminal wiring. Correct phase sequence. Replace outdoor PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J1",  description:"Communication Between ODUs Failure",          action:"Check communication wiring between outdoor units. Replace PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J2",  description:"Communication — ODU ↔ IDU Failure",           action:"Check IDU-ODU communication wiring. Replace PCBs as needed." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J3",  description:"PCB ↔ INV Module Communication Failure",      action:"Check drive-to-PCB connection. Replace drive module or main PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J4",  description:"PCB ↔ DC Fan Motor Drive Failure",            action:"Check DC fan motor drive module and PCB wiring." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J5",  description:"ODU Parameter Setting Incorrect",             action:"Check dial switch settings. Replace main PCB if needed." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"J7",  description:"ODU Main PCB EEPROM Failure",                 action:"Replace main PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"JJ",  description:"Indoor Total Capacity Exceeding (>130%)",     action:"Reduce total IDU capacity to within 130% of ODU." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"47",  description:"Indoor Unit Loss Failure",                    action:"Check IDU communication wiring and power. Replace IDU PCB." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"31",  description:"Drive Module IPM Protection (F0)",            action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"32",  description:"Drive Module Hardware Protection",            action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"33",  description:"Drive Module Software Protection",            action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"34",  description:"Compressor Unconnected",                      action:"Check compressor wiring terminals. Replace drive if needed." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"35",  description:"Compressor Phase Current Overload",           action:"Check compressor and drive board. Replace faulty component." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"36",  description:"Drive Module Current Failure",                action:"Check supply voltage. Replace drive." },
  { model_category:"VRF", series:"VRF Modular C Series", code:"38",  description:"Drive Module Temperature Failure",            action:"Check cooling. Replace drive." },

  // ── RVBG Inverter ──
  { model_category:"Ducted", series:"RVBG Inverter", code:"E0",  description:"Communication Error — Display ↔ Base Controller (30 sec)", action:"Check wiring between display PCB and base controller. Reconnect." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E1",  description:"Room Temperature Sensor Open",                            action:"Check sensor wiring and connector. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E2",  description:"Room Temperature Sensor Short",                           action:"Check for pinched cable. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E3",  description:"Anti-Freeze Sensor Open",                                action:"Check anti-freeze sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E4",  description:"Anti-Freeze Sensor Short",                               action:"Replace anti-freeze sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E6",  description:"Gas Temperature Sensor Open",                            action:"Check gas temp sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E7",  description:"Gas Temperature Sensor Short",                           action:"Replace gas temp sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E8",  description:"Return Air Temperature Sensor Open",                     action:"Check return-air sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"E9",  description:"Return Air Temperature Sensor Short",                    action:"Replace return-air sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EA",  description:"Communication Error — IDU ↔ ODU (40 sec timeout)",       action:"Check A-B communication wiring. Check IDU controller and ODU Master." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FS",  description:"Float Switch Error — Sensor Open or Short",              action:"Check float switch wiring. Replace switch if faulty. Check drain line." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C6",  description:"IDU BLDC Fan Motor Error (Auto-reset ×3)",               action:"Check fan motor wiring. Check for blade obstruction. Replace motor if needed." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C7",  description:"IDU BLDC Fan Motor Error (4th time — Manual Reset)",     action:"Replace IDU BLDC fan motor or main PCB." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C8",  description:"IDU EE (EEPROM) Fault — IDU Power Reset",                action:"Replace IDU PCB or EEPROM module." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"UA",  description:"External Refrigerant Leak Sensor — Manual Reset",        action:"Check refrigerant leak sensor and wiring. Inspect system for leaks." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EC",  description:"ODU High Pressure Switch Protection (Auto ×3)",          action:"Check HP switch, refrigerant charge, condenser fan and coil." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"A3",  description:"Discharge Temp High Protection (Auto ×3)",               action:"Check refrigerant charge and discharge temperature sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"d9",  description:"Compressor Phase Current Protection (Auto ×3)",          action:"Check supply voltage and compressor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U4",  description:"ODU AC Current Protection (Auto ×3)",                    action:"Check supply voltage and compressor current." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U7",  description:"IDU Coil Freezing Protection (Auto ×3)",                 action:"Check airflow and refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U8",  description:"ODU Coil Overheat Protection (Auto ×3)",                 action:"Check condenser fan and coil cleanliness." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C3",  description:"ODU DC Fan Motor Fault (Auto ×3)",                       action:"Check fan motor wiring and operation." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EE",  description:"Low Pressure Switch Protection (Auto ×3)",               action:"Check LP switch and refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"Eb",  description:"Abnormal Communication — IDU Not Responding to ODU",     action:"Check A-B wiring between IDU and ODU. Replace IDU controller if needed." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"Ed",  description:"High Pressure Switch Protection (4th — Manual Reset)",   action:"Check HP switch, refrigerant pressure, condenser coil and fan." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"A0",  description:"Discharge Temperature Sensor Fault",                    action:"Check discharge sensor wiring. Replace sensor." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"A1",  description:"ODU Ambient Temperature Sensor Fault",                  action:"Check ODU ambient sensor. Replace if faulty." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"A2",  description:"ODU Coil Temperature Sensor Fault",                     action:"Check ODU coil sensor. Replace if faulty." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"A4",  description:"Discharge Temp High Protection (4th — Manual Reset)",   action:"Check refrigerant charge, EXV, condenser airflow." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FP",  description:"IDU Coil Freezing Protection (4th — Manual Reset)",     action:"Check airflow, filters, refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"CF",  description:"Capacity Setting Error",                                action:"Set correct capacity in IDU controller." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"d2",  description:"DC Bus Under-Voltage Error",                            action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"d3",  description:"DC Bus Over-Voltage Error",                             action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"d6",  description:"IPM Temperature Over-High Protection",                 action:"Check drive heatsink cooling. Power cycle. Replace drive if needed." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"b9",  description:"Compressor Phase Current Protection (4th — Manual Reset)", action:"Check compressor and drive. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"bA",  description:"Compressor Starting Abnormal / Out-of-Step",            action:"Check capacitor, supply voltage, compressor windings." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"b2",  description:"Drive Phase Current High Fault",                        action:"Check compressor current vs RLA. Replace drive if fault persists." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U1",  description:"ODU AC Voltage Over-High Protection",                   action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U2",  description:"ODU AC Voltage Over-Low Protection",                    action:"Check supply voltage level." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C2",  description:"ODU AC Current Protection (4th — Manual Reset)",        action:"Check supply voltage and compressor. Replace drive." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"U9",  description:"ODU Coil Overheat Protection (4th — Manual Reset)",     action:"Clean condenser coil. Check fan operation." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C4",  description:"ODU DC Fan Motor Fault (4th — Manual Reset)",           action:"Check fan motor and drive. Replace if faulty." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"C5",  description:"ODU EE (EEPROM) Fault — ODU Power Reset",               action:"ODU power reset. Replace ODU PCB if fault persists." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"L4",  description:"Phase Current Sampling Fault",                         action:"ODU power reset. Replace ODU PCB if fault persists." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"FC",  description:"Refrigerant Leak Detection",                           action:"Check for refrigerant leaks. Repair and recharge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"EF",  description:"Low Pressure Switch Protection (4th — Manual Reset)",  action:"Check LP switch and refrigerant charge." },
  { model_category:"Ducted", series:"RVBG Inverter", code:"dE",  description:"IPM Module Fault (4th — Manual Reset)",                action:"Power cycle. Replace drive module if fault persists." },

  // ── SAVR B VRF Outdoor ──
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C1",  description:"Ambient Sensor 'Tao' Failure",                     action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C2",  description:"Defrost Sensor 'Tdef1' Failure",                   action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C3",  description:"Inverter Compressor Exhaust Sensor 'Tdi' Failure", action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C4",  description:"Fixed Comp No.1 Exhaust Sensor 'Td1' Failure",    action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C5",  description:"Fixed Comp No.2 Exhaust Sensor 'Td2' Failure",    action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C6",  description:"Suction Pipe Sensor 'Ts' Failure",                action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C7",  description:"Inverter Compressor Suction Sensor 'Tsi' Failure", action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"C8",  description:"Condenser Mid-Position Sensor 'Tc1' Failure",     action:"Check sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F1",  description:"High Pressure Sensor 'Pd' Failure",               action:"Check HP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F2",  description:"High Pressure Sensor 'Pd' Limit Frequency",       action:"Check condenser for blockage, outdoor fan, refrigerant charge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F3",  description:"High Pressure Sensor 'Pd' Protection",            action:"Check condenser coil, outdoor fan, refrigerant charge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F4",  description:"Low Pressure Sensor 'Ps' Failure",                action:"Check LP sensor connection. Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F5",  description:"Low Pressure Limit Frequency Protection",         action:"Check indoor fan, evaporator, EXV, refrigerant charge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"F6",  description:"Low Pressure Protection",                         action:"Check indoor fan, evaporator, EXV, refrigerant charge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H1",  description:"HP Switch 'HPSi' Failure (Inverter Comp)",        action:"Check HP limit, HP switch, stop valves, outdoor fan." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H2",  description:"HP Switch 'HPS1' Failure (Fixed Comp 1)",         action:"Check HP switch, stop valves, outdoor fan, indoor EXV (heating mode)." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H3",  description:"HP Switch 'HPS2' Failure (Fixed Comp 2)",         action:"Check HP switch, stop valves, outdoor fan, indoor EXV (heating mode)." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H4",  description:"Low Pressure Switch 'LPS' Failure",               action:"Check LP switch, stop valves, EXV, outdoor fan (heating mode)." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H5",  description:"Refrigerant Shortage",                            action:"Check for leaks. Repair and recharge." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H6",  description:"Inverter Comp Current Overload Limit Frequency",  action:"Check power supply." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H7",  description:"Inverter Comp Current Overload Protection",       action:"Check power supply." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H8",  description:"Fixed Comp 1 Over-Current Protection",            action:"Check stop valve, air outlet, supply voltage, compressor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"H9",  description:"Fixed Comp 2 Over-Current Protection",            action:"Check stop valve, air outlet, supply voltage, compressor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HA",  description:"AC Power Under-Voltage Protection",               action:"Check supply voltage, phase, wiring." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HC",  description:"Fixed Comp 1 Phase Incorrect",                   action:"Check power wire on fixed-speed compressor 1. Check ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HH",  description:"Fixed Comp 2 Phase Incorrect",                   action:"Check power wire on fixed-speed compressor 2. Check ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HE",  description:"AC Power Overvoltage Protection",                 action:"Check supply voltage (15% above rated)." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"HJ",  description:"Main Power Failure — Phase Reversal / Phase Lack", action:"Check supply phase sequence. Replace ODU PCB if needed." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E1",  description:"4-Way Valve Failure",                            action:"Check 4-way valve coil and PCB connection. Replace valve." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E2",  description:"Inverter Comp Exhaust Temp 'Tdi' Limit Frequency", action:"Compressor auto-slows. Check refrigerant, suction port." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E3",  description:"Inverter Comp Exhaust Temp 'Tdi' Over Protection",  action:"Check refrigerant charge, EXV, stop valves, exhaust sensor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E4",  description:"Fixed Comp 1 Exhaust Temp 'Td1' Over Protection",   action:"Check refrigerant charge, EXV, stop valves, exhaust sensor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"E5",  description:"Fixed Comp 2 Exhaust Temp 'Td2' Over Protection",   action:"Check refrigerant charge, EXV, stop valves, exhaust sensor." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J1",  description:"Communication Between ODUs Failure",              action:"Check communication wiring between ODUs. Replace ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J2",  description:"ODU ↔ IDU Communication Failure",                 action:"Check IDU-ODU communication wiring. Replace PCBs as needed." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J3",  description:"PCB ↔ INV Module Communication Failure",         action:"Check drive-to-PCB connection. Replace drive or PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J5",  description:"ODU Parameter Setting Incorrect",                action:"Check dial switch settings. Replace main PCB if needed." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"J7",  description:"ODU Main PCB EEPROM Failure",                    action:"Replace main PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"31",  description:"Drive Module IPM Protection (F0)",               action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"32",  description:"Drive Module Hardware Protection",               action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"33",  description:"Drive Module Software Protection",               action:"Check supply voltage and outdoor fan. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"34",  description:"Compressor Unconnected",                         action:"Check compressor wiring. Replace drive if needed." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"35",  description:"Compressor Phase Current Overload",              action:"Check compressor and drive board. Replace faulty component." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"36",  description:"Drive Module Current Failure",                   action:"Check supply voltage. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"37",  description:"Drive Module Temperature Alarm",                 action:"Replace inverter drive board." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"38",  description:"Drive Module Temperature Failure",               action:"Check cooling. Replace drive." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"45",  description:"Defrost Sensor 'Tdef2' Failure",                 action:"Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"46",  description:"Condenser Mid-Position Sensor 'Tc2' Failure",    action:"Replace sensor or ODU PCB." },
  { model_category:"VRF", series:"SAVR B VRF Outdoor", code:"47",  description:"Indoor Unit Loss Failure",                       action:"Check IDU communication wiring and power. Replace IDU PCB." },

  // ── Mini Split: RW Rotary ──
  { model_category:"Mini Split", series:"RW Rotary", code:"E0", description:"IDU / ODU Communication Failure",          action:"Check comms wiring between IDU and ODU." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E1", description:"Indoor Temperature Sensor Fault",          action:"Check resistance/connector. RUN lamp flashes 1×." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E2", description:"Indoor Pipe Temperature Sensor Fault",     action:"Check sensor wiring. RUN lamp flashes 2×." },
  { model_category:"Mini Split", series:"RW Rotary", code:"E6", description:"Indoor Fan Motor Malfunction",             action:"Check fan motor and DC voltage. RUN lamp flashes 6×." },

  // ── Mini Split: RW Inverter ──
  { model_category:"Mini Split", series:"RW Inverter", code:"E0",  description:"IDU / ODU Communication Failure",          action:"Check IDU wiring, comms wiring and ODU power. Replace PCB if needed." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E1",  description:"IDU Room Temperature Sensor (RT) Failure",  action:"Check IDU sensor and PCB. Replace sensor if resistance abnormal." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E2",  description:"IDU Coil Temperature Sensor (IPT) Failure", action:"Check IDU coil sensor and PCB. Replace if faulty." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E3",  description:"ODU Coil Temperature Sensor (OPT) Failure", action:"Check ODU coil sensor and ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E4",  description:"AC Cooling System Abnormal — Gas Shortage",  action:"Check refrigerant charge. Confirm 2-way and 3-way valves fully open." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E6",  description:"IDU Fan Motor / DC Fan Motor Failure",       action:"Check fan motor, blade, and IDU PCB. Replace faulty component." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E7",  description:"ODU Ambient Temperature Sensor Failure",     action:"Check ODU ambient sensor and ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E8",  description:"ODU Discharge Temperature Sensor Failure",   action:"Check ODU discharge sensor and ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"E9",  description:"IPM / Compressor Drive Abnormal",            action:"Check ODU PCB, compressor windings, and drive module." },
  { model_category:"Mini Split", series:"RW Inverter", code:"EA",  description:"ODU Current Test Circuit Failure",           action:"Replace ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"EE",  description:"ODU EEPROM Failure",                         action:"Power cycle. Replace ODU PCB if fault persists." },
  { model_category:"Mini Split", series:"RW Inverter", code:"EF",  description:"ODU DC Fan Motor Failure",                   action:"Check ODU fan motor and ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"EU",  description:"ODU Voltage Test Circuit Abnormal",          action:"Verify ODU terminal L/N voltage > 50V. Replace ODU PCB if OK but fault persists." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P0",  description:"IPM Module Protection",                     action:"Check U/V/W wiring, compressor, fan, refrigerant charge. Clean condenser." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P1",  description:"Over / Under Voltage Protection",            action:"Check supply voltage (220V ±10%). Check ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P2",  description:"Over-Current Protection",                   action:"Check ODU fan motor. Clean IDU filter or condenser." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P4",  description:"ODU Discharge Pipe Over-Temperature",        action:"Check refrigerant charge, expansion valve, condenser ventilation." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P5",  description:"Sub-Cooling Protection (Cooling Mode)",      action:"Clean IDU filter, check airflow, inspect fan motor." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P6",  description:"Overheating Protection (Cooling Mode)",      action:"Check ODU fan motor, OPT sensor. Replace sensor or ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P7",  description:"Overheating Protection (Heating Mode)",      action:"Check ODU fan motor, IPT sensor. Replace sensor or IDU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P8",  description:"Outdoor Over / Under Temperature Protection", action:"Verify ambient temp within spec. Check ODU ventilation." },
  { model_category:"Mini Split", series:"RW Inverter", code:"P9",  description:"Compressor Driving Protection — Load Abnormal", action:"Check U/V/W compressor wire sequence. Restart after 3 min. Replace PCB or compressor." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F4",  description:"Cooling System Gas Flow Abnormal",           action:"Open stop valves. Check IPT sensor. Replace sensor if faulty." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F5",  description:"PFC Overcurrent Protection",                 action:"Power cycle. Replace ODU PCB if recurring." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F6",  description:"Compressor Phase Lack / Anti-Phase",         action:"Check supply phases and phase rotation. Check drive connections." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F7",  description:"Drive Module Temperature Protection",        action:"Clean dust between IPM and heat sink. Check running current." },
  { model_category:"Mini Split", series:"RW Inverter", code:"F8",  description:"4-Way Valve Reversing Abnormal",             action:"Check 4-way valve wiring and coil. Replace valve coil or ODU PCB." },
  { model_category:"Mini Split", series:"RW Inverter", code:"Fy",  description:"Gas Leakage Protection",                    action:"Inspect pipe connections for leaks. Repair and recharge." },

  // ── RC Cassette ──
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"E1", description:"Indoor Environment Sensor Failure",   action:"Replace faulty sensor. System auto-recovers." },
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"E2", description:"Indoor Evaporator Sensor Failure",    action:"Replace faulty sensor." },
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"E3", description:"Outdoor Condenser Sensor Failure",   action:"Replace outdoor sensor. Check wiring." },
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"E4", description:"Outdoor Unit Protection — HP/LP Trip", action:"Check connections IDU↔ODU. Check gas leakage and recharge. Check outdoor ventilation." },
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"Ed", description:"Indoor PCB EEPROM Comm Failure",      action:"Check/repair wiring IDU↔ODU. Power cycle to recover." },
  { model_category:"Mini Split", series:"RC Cassette 18–36K", code:"d3", description:"Full Water Alarm — Float Switch",     action:"Check float switch and drain pump. Replace faulty part." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"E0", description:"IDU ↔ ODU Communication Failure",     action:"Check cable connections between IDU and ODU terminals." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"E6", description:"Indoor Fan Fault",                    action:"Check indoor fan motor and wiring." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"E7", description:"Outdoor Temperature Sensor Fault",   action:"Replace outdoor ambient sensor." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"H1", description:"High Pressure Protection",            action:"Check condenser, refrigerant charge, HP switch." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"H2", description:"Low Pressure Protection",             action:"Check refrigerant charge and LP switch." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"P2", description:"Overload / Current Protection",       action:"Check supply voltage, compressor, and fan." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"P6", description:"Overheating Protection (Cooling)",    action:"Check condenser ventilation and cleanliness." },
  { model_category:"Mini Split", series:"RC Cassette 48K",    code:"P7", description:"Overheating Protection (Heating)",    action:"Check indoor coil sensor and airflow." },

  // ── RDMA Wall Mount ──
  { model_category:"Mini Split", series:"RDMA Wall Mount 12–28K", code:"F1", description:"Indoor Ambient Sensor Open/Short",     action:"Check sensor wiring terminal. Check resistance (~5kΩ at 25°C). Replace sensor or main board." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 12–28K", code:"F2", description:"Indoor Evaporator Sensor Open/Short",  action:"Check sensor terminal. Check resistance. Replace sensor or main board." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 12–28K", code:"H6", description:"PG Motor (Indoor Fan) Not Operating",  action:"Check PG motor connections, fan blade smoothness, motor installation. Replace motor if damaged." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 12–28K", code:"C5", description:"Jumper Cap Protection Fault",          action:"Check jumper cap presence and seating. Replace jumper cap or controller." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 12–28K", code:"U8", description:"PG Motor Zero-Cross Detection Fault",  action:"Replace controller (main PCB damaged)." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"E1", description:"IDU ↔ ODU Communication Failure",      action:"Check communication wiring. Replace PCB if needed." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"E2", description:"T1 Room Temperature Sensor Fault",     action:"Replace T1 sensor." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"E3", description:"T2 Indoor Coil Sensor Fault",          action:"Replace T2 sensor." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"E7", description:"Indoor EEPROM Fault",                  action:"Replace indoor PCB." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"E8", description:"Indoor Fan Speed Out of Control",      action:"Power cycle. Check fan rotation and wiring. Replace fan motor or main PCB." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"EC", description:"Refrigerant Leakage Detection",        action:"Inspect all refrigerant pipe connections. Locate and repair leak. Recharge system." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"Ed", description:"Outdoor Unit Malfunction",             action:"Check outdoor unit. Inspect for specific outdoor fault codes." },
  { model_category:"Mini Split", series:"RDMA Wall Mount 36K",    code:"EE", description:"Water Level Alarm Fault",              action:"Check drain pan, water level sensor. Clear drain obstruction." },

  // ── SDMB Wall Mount ──
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"DF", description:"Defrost Indication (Normal)",           action:"Normal defrost cycle. Auto-clears when defrost completes." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E2", description:"Room Temperature Sensor Fault",         action:"Check sensor resistance (~5kΩ at 25°C). Check wiring for short/open. Replace sensor or control board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E3", description:"Coil Temperature Sensor Fault",         action:"Check sensor resistance. Check wiring. Replace sensor or control board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E4", description:"Outdoor Unit Abnormal",                 action:"Check compressor current, refrigerant pressure, coil sensor, condenser cleanliness, fan capacitor." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E5", description:"No Feedback Signal from Indoor PG Fan", action:"Reinsert motor plugs firmly. Check motor windings. Replace controllable silicon or control board." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E6", description:"No Zero-Cross Signal from PG Motor",    action:"Check indoor fan is normal. Replace electric control board if signal output is abnormal." },
  { model_category:"Mini Split", series:"SDMB Wall Mount", code:"E7", description:"Outdoor Feedback Fault",               action:"Check indoor/outdoor wiring per circuit diagram. Secure connector contacts. Check supply power phase." }
];
