// Spanish version of content/en/legal.ts. Same DRAFT status: the client's lawyer must review both before launch.
// The first intro line says the English version wins if the two ever differ; drop it only if the lawyer says so.

import type { LegalDoc, LegalSection } from "../en/legal";
import { site } from "../site";
import { hours } from "./apg";

const UPDATED = "Última actualización: 16 de noviembre de 2026";

const TRANSLATION_NOTE =
  "Esta traducción se ofrece para su comodidad. Si existe alguna discrepancia entre esta versión y la versión en inglés, prevalece la versión en inglés.";

const contactSection: LegalSection = {
  heading: "Contáctenos",
  paragraphs: [
    `${site.legalName}, Nashville, Tennessee`,
    `Correo electrónico: ${site.email}`,
    `Teléfono: ${site.phone} (${hours})`,
  ],
};

export const privacy: LegalDoc = {
  metaTitle: "Política de privacidad",
  metaDescription: `Cómo ${site.name} recopila, usa y protege la información que transportistas y conductores comparten con nosotros.`,
  title: "Política de privacidad",
  updated: UPDATED,
  intro: [
    TRANSLATION_NOTE,
    `${site.legalName} (“APG” o “nosotros”) es una empresa de reclutamiento de conductores CDL con sede en Nashville, Tennessee. Esta política explica qué información recopilamos a través de este sitio web, cómo la usamos y con quién la compartimos.`,
  ],
  sections: [
    {
      heading: "Información que recopilamos",
      paragraphs: [
        "Solo recopilamos la información que usted decide darnos, además de los datos técnicos básicos necesarios para que el sitio funcione.",
      ],
      list: [
        "Transportistas: nombre de la empresa, número USDOT o MC, cantidad de conductores que necesitan y correo electrónico de trabajo.",
        "Conductores: nombre completo, número de teléfono, experiencia con CDL-A y correo electrónico.",
        "Cualquier otra información que nos dé cuando nos llame o nos escriba por mensaje de texto o correo electrónico.",
        "Datos técnicos que nuestro proveedor de alojamiento web registra automáticamente, como la dirección IP, el tipo de navegador y las páginas visitadas. Estos datos se usan por motivos de seguridad y para mantener el sitio en funcionamiento.",
      ],
      after: ["No usamos cookies publicitarias ni herramientas de rastreo de terceros en este sitio web."],
    },
    {
      heading: "Cómo usamos su información",
      list: [
        "Para responder a su solicitud y hablar con usted sobre contrataciones o empleos para conductores.",
        "Para conectar a los conductores con empleos de transportistas que se ajusten a su experiencia, sus rutas y sus necesidades de tiempo en casa.",
        "Para evaluar a los candidatos. Los informes de antecedentes, como el MVR o el PSP, solo se solicitan con su autorización por escrito, que se pide por separado.",
        "Para operar, proteger y mejorar este sitio web.",
        "Para cumplir con nuestras obligaciones legales.",
      ],
    },
    {
      heading: "Cómo compartimos su información",
      list: [
        "Conductores: compartimos su perfil con los transportistas cuyos empleos se ajustan a su perfil, para que puedan comunicarse con usted y programar una entrevista. Solo lo hacemos como parte de la búsqueda de un empleo para usted.",
        "Transportistas: compartimos el nombre de su empresa y los detalles del empleo con los conductores que le presentamos.",
        "Proveedores de servicios: las empresas que alojan este sitio web y envían nuestros correos electrónicos procesan datos en nuestro nombre y no pueden usarlos para ningún otro fin.",
        "Motivos legales: cuando la ley lo exija, o para proteger nuestros derechos, a nuestros usuarios o al público.",
      ],
      after: ["Nunca vendemos su información personal ni la compartimos con fines publicitarios."],
    },
    {
      heading: "Llamadas, mensajes de texto y correos electrónicos",
      paragraphs: [
        "Al enviar un formulario, usted acepta que APG se comunique con usted por teléfono, mensaje de texto o correo electrónico sobre su solicitud o sobre empleos y candidatos que se ajusten a ella. Pueden aplicarse tarifas por mensajes y datos. Puede responder STOP a cualquier mensaje de texto para dejar de recibirlos, o pedirnos en cualquier momento que dejemos de comunicarnos con usted por teléfono o por correo electrónico. Aceptar que nos comuniquemos con usted no es una condición para usar nuestro servicio.",
      ],
    },
    {
      heading: "Cuánto tiempo conservamos su información",
      paragraphs: [
        "Conservamos su información mientras trabajamos activamente con usted y durante un tiempo razonable después, por si surge un nuevo empleo o candidato adecuado. Puede pedirnos que la eliminemos antes.",
      ],
    },
    {
      heading: "Seguridad",
      paragraphs: [
        "Usamos medidas razonables para proteger su información, incluidas las conexiones cifradas (HTTPS). Ningún sistema es completamente seguro, por lo que le pedimos que no envíe datos confidenciales, como su número de Seguro Social, a través de los formularios del sitio web.",
      ],
    },
    {
      heading: "Sus opciones",
      paragraphs: [
        "Puede pedirnos que le mostremos, corrijamos o eliminemos la información que tenemos sobre usted, o que dejemos de comunicarnos con usted. Escríbanos o llámenos con los datos de contacto que aparecen abajo y le responderemos en un plazo razonable.",
      ],
    },
    {
      heading: "Menores de edad",
      paragraphs: [
        "Este sitio web está dirigido a transportistas y a conductores adultos. No recopilamos a sabiendas información de menores de 18 años.",
      ],
    },
    {
      heading: "Cambios en esta política",
      paragraphs: [
        "Podemos actualizar esta política ocasionalmente. La fecha que aparece al principio indica cuándo se modificó por última vez.",
      ],
    },
    contactSection,
  ],
};

export const terms: LegalDoc = {
  metaTitle: "Términos del servicio",
  metaDescription: `Los términos de uso del sitio web y del servicio de reclutamiento de ${site.name}.`,
  title: "Términos del servicio",
  updated: UPDATED,
  intro: [
    TRANSLATION_NOTE,
    `Estos términos se aplican al uso del sitio web de ${site.legalName} (“APG” o “nosotros”). Al usar el sitio o enviar un formulario, usted los acepta. Si no está de acuerdo con ellos, le pedimos que no use el sitio.`,
  ],
  sections: [
    {
      heading: "Nuestro servicio",
      paragraphs: [
        "APG es un servicio de reclutamiento que conecta a empresas de autotransporte con conductores CDL. No somos el empleador de los conductores que presentamos. Cada transportista toma sus propias decisiones de contratación y establece por su cuenta el salario, las prestaciones y las condiciones de empleo que ofrece.",
      ],
    },
    {
      heading: "Para conductores",
      list: [
        "Nuestro servicio es gratuito para los conductores. Nunca tendrá que pagarle a APG por postularse ni por obtener un empleo.",
        "No podemos garantizar que reciba una oferta de empleo ni que se concrete su contratación.",
        "Antes de contratar, los transportistas pueden hacer sus propias verificaciones, como revisar el MVR y el PSP, y hacer pruebas de detección de drogas y de manejo.",
      ],
    },
    {
      heading: "Para transportistas",
      list: [
        "Las tarifas de colocación y las etapas de retención se establecen en un acuerdo por escrito independiente antes de que empecemos a reclutar para usted. Si ese acuerdo difiere de cualquier contenido de este sitio web, prevalece el acuerdo.",
        "Las cifras de este sitio, como el tiempo hasta el primer candidato, son resultados habituales, no garantías.",
        "Usted es responsable de sus propias decisiones de contratación y de cumplir con los requisitos del DOT y de la legislación laboral.",
      ],
    },
    {
      heading: "Información que nos proporciona",
      paragraphs: [
        "Le pedimos que nos dé información exacta y actualizada, y que solo envíe información que tenga permiso para compartir. La forma en que la tratamos se describe en nuestra Política de privacidad.",
      ],
    },
    {
      heading: "Uso aceptable",
      paragraphs: ["Usted se compromete a no:"],
      list: [
        "Enviar información falsa ni presentar solicitudes en nombre de otra persona sin el permiso de esa persona.",
        "Copiar, extraer de forma automatizada ni revender contenido o datos de este sitio.",
        "Intentar dañar o sobrecargar el sitio, o acceder a él sin autorización.",
      ],
    },
    {
      heading: "Nuestro contenido",
      paragraphs: [
        "Los textos, el diseño, los logotipos y los gráficos de este sitio pertenecen a APG o a sus licenciantes. Puede ver y compartir las páginas para uso personal o profesional, pero no copiarlas para otro sitio web o servicio.",
      ],
    },
    {
      heading: "Exención de responsabilidad",
      paragraphs: [
        "El sitio web se ofrece “tal cual”. Nos esforzamos por mantenerlo exacto y disponible, pero no garantizamos que esté siempre libre de errores o en línea.",
      ],
    },
    {
      heading: "Limitación de responsabilidad",
      paragraphs: [
        "En la medida en que lo permita la ley, APG no será responsable de los daños indirectos, incidentales o consecuentes derivados del uso que usted haga de este sitio web. Nuestras responsabilidades con los transportistas se establecen en el acuerdo por escrito que tienen con nosotros.",
      ],
    },
    {
      heading: "Ley aplicable",
      paragraphs: [
        "Estos términos se rigen por las leyes del estado de Tennessee. Cualquier controversia se resolverá en los tribunales estatales o federales ubicados en el condado de Davidson, Tennessee.",
      ],
    },
    {
      heading: "Cambios en estos términos",
      paragraphs: [
        "Podemos actualizar estos términos ocasionalmente. La fecha que aparece al principio indica cuándo se modificaron por última vez.",
      ],
    },
    contactSection,
  ],
};
