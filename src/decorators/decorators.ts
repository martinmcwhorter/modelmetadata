import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

export let Label: (label: string) => any = decoratorFactory(c.LABEL);

export let Required: (errorMessage?: string) => any = decoratorFactory(c.REQUIRED, true);

export let Pattern: (pattern: RegExp, errorMessage?: string) => any = decoratorFactory(c.PATTERN);

export let Max: (length: number, errorMessage?: string) => any = decoratorFactory(c.MAX);

export let MaxLength: (length: number, errorMessage?: string) => any = decoratorFactory(c.MAX_LENGTH);

export let Min: (length: number, errorMessage?: string) => any = decoratorFactory(c.MIN);

export let MinLength: (length: number, errorMessage?: string) => any = decoratorFactory(c.MIN_LENGTH);

export let Integer: (errorMessage?: string) => any = decoratorFactory(c.INTEGER, true);

export let Default: (value: any, errorMessage?: string) => any = decoratorFactory(c.DEFAULT);

export let Enum: (values: any[], errorMessage?: string) => any = decoratorFactory(c.ENUM);

export let Description: (description: string, errorMessage?: string) => any = decoratorFactory(c.DESCRIPTION);

export let Format: (format: string) => any = decoratorFactory(c.FORMAT);


