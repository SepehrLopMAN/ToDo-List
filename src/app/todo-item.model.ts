import { FormControl } from '@angular/forms';

interface todoItem {
  title: FormControl;
  description?: string;
  importance: boolean;
  deadline?: string;
}
