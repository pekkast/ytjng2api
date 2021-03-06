/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * 
 */
export interface BisCompanyLanguage {
    /**
     * Nolla tarkoittaa yhteistä, yksi Patentti- ja rekisterihallitusta, kaksi Verohallintoa ja kolme yritys- ja yhteisötietojärjestelmää
     */
    source?: number;

    /**
     * Yksi tarkoittaa nykyistä versiota ja &gt;1 historiallisia kieliä
     */
    version: number;

    /**
     * Rekisteröintipäivämäärä
     */
    registrationDate: Date;

    /**
     * Rekisteröinnin loppupäivämäärä
     */
    endDate?: Date;

    /**
     * Kielen nimi
     */
    name: string;

    /**
     * Kaksikirjaiminen kielikoodi
     */
    language?: string;

}
