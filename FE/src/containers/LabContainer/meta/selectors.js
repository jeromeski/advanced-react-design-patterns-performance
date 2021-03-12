import { initialState } from './reducer';
/**
 * Get Lab
 * @param state
 * @returns {Object}
 */
export const get = state => state.Lab || initialState;
