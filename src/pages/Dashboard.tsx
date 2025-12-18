import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, LogOut, Settings, Bell, Search, Plus, 
  BarChart3, Database, Cpu, Zap, TrendingUp, Clock,
  FileText, Folder, Star, ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { NeuralBackground } from '@/components/NeuralBackground';

const Dashboard = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const stats = [
    { label: 'Memory Units', value: '12.4K', change: '+12%', icon: Database },
    { label: 'API Calls', value: '847K', change: '+8%', icon: Zap },
    { label: 'Processing', value: '99.9%', change: 'Uptime', icon: Cpu },
    { label: 'Efficiency', value: '94%', change: '+3%', icon: TrendingUp },
  ];

  const recentItems = [
    { name: 'Product Launch Data', type: 'Memory', time: '2 min ago', starred: true },
    { name: 'Customer Insights', type: 'Analysis', time: '15 min ago', starred: false },
    { name: 'Q4 Reports', type: 'Document', time: '1 hour ago', starred: true },
    { name: 'Team Notes', type: 'Memory', time: '3 hours ago', starred: false },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <NeuralBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground">MemoryMax</span>
                </a>
                
                <div className="hidden md:flex relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search memories..." 
                    className="pl-9 h-9 bg-muted/50 border-border/50"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
                
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-medium text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleLogout}>
                    <LogOut className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
            <p className="text-muted-foreground">
              Here's an overview of your AI memory system
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              New Memory
            </Button>
            <Button variant="outline">
              <Folder className="w-4 h-4 mr-2" />
              Collections
            </Button>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {recentItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                    {item.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
