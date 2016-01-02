import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

export let Label: (label: string) => any = decoratorFactory<string>(c.label);
