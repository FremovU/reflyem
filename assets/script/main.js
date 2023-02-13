'use strict';
const FiE_GV_IncreaseCostEvery = 25;
const FiE_GV_CostLPMult = 1;
const FiE_GV_CostGoldMult = 60;


let result = document.getElementById('result');

let raceArgo = document.getElementById('raceArgo');
let raceOrc = document.getElementById('raceOrc');
let raceNord = document.getElementById('raceNord');
let raceRedgarc = document.getElementById('raceRedgarc');
let raceDanmer = document.getElementById('raceDanmer');
let raceImperec = document.getElementById('raceImperec');
let raceBosmer = document.getElementById('raceBosmer');
let raceCatjit = document.getElementById('raceCatjit');
let raceAltmer = document.getElementById('raceAltmer');
let raceBreton = document.getElementById('raceBreton');

// warrior
let Blacksmith = document.getElementById('Blacksmith');
let OneHandedWeapon = document.getElementById('OneHandedWeapon');
let HeavyArmor = document.getElementById('HeavyArmor');
let TwoHandedWeapon = document.getElementById('TwoHandedWeapon');
let Shooting = document.getElementById('Shooting');
let Blocking = document.getElementById('Blocking');
// warrior

// thief
let Evasion = document.getElementById('Evasion');
let Stealth = document.getElementById('Stealth');
let Breaking = document.getElementById('Breaking');
let Pickpocketing = document.getElementById('Pickpocketing');
let Speech = document.getElementById('Speech');
let Alchemy = document.getElementById('Alchemy');
// thief

// mage
let Illusion = document.getElementById('Illusion');
let Destruction = document.getElementById('Destruction');
let Witchcraft = document.getElementById('Witchcraft');
let Recovery = document.getElementById('Recovery');
let Change = document.getElementById('Change');
let Enchantment = document.getElementById('Enchantment');
// mage

//stone
let stoneWarrior = document.getElementById('stoneWarrior');
let stoneMage = document.getElementById('stoneMage');
let stoneThif = document.getElementById('stoneThif');
//

// Значение до которого вы хотите повысить навык воин
let BlacksmithValue = document.getElementById('BlacksmithValue');
let OneHandedWeaponValue = document.getElementById('OneHandedWeaponValue');
let HeavyArmorValue = document.getElementById('HeavyArmorValue');
let TwoHandedWeaponValue = document.getElementById('TwoHandedWeaponValue');
let ShootingValue = document.getElementById('ShootingValue');
let BlockingValue = document.getElementById('BlockingValue');

// Значение до которого вы хотите повысить навык вор
let EvasionValue = document.getElementById('EvasionValue');
let StealthValue = document.getElementById('StealthValue');
let BreakingValue = document.getElementById('BreakingValue');
let PickpocketingValue = document.getElementById('PickpocketingValue');
let SpeechValue = document.getElementById('SpeechValue');
let AlchemyValue = document.getElementById('AlchemyValue');

// Значение до которого вы хотите повысить навык вор
let IllusionValue = document.getElementById('IllusionValue');
let DestructionValue = document.getElementById('DestructionValue');
let WitchcraftValue = document.getElementById('WitchcraftValue');
let RecoveryValue = document.getElementById('RecoveryValue');
let ChangeValue = document.getElementById('ChangeValue');
let EnchantmentValue = document.getElementById('EnchantmentValue');


// Требуется очков обучения воин
let needLPBlacksmith = document.getElementById('needLPBlacksmith');
let needLPOneHandedWeapon = document.getElementById('needLPOneHandedWeapon');
let needLPHeavyArmor = document.getElementById('needLPHeavyArmor');
let needLPTwoHandedWeapon = document.getElementById('needLPTwoHandedWeapon');
let needLPShooting = document.getElementById('needLPShooting');
let needLPBlocking = document.getElementById('needLPBlocking');

// Требуется очков обучения вор
let needLPEvasion = document.getElementById('needLPEvasion');
let needLPStealth = document.getElementById('needLPStealth');
let needLPBreaking = document.getElementById('needLPBreaking');
let needLPPickpocketing = document.getElementById('needLPPickpocketing');
let needLPSpeech = document.getElementById('needLPSpeech');
let needLPAlchemy = document.getElementById('needLPAlchemy');

// Требуется очков обучения маг
let needLPIllusion = document.getElementById('needLPIllusion');
let needLPDestruction = document.getElementById('needLPDestruction');
let needLPWitchcraft = document.getElementById('needLPWitchcraft');
let needLPRecovery = document.getElementById('needLPRecovery');
let needLPChange = document.getElementById('needLPChange');
let needLPEnchantment = document.getElementById('needLPEnchantment');


let allGoldTable = document.getElementById('allGoldTable');
let allLPTable = document.getElementById('allLPTable');
// Требуется золота для обучения воин

let needGoldBlacksmith = document.getElementById('needGoldBlacksmith');
let needGoldOneHandedWeapon = document.getElementById('needGoldOneHandedWeapon');
let needGoldHeavyArmor = document.getElementById('needGoldHeavyArmor');
let needGoldTwoHandedWeapon = document.getElementById('needGoldTwoHandedWeapon');
let needGoldShooting = document.getElementById('needGoldShooting');
let needGoldBlocking = document.getElementById('needGoldBlocking');
// Требуется золота для обучения вор

let needGoldEvasion = document.getElementById('needGoldEvasion');
let needGoldStealth = document.getElementById('needGoldStealth');
let needGoldBreaking = document.getElementById('needGoldBreaking');
let needGoldPickpocketing = document.getElementById('needGoldPickpocketing');
let needGoldSpeech = document.getElementById('needGoldSpeech');
let needGoldAlchemy = document.getElementById('needGoldAlchemy');
// Требуется золота для обучения маг

let needGoldIllusion = document.getElementById('needGoldIllusion');
let needGoldDestruction = document.getElementById('needGoldDestruction');
let needGoldWitchcraft = document.getElementById('needGoldWitchcraft');
let needGoldRecovery = document.getElementById('needGoldRecovery');
let needGoldChange = document.getElementById('needGoldChange');
let needGoldEnchantment = document.getElementById('needGoldEnchantment');

let warriorStoneOn = true;
let mageStoneOn = true;
let thifStoneOn = true;

function disableMageStone() {
    mageStoneOn = true;
    console.log('отключен камень мага');
    Illusion.value = Number(Illusion.value) - 5;
    Destruction.value = Number(Destruction.value) - 5;
    Witchcraft.value = Number(Witchcraft.value) - 5;
    Recovery.value = Number(Recovery.value) - 5;
    Change.value = Number(Change.value) - 5;
    Enchantment.value = Number(Enchantment.value) - 5;
}
function disableWarriorStone() {
    warriorStoneOn - true;
    console.log('отключен камень воина');
    Blacksmith.value = Number(Blacksmith.value) - 5;
    OneHandedWeapon.value = Number(OneHandedWeapon.value) - 5;
    HeavyArmor.value = Number(HeavyArmor.value) -5;
    TwoHandedWeapon.value = Number(TwoHandedWeapon.value) - 5;
    Shooting.value = Number(Shooting.value) - 5;
    Blocking.value = Number(Blocking.value) -5;
}
function disableThifStone() {
    thifStoneOn = true;
    console.log('отключен камень вора');
    Evasion.value = Number(Evasion.value) - 5;
    Stealth.value = Number(Stealth.value) - 5;
    Breaking.value = Number(Breaking.value) - 5;
    Pickpocketing.value = Number(Pickpocketing.value) - 5;
    Speech.value = Number(Speech.value) - 5;
    Alchemy.value = Number(Alchemy.value) - 5;
}

function changeWarriorStone() {

    if (warriorStoneOn) {
        warriorStoneOn = false;
        Blacksmith.value = Number(Blacksmith.value) + 5;
        OneHandedWeapon.value = Number(OneHandedWeapon.value) + 5;
        HeavyArmor.value = Number(HeavyArmor.value) + 5;
        TwoHandedWeapon.value = Number(TwoHandedWeapon.value) + 5;
        Shooting.value = Number(Shooting.value) + 5;
        Blocking.value = Number(Blocking.value) + 5;
    } else {
        disableWarriorStone();
        console.log('Камень воина уже выбран');
    }
}

function changeMageStone() {

    if (mageStoneOn) {
        mageStoneOn = false;
        Illusion.value = Number(Illusion.value) + 5;
        Destruction.value = Number(Destruction.value) + 5;
        Witchcraft.value = Number(Witchcraft.value) + 5;
        Recovery.value = Number(Recovery.value) + 5;
        Change.value = Number(Change.value) + 5;
        Enchantment.value = Number(Enchantment.value) + 5;
    } else {
        disableMageStone();
        console.log('Камень мага уже выбран');
    }

}
function changeThifStone() {

    if (thifStoneOn) {
        thifStoneOn = false;
        Evasion.value = Number(Evasion.value) + 5;
        Evasion.classList.add('text-success');
        Stealth.value = Number(Stealth.value) + 5;
        Breaking.value = Number(Breaking.value) + 5;
        Pickpocketing.value = Number(Pickpocketing.value) + 5;
        Speech.value = Number(Speech.value) + 5;
        Alchemy.value = Number(Alchemy.value) + 5;
    } else {
        disableThifStone();
        console.log('Камень вора уже выбран');
    }
}

function changeArgoStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;

    Evasion.value = 15;
    Evasion.classList.add('text-success');
    Stealth.value = 10;
    Breaking.value = 15;
    Pickpocketing.value = 10;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 10;
    Change.value = 10;
    Enchantment.value = 5;

}

function changeOrcStats() {

    Blacksmith.value = 15;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 15;
    TwoHandedWeapon.value = 10;
    Shooting.value = 5;
    Blocking.value = 10;

    Evasion.value = 10;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeNordStats() {

    Blacksmith.value = 15;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 10;
    TwoHandedWeapon.value = 15;
    Shooting.value = 5;
    Blocking.value = 10;

    Evasion.value = 10;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeRedgarcStats() {

    Blacksmith.value = 10;
    OneHandedWeapon.value = 20;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 10;
    Shooting.value = 10;
    Blocking.value = 10;

    Evasion.value = 10;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeDanmerStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 15;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;

    Evasion.value = 10;
    Stealth.value = 10;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 10;
    Destruction.value = 15;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 10;
    Enchantment.value = 5;
}
function changeImperecStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 10;
    HeavyArmor.value = 10;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 10;

    Evasion.value = 5;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 15;
    Alchemy.value = 5;

    Illusion.value = 5;
    Destruction.value = 10;
    Witchcraft.value = 5;
    Recovery.value = 15;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeBosmerStats() {

    Blacksmith.value = 15;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 20;
    Blocking.value = 5;

    Evasion.value = 10;
    Stealth.value = 10;
    Breaking.value = 10;
    Pickpocketing.value = 10;
    Speech.value = 5;
    Alchemy.value = 10;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeCatjitStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;

    Evasion.value = 10;
    Stealth.value = 15;
    Breaking.value = 10;
    Pickpocketing.value = 10;
    Speech.value = 10;
    Alchemy.value = 10;

    Illusion.value = 5;
    Destruction.value = 5;
    Witchcraft.value = 5;
    Recovery.value = 5;
    Change.value = 5;
    Enchantment.value = 5;
}
function changeAltmerStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;

    Evasion.value = 5;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 5;
    Alchemy.value = 5;

    Illusion.value = 15;
    Destruction.value = 15;
    Witchcraft.value = 10;
    Recovery.value = 10;
    Change.value = 10;
    Enchantment.value = 10;
}

function changeBretonStats() {

    Blacksmith.value = 5;
    OneHandedWeapon.value = 5;
    HeavyArmor.value = 5;
    TwoHandedWeapon.value = 5;
    Shooting.value = 5;
    Blocking.value = 5;

    Evasion.value = 5;
    Stealth.value = 5;
    Breaking.value = 5;
    Pickpocketing.value = 5;
    Speech.value = 10;
    Alchemy.value = 10;

    Illusion.value = 10;
    Destruction.value = 5;
    Witchcraft.value = 15;
    Recovery.value = 10;
    Change.value = 10;
    Enchantment.value = 5;
}

// формула расчета лп
function GetGCostFor(skillValue) {
    return (Math.ceil(skillValue / FiE_GV_IncreaseCostEvery)) * FiE_GV_CostGoldMult;
}
function GetLPCostFor(skillValue) {
    return (Math.ceil(skillValue/FiE_GV_IncreaseCostEvery)) * FiE_GV_CostLPMult;
}

function CalculateGCost(currentSkillValue, countValue) {
    let cost = 0;
    let index = currentSkillValue;
    while (index < currentSkillValue + countValue) {
        index += 1;
        cost += GetGCostFor(index);
    }
    return cost;
}
function CalculateLPCost(currentSkillValue, countValue) {
    let cost = 0;
    let index = currentSkillValue;
    while (index < currentSkillValue + countValue) {
        index += 1
        cost += GetLPCostFor(index)
    }
    return cost;
}

// расчет всех ячеек с лп с таблицы
function getAllLPFromTable() {
    allGoldTable.innerHTML =
        Number(needGoldBlacksmith.innerHTML)
        + Number(needGoldHeavyArmor.innerHTML)
        + Number(needGoldTwoHandedWeapon.innerHTML)
        + Number(needGoldOneHandedWeapon.innerHTML)
        + Number(needGoldShooting.innerHTML)
        + Number(needGoldBlocking.innerHTML)

        + Number(needGoldEvasion.innerHTML)
        + Number(needGoldStealth.innerHTML)
        + Number(needGoldBreaking.innerHTML)
        + Number(needGoldPickpocketing.innerHTML)
        + Number(needGoldSpeech.innerHTML)
        + Number(needGoldAlchemy.innerHTML)

        + Number(needGoldDestruction.innerHTML)
        + Number(needGoldIllusion.innerHTML)
        + Number(needGoldWitchcraft.innerHTML)
        + Number(needGoldRecovery.innerHTML)
        + Number(needGoldChange.innerHTML)
        + Number(needGoldEnchantment.innerHTML)
    ;
}
// расчет всех ячеек с золотом с таблицы
function getAllGoldFromTable() {
    allLPTable.innerHTML =
        Number(needLPBlacksmith.innerHTML)
        + Number(needLPHeavyArmor.innerHTML)
        + Number(needLPTwoHandedWeapon.innerHTML)
        + Number(needLPOneHandedWeapon.innerHTML)
        + Number(needLPShooting.innerHTML)
        + Number(needLPBlocking.innerHTML)


        + Number(needLPEvasion.innerHTML)
        + Number(needLPStealth.innerHTML)
        + Number(needLPBreaking.innerHTML)
        + Number(needLPPickpocketing.innerHTML)
        + Number(needLPSpeech.innerHTML)
        + Number(needLPAlchemy.innerHTML)

        + Number(needLPDestruction.innerHTML)
        + Number(needLPIllusion.innerHTML)
        + Number(needLPWitchcraft.innerHTML)
        + Number(needLPRecovery.innerHTML)
        + Number(needLPChange.innerHTML)
        + Number(needLPEnchantment.innerHTML);
}
// расчет значений из текущего и до которого нужно подня навыка
function calcLpAndGold(currentSkillValue, countValue, needLp, needGold) {
    let minus = countValue - currentSkillValue;
    needLp.innerHTML = CalculateLPCost(Number(currentSkillValue), minus);
    needGold.innerHTML = CalculateGCost(Number(currentSkillValue), minus);
}

function formula() {

    // расчет лп + золота воин
    calcLpAndGold(Blacksmith.value, BlacksmithValue.value, needLPBlacksmith, needGoldBlacksmith);
    calcLpAndGold(OneHandedWeapon.value, OneHandedWeaponValue.value, needLPOneHandedWeapon, needGoldOneHandedWeapon);
    calcLpAndGold(HeavyArmor.value, HeavyArmorValue.value, needLPHeavyArmor, needGoldHeavyArmor);
    calcLpAndGold(TwoHandedWeapon.value, TwoHandedWeaponValue.value, needLPTwoHandedWeapon, needGoldTwoHandedWeapon);
    calcLpAndGold(Shooting.value, ShootingValue.value, needLPShooting, needGoldShooting);
    calcLpAndGold(Blocking.value, BlockingValue.value, needLPBlocking, needGoldBlocking);

    // расчет лп + золота вор
    calcLpAndGold(Evasion.value, EvasionValue.value, needLPEvasion, needGoldEvasion);
    calcLpAndGold(Stealth.value, StealthValue.value, needLPStealth, needGoldStealth);
    calcLpAndGold(Breaking.value, BreakingValue.value, needLPBreaking, needGoldBreaking);
    calcLpAndGold(Pickpocketing.value, PickpocketingValue.value, needLPPickpocketing, needGoldPickpocketing);
    calcLpAndGold(Speech.value, SpeechValue.value, needLPSpeech, needGoldSpeech);
    calcLpAndGold(Alchemy.value, AlchemyValue.value, needLPAlchemy, needGoldAlchemy);

    // расчет лп + золота маг
    calcLpAndGold(Illusion.value, IllusionValue.value, needLPIllusion, needGoldIllusion);
    calcLpAndGold(Destruction.value, DestructionValue.value, needLPDestruction, needGoldDestruction);
    calcLpAndGold(Witchcraft.value, WitchcraftValue.value, needLPWitchcraft, needGoldWitchcraft);
    calcLpAndGold(Recovery.value, RecoveryValue.value, needLPRecovery, needGoldRecovery);
    calcLpAndGold(Change.value, ChangeValue.value, needLPChange, needGoldChange);
    calcLpAndGold(Enchantment.value, EnchantmentValue.value, needLPEnchantment, needGoldEnchantment);


    // if (BlacksmithValue.value > Blacksmith.value && BlacksmithValue.value !== Blacksmith.value && Blacksmith.value > 0) {
    //
    //     console.log('true')
    // }
    // else {
    //     console.log(BlacksmithValue.value);
    //     console.log(Blacksmith.value);
    //     needGoldBlacksmith.innerHTML = 0;
    //     needLPBlacksmith.innerHTML = 0;
    //     console.log('false');
    // }
    // gold


    // расчет всех ячеек с лп со всей таблицы
    getAllLPFromTable();
    // расчет всех ячеек с золотом со всей таблицы
    getAllGoldFromTable();
}

raceArgo.addEventListener('click', changeArgoStats);
raceOrc.addEventListener('click', changeOrcStats);
raceNord.addEventListener('click', changeNordStats);
raceRedgarc.addEventListener('click', changeRedgarcStats);
raceDanmer.addEventListener('click', changeDanmerStats);
raceImperec.addEventListener('click', changeImperecStats);
raceBosmer.addEventListener('click', changeBosmerStats);
raceCatjit.addEventListener('click', changeCatjitStats);
raceAltmer.addEventListener('click', changeAltmerStats);
raceBreton.addEventListener('click', changeBretonStats);
stoneWarrior.addEventListener('click', changeWarriorStone);
stoneMage.addEventListener('click', changeMageStone);
stoneThif.addEventListener('click', changeThifStone);

result.addEventListener('click', formula);


