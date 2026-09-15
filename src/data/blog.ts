export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'que-es-un-erp',
    title: '¿Qué es un ERP? (y por qué debería importarte)',
    excerpt: 'ERP suena a palabra complicada de consultor. En la práctica es mucho más simple: el sistema que junta tu inventario, clientes, ventas y empleados en un solo lugar.',
    date: '2026-09-15',
    tag: 'Aprende software',
  },
  {
    slug: 'excel-vs-sistema-a-la-medida',
    title: 'Excel vs. un sistema a la medida: ¿cuándo es momento de cambiar?',
    excerpt: 'Excel es una gran herramienta para empezar — hasta que deja de serlo. Estas son las señales de que tu negocio ya lo superó.',
    date: '2026-09-15',
    tag: 'Aprende software',
  },
];
