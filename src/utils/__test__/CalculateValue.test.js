/**
 * @jest-environment node
 */

import CalculateValue from '../CalculateValue';

describe('Calculate Value functionality', () => {

    it('should should return 87 for LXXXVII', () => {
        expect(CalculateValue('LXXXVII')).toEqual(87);
    });

    it('should should return 43 for XLIII', () => {
        expect(CalculateValue('XLIII')).toEqual(43);
    });

    it('should should return 980 for CMLXXX', () => {
        expect(CalculateValue('CMLXXX')).toEqual(980);
    });

});