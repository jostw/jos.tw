export default function publication(state = {
  label: {
    className: 'publication',
    content: 'Publications'
  },
  publications: [
    {
      name: 'Finding Leaders with Maximum Spread of Influence through Social Networks, ICS 2012',
      title: 'Tsung An Yeh, En Tzu Wang, and Arbee L. P. Chen'
    }
  ],
  hide_from_print: true
}, action) {
  return state;
}
