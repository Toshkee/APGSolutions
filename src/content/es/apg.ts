// Spanish landing page copy: same keys as content/en/apg.ts, change both when the copy changes.
// Written in neutral US Latin American Spanish, addressing the reader as "usted"; buttons use the infinitive.
// Terms: carrier = transportista / empresa de transporte, driver = conductor, retainer = anticipo,
// placement = colocación, retention milestones = etapas de retención, home time = tiempo en casa, lane = ruta.

export const meta = {
  title: "APG Solutions | Reclutamiento CDL con pago por conductor",
  description:
    "Pague solo cuando pongamos un conductor al volante. Conductores CDL preseleccionados y listos para la carretera, a disposición de transportistas de todo el país. Sin anticipos ni cuotas mensuales.",
  shareImage: "/share/og-es.jpg",
  shareImageAlt:
    "APG Solutions: pague solo cuando pongamos un conductor al volante. Reclutamiento CDL con pago por conductor desde Nashville, TN.",
};

// No-break spaces keep "8 a. m." and "6 p. m." on one line
export const hours = "Lun. a vie., de 8\u00a0a.\u00a0m. a 6\u00a0p.\u00a0m., hora del centro";

export const navLinks = [
  // "Empresas y conductores" is too wide for the desktop nav next to the other Spanish labels
  { label: "Soluciones", href: "/#solutions" },
  { label: "Cómo funciona", href: "/#how-it-works" },
  { label: "Precios", href: "/#pricing" },
  { label: "Nosotros", href: "/about" },
  { label: "Preguntas", href: "/#faq" },
];

export const nav = {
  homeLabel: "Inicio de APG Solutions",
  mainLabel: "Principal",
  mobileLabel: "Menú móvil",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  getStarted: "Comenzar",
  switchLabel: "English",
  switchShort: "EN",
  switchAria: "View the site in English",
};

export const hero = {
  badge: "Nashville, TN · Reclutamiento CDL-A en los 48 estados",
  badgeShort: "Nashville, TN · Reclutamos en todo el país",
  title: "Pague solo cuando pongamos un ",
  titleAccent: "conductor al volante.",
  lead: "APG Solutions conecta a empresas de transporte con conductores CDL preseleccionados y listos para la carretera. Sin anticipos ni cuotas mensuales: solo conductores calificados que se presentan a trabajar y se quedan.",
  leadShort: "APG Solutions conecta a empresas de transporte con conductores CDL preseleccionados y listos para la carretera. Sin anticipos ni cuotas mensuales.",
  trust: ["$0 por adelantado", "Sin contratos largos", "Pagos según la retención"],
  ctaCarrier: "Buscar conductores →",
  ctaDriver: "Postularme a un empleo",
};

export const stats = {
  label: "APG Solutions en cifras",
  items: [
    { value: "2,500+", label: "Conductores CDL colocados", labelShort: "Conductores colocados" },
    { value: "48", label: "Estados cubiertos en todo el país", labelShort: "Estados cubiertos" },
    { value: "72 h", label: "Tiempo promedio hasta el primer candidato", labelShort: "Hasta el primer candidato" },
    { value: "$0", label: "Anticipo o cuota mensual", labelShort: "Anticipo" },
  ],
};

export const problem = {
  title: "Los asientos vacíos le cuestan dinero todos los días.",
  lead: "Cada camión estacionado es dinero que se pierde. Los reclutadores tradicionales le cobran aunque no den resultados. Nosotros, no.",
  pains: [
    { title: "Camiones parados", text: "Un camión sin conductor le cuesta cientos de dólares al día en cargas perdidas y costos fijos." },
    { title: "Candidatos no calificados", text: "Montones de currículums que no cumplen sus requisitos de experiencia, MVR o equipo." },
    { title: "Anticipos costosos", text: "Cuotas mensuales que se siguen cobrando mucho después de que dejan de llegar los resultados." },
    { title: "Rotación constante", text: "Conductores que renuncian en la segunda semana, cuando usted ya pagó por la contratación." },
  ],
};

export const twoSides = {
  title: "Pensado para transportistas y conductores.",
  lead: "Hacemos cada conexión según lo que de verdad importa —ruta, tiempo en casa, equipo y pago— para que ambas partes ganen.",
  carriers: {
    title: "Cubra sus vacantes con conductores que se quedan.",
    text: "Acceda a una red nacional de conductores CDL-A verificados y preseleccionados según sus criterios exactos de contratación.",
    items: ["MVR, PSP y experiencia revisados previamente", "Usted entrevista y toma la decisión final", "Usted solo paga cuando el conductor empieza a trabajar"],
    cta: "Buscar conductores →",
    photoAlt: "Camión de carga negro en una autopista",
  },
  drivers: {
    title: "Encuentre la ruta ideal para usted.",
    text: "Una solicitud breve. Le ofrecemos empleos que se ajustan a sus rutas, su tiempo en casa y sus expectativas de pago, y todo 100 % gratis.",
    items: ["Nunca paga ni un centavo por postularse", "Pago, ruta y equipo claros desde el principio", "Reclutadores reales, no spam de bolsas de trabajo"],
    cta: "Postularme →",
    photoAlt: "Camionero de pie junto a su camión rojo",
  },
};

export const benefits = {
  title: "Pago por conductor, como debe ser.",
  lead: "Un socio de reclutamiento que solo gana cuando usted gana.",
  items: [
    { title: "Basado en resultados", text: "Sin colocación, no hay factura. Nuestros incentivos están 100 % alineados con los suyos." },
    { title: "Conductores preseleccionados", text: "Revisamos la clase de CDL, la experiencia, el MVR y el tipo de equipo de cada candidato." },
    { title: "Pagos según la retención", text: "La tarifa se divide en etapas, así que usted tiene protección si un conductor no se queda." },
    { title: "Respuesta rápida", text: "Los primeros candidatos calificados suelen llegar a su bandeja de entrada en 72 horas." },
    { title: "Sin contratos largos", text: "Amplíe o pause el servicio cuando quiera. Sin mínimos, sin ataduras, sin sorpresas." },
    { title: "Reclutador exclusivo", text: "Un solo punto de contacto que conoce a fondo su flota, sus rutas y su cultura." },
  ],
};

export const howItWorks = {
  title: "Del asiento vacío al conductor contratado.",
  lead: "Cuatro pasos sencillos. Usted mantiene el control en todo momento.",
  steps: [
    { title: "Cuéntenos qué necesita", text: "Indíquenos sus rutas, equipo, pago y criterios de contratación en una breve evaluación." },
    { title: "Buscamos y evaluamos", text: "Nuestros reclutadores buscan en nuestra red nacional y revisan a cada candidato." },
    { title: "Usted entrevista y decide", text: "Hable con conductores calificados y contrate solo a los que quiera." },
    { title: "Pague mientras se quedan", text: "Tarifa fija por colocación, vinculada a etapas de retención que usted acuerda desde el principio." },
  ],
};

export const coverage = {
  title: "Conductores para cada ruta, en los 48 estados.",
  lead: "Nuestros reclutadores trabajan desde Nashville y encuentran conductores CDL-A de costa a costa, dondequiera que circulen sus camiones.",
};

export const pricing = {
  title: "Una tarifa fija por cada conductor colocado.",
  lead: "Sin anticipos. Sin mínimos mensuales. Usted solo paga cuando un conductor calificado empieza a trabajar para usted.",
  compare: {
    them: "Reclutadores con anticipo",
    us: "APG",
    rows: [
      { label: "Costo inicial", them: "Anticipo de $3,000+/mes", us: "$0" },
      { label: "Usted paga", them: "Den resultados o no", us: "Solo cuando un conductor empieza" },
      { label: "Contrato", them: "Compromiso a largo plazo", us: "Ninguno; pause cuando quiera" },
      { label: "Si un conductor renuncia", them: "Usted ya pagó", us: "Lo cubren las etapas de retención" },
      { label: "Candidatos", them: "Montones de currículums", us: "MVR, PSP y experiencia revisados previamente" },
    ],
  },
  card: {
    pill: "Pago por contratación",
    price: "Tarifa fija",
    unit: "/ conductor",
    note: "Cotización a la medida según el tipo de conductor y el volumen",
    includes: [
      "Se factura solo cuando el conductor empieza",
      "Etapas de retención acordadas antes de la incorporación",
      "Sin mínimos mensuales ni contratos",
      "Reclutador exclusivo incluido",
    ],
    cta: "Solicitar cotización →",
  },
};

export const driverTypes = {
  title: "Conductores que reclutamos.",
  lead: "De OTR a local, de caja seca a materiales peligrosos: cubrimos cada rincón de la carretera.",
  types: [
    "OTR / Larga distancia",
    "Regional",
    "Local / En casa a diario",
    "Caja seca",
    "Refrigerado",
    "Plataforma",
    "Cisterna",
    "Materiales peligrosos",
    "Conductores en equipo",
    "Propietarios-operadores",
    "Rutas dedicadas",
    "Transporte de vehículos",
    "Intermodal",
    "Camión de caja / CDL-B",
  ],
};

export const faq = {
  title: "¿Preguntas? Tenemos respuestas.",
  lead: "¿No encuentra lo que busca? Nuestro equipo está a una llamada de distancia.",
  cta: "Hablar con un reclutador",
  items: [
    {
      q: "¿Cómo funciona el reclutamiento con pago por conductor?",
      a: "Usted nos dice a quién necesita, nosotros buscamos y evaluamos a los candidatos, y usted solo paga una tarifa fija cuando un conductor que contrató empieza a trabajar.",
    },
    {
      q: "¿Qué pasa si un conductor no se queda?",
      a: "La tarifa está vinculada a etapas de retención acordadas desde el principio, así que usted tiene protección si una colocación no funciona.",
    },
    { q: "¿Quién toma la decisión final de contratación?", a: "Usted. Le presentamos candidatos calificados; usted los entrevista y decide." },
    {
      q: "¿De verdad es gratis para los conductores?",
      a: "Sí. Los conductores nunca pagan por postularse ni por obtener empleo. Las empresas de transporte cubren la tarifa de reclutamiento.",
    },
    { q: "¿Qué tan rápido puedo recibir candidatos?", a: "La mayoría de las empresas de transporte recibe sus primeros candidatos calificados en un plazo de 72 horas." },
    { q: "¿En qué estados trabajan?", a: "Reclutamos conductores CDL en los 48 estados contiguos." },
  ],
};

export const cta = {
  title: "¿Quiere llenar sus asientos vacíos?",
  lead: "Solicite hoy su evaluación gratuita, sin compromiso.",
  leadShort: "Evaluación gratuita, sin compromiso.",
  checks: ["Evaluación gratuita, sin compromiso", "Candidatos en su bandeja de entrada en 72 horas", "Usted solo paga cuando un conductor empieza"],
  call: "¿Prefiere hablar? Llame al",
  form: {
    title: "Reciba opciones en 48 horas",
    lead: "Cuéntenos quién es. Toma menos de 2 minutos.",
    privacy: "Nunca vendemos su información.",
    privacyLink: "Política de privacidad",
    tabsLabel: "Soy",
    tabCarrier: "Busco conductores",
    tabDriver: "Busco empleo",
    done: "¡Todo listo!",
    sending: "Enviando…",
    submitCarrier: "Solicitar evaluación →",
    submitDriver: "Postularme →",
    fields: {
      company: { label: "Nombre de la empresa", placeholder: "p. ej., Midwest Freight LLC" },
      usdot: { label: "N.º USDOT / MC", placeholder: "1234567" },
      driversNeeded: { label: "Conductores necesarios", placeholder: "1 – 5" },
      workEmail: { label: "Correo electrónico de trabajo", placeholder: "nombre@empresa.com" },
      name: { label: "Nombre completo", placeholder: "p. ej., Juan Pérez" },
      phone: { label: "Teléfono", placeholder: "(555) 123-4567" },
      experience: {
        label: "Experiencia con CDL-A",
        placeholder: "Seleccione",
        options: [
          { value: "Less than 1 year", label: "Menos de 1 año" },
          { value: "1 – 2 years", label: "1 – 2 años" },
          { value: "3 – 5 years", label: "3 – 5 años" },
          { value: "5+ years", label: "Más de 5 años" },
        ],
      },
      email: { label: "Correo electrónico", placeholder: "nombre@correo.com" },
    },
  },
};

export const formMessages = {
  required: {
    company: "Ingrese el nombre de su empresa.",
    email: "Ingrese su correo electrónico.",
    workEmail: "Ingrese su correo electrónico de trabajo.",
    name: "Ingrese su nombre completo.",
    phone: "Ingrese su número de teléfono.",
  },
  invalidEmail: "Ingrese un correo electrónico válido.",
  checkFields: "Revise los campos marcados.",
  unavailable: "Lo sentimos, el formulario no está disponible en este momento. Llámenos, por favor.",
  failed: "Lo sentimos, algo salió mal. Inténtelo de nuevo o llámenos.",
  thanks: "¡Gracias! Nos comunicaremos con usted en breve.",
  successCarrier: "¡Gracias! Un reclutador revisará su caso y se comunicará con usted en un plazo de un día hábil.",
  successDriver: "¡Gracias por postularse! Un reclutador se comunicará con usted por teléfono para hablar de empleos que le convengan.",
};

export const mobileCta = {
  findDrivers: "Buscar conductores →",
  call: "Llamar al",
};

export const footer = {
  blurb: "Conectamos talento. Impulsamos el éxito. Reclutamiento de conductores CDL en todo el país para transportistas de todos los tamaños.",
  blurbShort: "Conectamos talento. Impulsamos el éxito. Reclutamiento de conductores CDL en todo el país.",
  columns: [
    {
      title: "Transportistas",
      links: [
        { label: "Buscar conductores", href: "/#get-started" },
        { label: "Precios", href: "/#pricing" },
        { label: "Cómo funciona", href: "/#how-it-works" },
        { label: "Evaluación gratuita", href: "/#get-started", desktopOnly: true },
      ],
    },
    {
      title: "Conductores",
      links: [
        { label: "Postularme", href: "/#apply" },
        { label: "Empleos para conductores", href: "/#drivers" },
        { label: "Por qué es gratis", href: "/#faq", desktopOnly: true },
        { label: "Recursos", href: "/#faq" },
      ],
    },
    {
      title: "Empresa",
      desktopOnly: true,
      links: [
        { label: "Sobre nosotros", href: "/about" },
        { label: "Preguntas frecuentes", href: "/#faq" },
        { label: "Contacto", href: "/#get-started" },
        { label: "Nuestro equipo", href: "/about#team" },
      ],
    },
  ],
  homeLabel: "Inicio de APG Solutions",
  contact: "Contacto",
  rights: "Todos los derechos reservados.",
  privacyShort: "Privacidad",
  termsShort: "Términos",
  privacy: "Política de privacidad",
  terms: "Términos del servicio",
};

// PLACEHOLDER team (see content/en/apg.ts). Spanish job titles are gendered: check them when the real people are added.
export const team = {
  title: "Conozca al equipo.",
  lead: "Reclutadores reales en Nashville que contestan el teléfono, no un centro de llamadas.",
  previewCta: "Más sobre APG →",
  members: [
    {
      name: "Jordan Hayes",
      role: "Fundador y CEO",
      bio: "Pasó una década del lado de los transportistas antes de fundar APG para cambiar la forma en que se contrata a los conductores.",
    },
    {
      name: "Marcus Reed",
      role: "Director de reclutamiento",
      bio: "Dirige el equipo de reclutamiento y sabe qué hace que un conductor se quede más allá de la segunda semana.",
    },
    {
      name: "Alicia Moore",
      role: "Gerente de atención a transportistas",
      bio: "Su contacto principal: conoce sus rutas, su equipo y sus criterios de contratación.",
    },
    {
      name: "Tyler Brooks",
      role: "Reclutador sénior de conductores",
      bio: "Habla con conductores todos los días y los conecta con empleos que les dan el tiempo en casa que buscan.",
    },
  ] as { name: string; role: string; bio: string; photo?: string }[],
};

export const notFound = {
  metaTitle: "Página no encontrada",
  badge: "404 · Página no encontrada",
  title: "Ruta equivocada.",
  lead: "Esta página no existe o cambió de dirección. Volvamos a la carretera.",
  home: "Volver al inicio",
  cta: "Buscar conductores →",
};

export const about = {
  metaTitle: "Sobre nosotros",
  metaDescription:
    "APG Solutions es una empresa de reclutamiento CDL con sede en Nashville, TN. Ayudamos a transportistas de los 48 estados a contratar conductores preseleccionados y solo cobramos cuando un conductor empieza a trabajar.",
  badge: "Sobre APG Solutions",
  title: "Hecho en Nashville. ",
  titleAccent: "Primero, el conductor.",
  lead: "APG Solutions es una empresa de reclutamiento de conductores CDL con sede en Nashville, Tennessee. Ayudamos a transportistas de los 48 estados a poner conductores preseleccionados al volante de sus camiones, y solo cobramos cuando un conductor empieza a trabajar.",
  story: {
    title: "Reclutamiento que funciona como el transporte de carga.",
    paragraphs: [
      "Fundamos APG Solutions después de ver a transportistas pagar grandes anticipos a reclutadores que nunca cubrieron una vacante. El transporte de carga vive de resultados, y nuestros precios también: una tarifa fija por conductor, vinculada al tiempo que se queda.",
      "Nuestro equipo trabaja desde Nashville y habla con conductores todos los días. Conocemos a fondo las rutas, el tipo de equipo y la cultura de su empresa, y le enviamos personas que encajan, no un montón de currículums.",
    ],
  },
  photoAlt: "Camión de carga en una autopista al atardecer",
};
