import React from 'react';
import { Code, Cpu, BarChart3, Lightbulb, Settings, HardHat, Users, Zap, Clock, TrendingUp, Database, FileCheck, BarChart2 } from 'lucide-react';
import { ServiceItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Desarrollo de Software a la Medida',
    description: 'Soluciones digitales exclusivas diseñadas para resolver las necesidades específicas de tu arquitectura empresarial.',
    icon: <Code className="w-8 h-8 text-nexa-500" />
  },
  {
    id: '2',
    title: 'Automatización de Procesos',
    description: 'Optimizamos tu flujo de trabajo eliminando tareas manuales mediante integraciones e inteligencia operativa.',
    icon: <Cpu className="w-8 h-8 text-nexa-500" />
  },
  {
    id: '3',
    title: 'Dashboards y Analítica',
    description: 'Transformamos datos complejos en paneles visuales estratégicos para decisiones basadas en información real.',
    icon: <BarChart3 className="w-8 h-8 text-nexa-500" />
  },
  {
    id: '4',
    title: 'Consultoría en Transformación Digital',
    description: 'Estrategia y acompañamiento técnico para modernizar tu empresa y adoptar una cultura tecnológica de vanguardia.',
    icon: <Lightbulb className="w-8 h-8 text-nexa-500" />
  },
  {
    id: '5',
    title: 'Soporte y Evolución de Sistemas',
    description: 'Mantenimiento preventivo, soporte técnico especializado y mejora continua para tus plataformas digitales.',
    icon: <Settings className="w-8 h-8 text-nexa-500" />
  }
];

export const BENEFITS = [
  {
    id: 'b1',
    value: '',
    label: 'Reducir tiempos administrativos',
    icon: <Clock className="w-6 h-6 text-nexa-600" />
  },
  {
    id: 'b2',
    value: '',
    label: 'Mejorar el control financiero de proyectos',
    icon: <TrendingUp className="w-6 h-6 text-nexa-600" />
  },
  {
    id: 'b3',
    value: '',
    label: 'Centralizar la información en una sola plataforma',
    icon: <Database className="w-6 h-6 text-nexa-600" />
  },
  {
    id: 'b4',
    value: '',
    label: 'Tomar decisiones basadas en datos confiables',
    icon: <BarChart2 className="w-6 h-6 text-nexa-600" />
  },
  {
    id: 'b5',
    value: '',
    label: 'Incrementar la eficiencia operativa',
    icon: <FileCheck className="w-6 h-6 text-nexa-600" />
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ing. Carlos Rodríguez',
    role: 'Director de Operaciones',
    company: 'Constructora Nacional',
    content: 'Antes perdíamos horas consolidando reportes de obra. Con el dashboard industrial de Nexatech, tenemos control de costos en tiempo real. La eficiencia operativa subió un 35%.',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Andrea Martínez',
    role: 'Gerente de RRHH',
    company: 'Logística Global S.A.',
    content: 'La gestión documental y de talento humano era un caos de papeles. El software a medida automatizó todo el ciclo del empleado, reduciendo errores manuales a cero.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Felipe Gómez',
    role: 'CEO',
    company: 'Manufacturas del Valle',
    content: 'Necesitábamos integrar maquinaria antigua con sistemas modernos. Su transformación digital nos dio visibilidad 24/7 de la planta. El ROI se vio en menos de 6 meses.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];