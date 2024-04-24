type PositionOption = {
    value: string;
    label: string;
};

const positionOptions: PositionOption[] = [
    { value: 'QB', label: 'Quarterback' },
    { value: 'OL', label: 'Offensive Line' },
    { value: 'RB', label: 'Running Back' },
    { value: 'FB', label: 'Fullback'},
    { value: 'TE', label: 'Tight End' },
    { value: 'WR', label: 'Wide Receiver' },
    { value: 'DL', label: 'Defensive Line' },
    { value: 'LB', label: 'Linebacker' },
    { value: 'CB', label: 'Cornerback' },
    { value: 'S', label: 'Safety' },
    { value: 'K', label: 'Kicker' },
    { value: 'P', label: 'Punter' },
    { value: 'KR', label: 'Kick Returner' },
    { value: 'PR', label: 'Punt Returner' },
    { value: 'LS', label: 'Long Snapper' },
  ];

  export default positionOptions;