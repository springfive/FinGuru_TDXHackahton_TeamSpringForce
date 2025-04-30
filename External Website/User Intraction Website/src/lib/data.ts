
// Mock data for the advisor dashboard

export interface Client {
  id: string;
  name: string;
  portfolioValue: number;
  growth: number;
  riskProfile: string;
  email: string;
  phone: string;
}

export interface Meeting {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  clientId?: string;
  clientName?: string;
}

export interface Investment {
  id: string;
  name: string;
  value: number;
  growth: number;
  allocation: number;
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'Gokul S',
    portfolioValue: 450000,
    growth: 3.2,
    riskProfile: 'Moderate',
    email: 'gokul.s@gmail.com',
    phone: '(555) 123-4567',
  },
  {
    id: '2',
    name: 'Kavya Yadhav',
    portfolioValue: 780000,
    growth: 5.7,
    riskProfile: 'Aggressive',
    email: 'kavya.yadhav@gmail.com',
    phone: '(555) 234-5678',
  },
  {
    id: '3',
    name: 'Arivu Arasan',
    portfolioValue: 325000,
    growth: -1.2,
    riskProfile: 'Conservative',
    email: 'Arivu.arasan@gmail.com',
    phone: '(555) 345-6789',
  },
  {
    id: '4',
    name: 'Aswin',
    portfolioValue: 920000,
    growth: 7.1,
    riskProfile: 'Aggressive',
    email: 'Aswin.viswesvar@gmail.com',
    phone: '(555) 456-7890',
  },
  {
    id: '5',
    name: 'Dheepika',
    portfolioValue: 560000,
    growth: 2.8,
    riskProfile: 'Moderate',
    email: 'dheepika.k@gmail.com',
    phone: '(555) 567-8901',
  }
];

export const meetings: Meeting[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'John Smith',
    date: '2025-05-02',
    time: '10:00 AM',
    type: 'Portfolio Review',
    status: 'scheduled',
  },
  {
    id: '2',
    clientId: '3',
    clientName: 'Robert Davis',
    date: '2025-05-03',
    time: '2:30 PM',
    type: 'Retirement Planning',
    status: 'scheduled',
  },
  {
    id: '3',
    clientId: '2',
    clientName: 'Sarah Johnson',
    date: '2025-05-05',
    time: '11:15 AM',
    type: 'Investment Strategy',
    status: 'scheduled',
  },
  {
    id: '4',
    clientId: '4',
    clientName: 'Emily Wilson',
    date: '2025-05-08',
    time: '1:00 PM',
    type: 'Tax Planning',
    status: 'scheduled',
  },
  {
    id: '5',
    clientId: '5',
    clientName: 'Michael Brown',
    date: '2025-05-10',
    time: '3:45 PM',
    type: 'Estate Planning',
    status: 'scheduled',
  }
];

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Review portfolio allocation',
    description: 'Analyze current market conditions and adjust portfolio allocations',
    dueDate: '2025-05-01',
    status: 'pending',
    priority: 'high',
    clientId: '1',
    clientName: 'John Smith',
  },
  {
    id: '2',
    title: 'Prepare retirement projection',
    description: 'Create updated retirement projection based on new contributions',
    dueDate: '2025-05-03',
    status: 'pending',
    priority: 'medium',
    clientId: '3',
    clientName: 'Robert Davis',
  },
  {
    id: '3',
    title: 'Research tax-loss harvesting opportunities',
    description: 'Identify securities for tax-loss harvesting before end of quarter',
    dueDate: '2025-05-04',
    status: 'pending',
    priority: 'medium',
    clientId: '2',
    clientName: 'Sarah Johnson',
  },
  {
    id: '4',
    title: 'Update investment policy statement',
    description: 'Revise IPS to reflect new risk tolerance assessment',
    dueDate: '2025-05-07',
    status: 'pending',
    priority: 'high',
    clientId: '4',
    clientName: 'Emily Wilson',
  },
  {
    id: '5',
    title: 'Schedule quarterly client calls',
    description: 'Arrange Q2 review calls with top tier clients',
    dueDate: '2025-05-02',
    status: 'pending',
    priority: 'low'
  },
];

export const investments: Investment[] = [
  {
    id: '1',
    name: 'US Large Cap Equity',
    value: 1250000,
    growth: 4.5,
    allocation: 35,
  },
  {
    id: '2',
    name: 'International Equity',
    value: 850000,
    growth: 3.2,
    allocation: 25,
  },
  {
    id: '3',
    name: 'Fixed Income',
    value: 700000,
    growth: 1.5,
    allocation: 20,
  },
  {
    id: '4',
    name: 'Real Estate',
    value: 350000,
    growth: 2.8,
    allocation: 10,
  },
  {
    id: '5',
    name: 'Alternatives',
    value: 350000,
    growth: 5.2,
    allocation: 10,
  },
];

export const getTotalAUM = () => {
  return clients.reduce((sum, client) => sum + client.portfolioValue, 0);
};

export const getTotalClients = () => {
  return clients.length;
};

export const getUpcomingMeetings = () => {
  return meetings.filter(meeting => meeting.status === 'scheduled').length;
};

export const getPendingTasks = () => {
  return tasks.filter(task => task.status === 'pending').length;
};
