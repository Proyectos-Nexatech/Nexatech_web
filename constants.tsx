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
    name: 'Edgardo Torres',
    role: 'Gerente Comercial',
    company: 'Merproycca S.A.S.',
    content: (
      <>
        Proyecto Planta NAN 2 – Yara Cartagena.<br />
        El software de Nexatech fue clave para el seguimiento y control del proyecto eléctrico e instrumentación, permitiéndonos organizar la información, optimizar tiempos y asegurar trazabilidad en cada etapa. Su acompañamiento y enfoque práctico contribuyeron directamente al cumplimiento de los objetivos.
      </>
    ),
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Walter Marín',
    role: 'Gerente General',
    company: 'CDI S.A.',
    content: (
      <>
        La implementación del aplicativo de control y seguimiento de proyectos fortaleció nuestra gestión interna, brindándonos visibilidad en tiempo real, control de tiempos, y una base sólida para la toma de decisiones.
        <br /><br />
        Su facilidad de uso y adaptabilidad nos permiten gestionar nuestros proyectos con mayor eficiencia y trazabilidad.
      </>
    ),
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Victor Fajardo Pizarro ',
    role: 'Director de Compras y Suministros',
    company: 'Astivik S.A.',
    content: 'A lo largo de todos los años del astillero hemos tenido la dificultad para el control permanente de todos nuestros proveedores y personal en campo, con la herramienta desarrollada por Nexatech hemos logrado tener un mayor control eficiente en los proyectos y establecer seguimientos y lineamientos para que se promueva el avance eficaz en los proyectos, la herramienta logro ajustarse a nuestra necesidad y lograr aprovechar al m?ximo los recursos con los cuales contamos para llevar a cabo nuestros proyectos, recomendado.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];