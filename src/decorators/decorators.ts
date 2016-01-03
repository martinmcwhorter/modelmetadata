import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

export let Label: (label: string) => any = decoratorFactory<string>(c.label);

export let Required: (message?: string) => any = decoratorFactory<void>(c.required, true);

export let Pattern: (pattern: RegExp, message?: string) => any = decoratorFactory<RegExp>(c.pattern);

export let Max: (length: number, message?: string) => any = decoratorFactory<number>(c.max);

export let MaxLength: (length: number, message?: string) => any = decoratorFactory<number>(c.maxLength);

export let Min: (length: number, message?: string) => any = decoratorFactory<number>(c.min);

export let MinLength: (length: number, message?: string) => any = decoratorFactory<number>(c.minLength);


