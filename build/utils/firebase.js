"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const firebase = __importStar(require("firebase/app"));
const config_1 = require("../config");
const firebaseConfig = {
    apiKey: config_1.FIREBASEAPIKEY || '',
    authDomain: config_1.FIREBASEAUTHDOMAIN || '',
    projectId: "mticket-1a9a7",
    storageBucket: config_1.FIREBASESTORAGEBUCKET || '',
    messagingSenderId: config_1.FIREBASEMESSANGINGSENDERID || '',
    appId: config_1.FIREBASEAPPID || '',
    measurementId: config_1.FIREBASEMEASURMENTID || ''
};
// Initialize Firebase
const firebaseApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield firebase.initializeApp(firebaseConfig);
        console.log('firebase started successfully');
        return true;
    }
    catch (error) {
        throw "FAILED TO Initialize Firebase";
    }
});
exports.firebaseApp = firebaseApp;
//# sourceMappingURL=firebase.js.map