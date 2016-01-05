import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

export let Label: (label: string) => any = decoratorFactory(c.LABEL);

export let Required: (message?: string) => any = decoratorFactory(c.REQUIRED, true);

export let Pattern: (pattern: RegExp, message?: string) => any = decoratorFactory(c.PATTERN);

export let Max: (length: number, message?: string) => any = decoratorFactory(c.MAX);

export let MaxLength: (length: number, message?: string) => any = decoratorFactory(c.MAX_LENGTH);

export let Min: (length: number, message?: string) => any = decoratorFactory(c.MIN);

export let MinLength: (length: number, message?: string) => any = decoratorFactory(c.MIN_LENGTH);

export let Integer: (message?: string) => any = decoratorFactory(c.INTEGER, true);

export let Default: (value: any, message?: string) => any = decoratorFactory(c.DEFAULT);

export let Enum: (values: any[], message?: string) => any = decoratorFactory(c.ENUM);

export let Description: (description: string, message?: string) => any = decoratorFactory(c.DESCRIPTION);

export let Format: (format: string, message?: string) => any = decoratorFactory(c.FORMAT);


