import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown, Heart, GraduationCap, TrendingUp, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignInDialog } from '@/components/SignInDialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const useCases = [
  { name: 'Healthcare', href: '/use-cases/health', icon: Heart, color: 'text-primary' },
  { name: 'Education', href: '/use-cases/education', icon: GraduationCap, color: 'text-accent' },
  { name: 'Finance', href: '/use-cases/finance', icon: TrendingUp, color: 'text-emerald-400' },
  { name: 'Enterprise', href: '/use-cases/enterprise', icon: Building2, color: 'text-orange-400' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const location = useLocation();

  const isUseCasePath = location.pathname.startsWith('/use-cases');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-105">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground tracking-tight">MaxMemory</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium relative group transition-colors duration-200 ${
                    location.pathname === link.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              
              {/* Use Cases Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  isUseCasePath ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}>
                  Use Cases
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-border/50 min-w-[200px]">
                  {useCases.map((useCase) => (
                    <DropdownMenuItem key={useCase.name} asChild>
                      <Link 
                        to={useCase.href} 
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <useCase.icon className={`w-4 h-4 ${useCase.color}`} />
                        <span>{useCase.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setSignInOpen(true)}>
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="animate-glow-pulse">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Use Cases */}
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Use Cases
                </div>
                {useCases.map((useCase) => (
                  <Link
                    key={useCase.name}
                    to={useCase.href}
                    className="px-4 py-2 flex items-center gap-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <useCase.icon className={`w-4 h-4 ${useCase.color}`} />
                    {useCase.name}
                  </Link>
                ))}
                
                <div className="flex flex-col gap-2 mt-4 px-4">
                  <Button variant="ghost" className="w-full justify-center" onClick={() => { setIsOpen(false); setSignInOpen(true); }}>
                    Sign In
                  </Button>
                  <Button variant="hero" className="w-full justify-center">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  );
};
