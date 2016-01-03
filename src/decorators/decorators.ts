import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

export let Label: (label: string) => any = decoratorFactory<string>(c.LABEL);

export let Required: (message?: string) => any = decoratorFactory<void>(c.REQUIRED, true);

export let Pattern: (pattern: RegExp, message?: string) => any = decoratorFactory<RegExp>(c.PATTERN);

export let Max: (length: number, message?: string) => any = decoratorFactory<number>(c.MAX);

export let MaxLength: (length: number, message?: string) => any = decoratorFactory<number>(c.MAX_LENGTH);

export let Min: (length: number, message?: string) => any = decoratorFactory<number>(c.MIN);

export let MinLength: (length: number, message?: string) => any = decoratorFactory<number>(c.MIN_LENGTH);


