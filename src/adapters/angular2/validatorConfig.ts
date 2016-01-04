import * as c from '../../constants';
import {Validators} from './Validators';

export type validatorConfig = [{key: string; validator: (...args: any[]) => Function}];
export let validatorConfig: validatorConfig = [
    {key: c.MAX, validator: Validators.max},
    {key: c.MAX_LENGTH, validator: Validators.maxLength},
    {key: c.MIN, validator: Validators.min},
    {key: c.MIN_LENGTH, validator: Validators.minLength},
    {key: c.PATTERN, validator: Validators.pattern},
    {key: c.REQUIRED, validator: () => Validators.required}
]