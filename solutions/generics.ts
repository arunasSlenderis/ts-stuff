type Select<IdType = number> = {
  id: IdType;
  text: string;
};

const selection: Select = { id: 1, text: 'One' };
const selection2: Select<string> = { id: 'one', text: 'This is one' };

const increasedId = selection.id + 1;
const addedId = selection2.id.slice(-1);

if (typeof selection.id === 'number') {
  const increasedId = selection.id + 1;
}
