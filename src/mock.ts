import {
	Cage,
	CageGroup,
	CageModule,
	PowerSupply,
	PowerStatus,
	TrapReciver,
	TrapLevelFilter,
	EventLogItem,
	GroupType,
	GroupRedundency,
	GroupStatus,
	ModuleType,
	ModuleStatus,
	ModuleStatusLED,
	LNAStatus,
	BiasTState,
	MonPlan,
	EventLevel,
	RfLinkTest,
	MeasRfLevel,
	RestoreFactory,
	SetDefaults
} from './cage';

export const CAGE: Cage = {
		OID: '.1.3.6.1.4.1.40570.1',
		description: 'Demo RFoF cage',
		serial: '111111111',
		version: '1.000',
		versionDate: '02/03/2018',
		grCount: 2,
		psCount: 1,
		slotsCount: 4
	};


export const CAGE_GROUPS: CageGroup[] = [
	{
		name: 'Luzhniki Stadium',
		type: GroupType.simple,
		mdCount: 2,
		redundencySwitch: GroupRedundency.auto,
		status: GroupStatus.ok
	},
	{
		name: 'Saint Petersburg Stadium',
		type: GroupType.rx,
		mdCount: 2,
		redundencySwitch: GroupRedundency.manualprimary,
		status: GroupStatus.ok
	},
	{
		name: 'Fisht Stadium',
		type: GroupType.bidir,
		mdCount: 4,
		redundencySwitch: GroupRedundency.manualprimary,
		status: GroupStatus.ok
	}
];

export const CAGE_MODULES: CageModule[] = [
	{
		name: '30322089',
		group: CAGE_GROUPS[0],
		index: '1.1',
		slot: 0,
		type: ModuleType.receiver,
		status: ModuleStatus.fault,
		statusLED: ModuleStatusLED.red,
		partNumber: 'RFoF3T5FR-PA-11',
		serial: '80322043',
		fwVer: '1.017',
		rfLevel: '-----',
		temp: '36.1',
		optPower: '1.6',
		monTimer: '--:--:--',
		rfTestTimer: '--:--:--',
		atten: '1.0',
		lna: LNAStatus.none,
		biasT: BiasTState.alwayson,
		laser: LNAStatus.none,
		rfLinkTest: RfLinkTest.off,
		rfLinkTestTime: '00:01:00',
		measRfLevel: MeasRfLevel.off,
		dfbBias: '31.9',
		optAlarmLevel: '0.98',
		monPlan: MonPlan.active,
		monInterval: '00:00:05',
		setDefaults: SetDefaults.changed,
		restoreFactory: RestoreFactory.noAction
	}
];

export const CAGE_POWERSUPPLY: PowerSupply[] = [
	{
		status: PowerStatus.ok
	},
	{
		status: PowerStatus.ok
	}
];

export const CAGE_TRAPRECIVERS: TrapReciver[] = [
	{
		ipAddress: '127.0.0.1',
		levelFilter: TrapLevelFilter.notify,
		community: '* * * * * * *'
	}
];

export const CAGE_EVENTS: EventLogItem[] = [
	{
		time: new Date('2018-06-28 15:22:12'),
		level: EventLevel.critical,
		detail: 'Recovery: Group 2, Slot 6, Optical signal restored'
	},
	{
		time: new Date('2018-06-28 15:22:11'),
		level: EventLevel.critical,
		detail: 'Recovery: Group 2, Slot 7, Optical signal restored'
	},
	{
		time: new Date('2018-06-28 15:22:11'),
		level: EventLevel.warning,
		detail: 'Power supply 1 is Not Installed, Power supply 2 is Not Installed'
	},
	{
		time: new Date('2018-06-28 15:22:11'),
		level: EventLevel.warning,
		detail: 'CageManager deamon started'
	},
	{
		time: new Date('2018-06-28 15:21:11'),
		level: EventLevel.change,
		detail: 'A change event'
	},
	{
		time: new Date('2018-06-28 15:20:11'),
		level: EventLevel.system,
		detail: 'A system event'
	},
	{
		time: new Date('2018-06-28 15:19:11'),
		level: EventLevel.critical,
		detail: 'Recovery: Group 1, Slot 4, Optical signal restored'
	}
];