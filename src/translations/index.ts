interface Translation {
  navigation: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    highlight: string;
    description: string;
    learnMore: string;
    contactUs: string;
  };
  stats: {
    projects: string;
    experience: string;
    area: string;
    specialists: string;
  };
  services: {
    title: string;
    items: {
      plumbing: string;
      sanitary: string;
      heating: string;
      ventilation: string;
      ecological: string;
      technological: string;
    };
  };
  detailedServices: {
    title: string;
    items: {
      innovative: {
        title: string;
        description: string;
      };
      ecological: {
        title: string;
        description: string;
      };
      modernization: {
        title: string;
        description: string;
      };
      logistics: {
        title: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
  };
  contact: {
    title: string;
    phone: string;
    office: string;
    companyInfo: {
      name: string;
      address: string;
      taxId: {
        label: string;
        value: string;
      };
      vatId?: {
        label: string;
        value: string;
      };
      regon: {
        label: string;
        value: string;
      };
    };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  partners: {
    title: string;
  };
}

export const translations: Record<string, Translation> = {
  de: {
    navigation: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Installationen zur',
      highlight: 'Perfektion',
      description: 'Moderne Installationen für Mehrfamilienhäuser, Industrie- und Bürogebäude. Effizienz und Komfort durch fortschrittliche Technologien.',
      learnMore: 'Mehr erfahren',
      contactUs: 'Kontaktieren Sie uns'
    },
    stats: {
      projects: 'abgeschlossene Projekte',
      experience: 'Jahre Erfahrung',
      area: 'Gesamtfläche',
      specialists: 'Montage-Spezialisten'
    },
    services: {
      title: 'UNSERE LEISTUNGEN',
      items: {
        plumbing: 'Wasser-, Abwasser- und Regenwassersysteme',
        sanitary: 'Sanitärinstallationen',
        heating: 'Zentralheizungsanlagen',
        ventilation: 'Lüftung und Klimatisierung',
        ecological: 'Ökologische Heizsysteme',
        technological: 'Individuelle technologische Lösungen'
      }
    },
    detailedServices: {
      title: 'ANGEBOT',
      items: {
        innovative: {
          title: 'Innovative Installationslösungen',
          description: 'Wir sind spezialisiert auf die Planung und Installation von Systemen für Mehrfamilienhäuser, Industrie- und Bürogebäude unter Verwendung neuester Technologien für maximale Effizienz und Modernität. Wir implementieren fortschrittliche Wasser- und Dampfkühlsysteme, die Kostenoptimierung und Benutzerkomfort garantieren.'
        },
        ecological: {
          title: 'Ökologie und Technologie',
          description: 'Wir schützen die Umwelt durch den Einsatz ökologischer Heizsysteme und innovativer Sanitärlösungen, was unser Engagement für nachhaltige Entwicklung und höchste Qualitätsstandards unterstreicht.'
        },
        modernization: {
          title: 'Modernisierung und Service',
          description: 'Wir modernisieren und warten bestehende Installationssysteme in Wohn- und Geschäftsgebäuden und gewährleisten deren Kontinuität und Modernität bei minimaler Störung für Bewohner und Nutzer.'
        },
        logistics: {
          title: 'Fortschrittliche Systeme für Logistik und Lager',
          description: 'Wir bieten energieeffiziente Installationen für Lager- und Logistikobjekte, einschließlich Wärmerückgewinnungssysteme und energiesparende Heizsysteme. Unsere Lösungen sind darauf ausgerichtet, die Auswirkungen auf den laufenden Betrieb zu minimieren und die Einsparungen zu maximieren.'
        }
      }
    },
    projects: {
      title: 'UNSERE PROJEKTE'
    },
    contact: {
      title: 'KONTAKTIEREN SIE UNS',
      phone: 'Telefon',
      office: 'Büro',
      companyInfo: {
        name: 'BUD-MAR BIS Marek Kuligowski',
        address: '03-111 Warschau, ul. Gladioli 17',
        taxId: {
          label: 'PL Steuernummer',
          value: 'PL7741271078'
        },
        vatId: {
          label: 'DE Steuernummer',
          value: 'DE05365485633'
        },
        regon: {
          label: 'REGON',
          value: '611320105'
        }
      },
      form: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden!',
        error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.'
      }
    },
    partners: {
      title: 'PARTNERSCHAFTEN'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Installations brought to',
      highlight: 'perfection',
      description: 'Modern installations for residential, industrial, and office buildings. Efficiency and comfort through advanced technologies.',
      learnMore: 'Learn More',
      contactUs: 'Contact Us'
    },
    stats: {
      projects: 'completed projects',
      experience: 'years of experience',
      area: 'total area',
      specialists: 'installation specialists'
    },
    services: {
      title: 'OUR SERVICES',
      items: {
        plumbing: 'Water, sewage, and rainwater systems',
        sanitary: 'Sanitary equipment installation',
        heating: 'Central heating systems',
        ventilation: 'Comprehensive ventilation and air conditioning',
        ecological: 'Ecological heating systems',
        technological: 'Individual technological solutions'
      }
    },
    detailedServices: {
      title: 'SERVICES',
      items: {
        innovative: {
          title: 'Innovative Installation Solutions',
          description: 'We specialize in designing and implementing systems for residential, industrial, and office buildings, using the latest technologies to ensure maximum efficiency and modernity. We implement advanced water and steam cooling systems that guarantee cost optimization and user comfort.'
        },
        ecological: {
          title: 'Ecology and Technology',
          description: 'We care for the environment through the use of ecological heating systems and innovative plumbing solutions, confirming our commitment to sustainable development and the highest quality standards.'
        },
        modernization: {
          title: 'Modernization and Service',
          description: 'We handle the modernization and servicing of existing installation systems in residential and commercial buildings, ensuring their continuity and modernity with minimal disruption to residents and users.'
        },
        logistics: {
          title: 'Advanced Systems for Logistics and Warehouses',
          description: 'We offer energy-efficient installations for warehouse and logistics facilities, including heat recovery systems and energy-saving heating systems. Our solutions are designed to minimize impact on ongoing operations and maximize savings.'
        }
      }
    },
    projects: {
      title: 'OUR PROJECTS'
    },
    contact: {
      title: 'CONTACT US',
      phone: 'Phone',
      office: 'Office',
      companyInfo: {
        name: 'BUD-MAR BIS Marek Kuligowski',
        address: '03-111 Warszawa, ul. Gladioli 17',
        taxId: {
          label: 'NIP',
          value: 'PL7741271078'
        },
        regon: {
          label: 'REGON',
          value: '611320105'
        }
      },
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you for your message. We will contact you soon!',
        error: 'Failed to send message. Please try again later.'
      }
    },
    partners: {
      title: 'PARTNERSHIPS'
    }
  },
  es: {
    navigation: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Instalaciones llevadas a la',
      highlight: 'perfección',
      description: 'Instalaciones modernas para edificios residenciales, industriales y oficinas. Eficiencia y confort a través de tecnologías avanzadas.',
      learnMore: 'Más información',
      contactUs: 'Contáctenos'
    },
    stats: {
      projects: 'proyectos realizados',
      experience: 'años de experiencia',
      area: 'de superficie',
      specialists: 'especialistas en montaje'
    },
    services: {
      title: 'NUESTROS SERVICIOS',
      items: {
        plumbing: 'Sistemas de alcantarillado y aguas pluviales',
        sanitary: 'Instalación de equipos sanitarios',
        heating: 'Sistemas de calefacción central',
        ventilation: 'Ventilación y aire acondicionado',
        ecological: 'Sistemas de calefacción ecológicos',
        technological: 'Soluciones tecnológicas individuales'
      }
    },
    detailedServices: {
      title: 'SERVICIOS',
      items: {
        innovative: {
          title: 'Soluciones innovadoras en instalaciones',
          description: 'Estamos especializados en el diseño y ejecución de instalaciones para edificios plurifamiliares, industriales y de oficinas, utilizando las últimas tecnologías para garantizar la máxima eficiencia y modernidad. Implantamos sistemas avanzados de refrigeración por agua y refrigeración evaporativa que garantizan la optimización de costes y el confort.'
        },
        ecological: {
          title: 'Ecología y tecnología',
          description: 'Cuidamos el medio ambiente mediante el uso de sistemas de calefacción ecológicos y soluciones innovadoras de saneamiento de agua y alcantarillado, lo que confirma nuestro compromiso con la sostenibilidad y los más altos estándares de calidad.'
        },
        modernization: {
          title: 'Modernización y mantenimiento',
          description: 'Modernizamos y mantenemos los sistemas de fontanería y electricidad existentes en edificios residenciales y comerciales, garantizando que sigan siendo operativos y modernos con las mínimas molestias para residentes y usuarios.'
        },
        logistics: {
          title: 'Sistemas avanzados de logística y almacenamiento',
          description: 'Ofrecemos instalaciones energéticamente eficientes para instalación de almacenes e instalaciones logísticas, incluidos sistemas de recuperación de calor y sistemas de calefacción energéticamente eficientes. Nuestras soluciones están diseñadas para minimizar el impacto en las operaciones actuales y maximizar el ahorro.'
        }
      }
    },
    projects: {
      title: 'NUESTROS PROYECTOS'
    },
    contact: {
      title: 'CONTÁCTENOS',
      phone: 'Teléfono',
      office: 'Oficina',
      companyInfo: {
        name: 'BUD-MAR BIS Marek Kuligowski',
        address: '03-111 Warszawa, ul. Gladioli 17',
        taxId: {
          label: 'NIP',
          value: 'PL774174108'
        },
        regon: {
          label: 'REGON',
          value: '611320105'
        }
      },
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Gracias por su mensaje. Nos pondremos en contacto pronto!',
        error: 'No se pudo enviar el mensaje. Por favor, inténtelo de nuevo más tarde.'
      }
    },
    partners: {
      title: 'COLABORACIONES'
    }
  },
  pl: {
    navigation: {
      home: 'Strona Główna',
      about: 'O Nas',
      services: 'Oferta',
      projects: 'Nasze Realizacje',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Instalacje doprowadzone do',
      highlight: 'perfekcji',
      description: 'Nowoczesne instalacje dla budynków wielorodzinnych, przemysłowych i biurowych. Efektywność i komfort dzięki zaawansowanym technologiom.',
      learnMore: 'Dowiedz się więcej',
      contactUs: 'Skontaktuj się z nami'
    },
    stats: {
      projects: 'zrealizowanych projektów',
      experience: 'doświadczenia w branży',
      area: 'powierzchni',
      specialists: 'specjalistów montażowych'
    },
    services: {
      title: 'ZAKRES USŁUG',
      items: {
        plumbing: 'Systemy wodno-kanalizacyjne i deszczowe',
        sanitary: 'Montaż urządzeń sanitarnych (biały montaż)',
        heating: 'Instalacje centralnego ogrzewania',
        ventilation: 'Kompleksowa wentylacja i klimatyzacja',
        ecological: 'Ekologiczne systemy grzewcze',
        technological: 'Indywidualne rozwiązania technologiczne'
      }
    },
    detailedServices: {
      title: 'OFERTA',
      items: {
        innovative: {
          title: 'Innowacyjne Rozwiązania Instalacyjne',
          description: 'Specjalizujemy się w projektowaniu i wykonawstwie instalacji dla budynków wielorodzinnych, przemysłowych i biurowych, wykorzystując najnowsze technologie do zapewnienia maksymalnej efektywności i nowoczesności. Wdrażamy zaawansowane systemy chłodzenia wodą oraz parowe, które gwarantują optymalizację kosztów i komfort użytkowania.'
        },
        ecological: {
          title: 'Ekologia i Technologia',
          description: 'Dbamy o środowisko poprzez stosowanie ekologicznych systemów grzewczych i innowacyjnych rozwiązań z zakresu wod-kan, co potwierdza naszą dbałość o zrównoważony rozwój i najwyższe standardy jakościowe.'
        },
        modernization: {
          title: 'Modernizacja i Serwis',
          description: 'Zajmujemy się modernizacją i serwisowaniem istniejących systemów instalacyjnych w budynkach mieszkalnych i komercyjnych, zapewniając ich ciągłość działania i nowoczesność z minimalnym zamóceniem dla mieszkańców i użytkowników.'
        },
        logistics: {
          title: 'Zaawansowane Systemy dla Logistyki i Magazynów',
          description: 'Oferujemy instalacje o wysokiej efektywności energetycznej dla obiektów magazynowych i logistycznych, w tym systemy odzysku ciepła oraz energooszczędne systemy grzewcze. Nasze rozwiązania są projektowane z myślą o minimalizacji wpływu na bieżącą działalność i maksymalizacji oszczędności.'
        }
      }
    },
    projects: {
      title: 'NASZE REALIZACJE'
    },
    contact: {
      title: 'KONTAKT Z NAMI',
      phone: 'Telefon',
      office: 'Biuro',
      companyInfo: {
        name: 'BUD-MAR BIS Marek Kuligowski',
        address: '03-111 Warszawa, ul. Gladioli 17',
        taxId: {
          label: 'NIP',
          value: '774174108'
        },
        regon: {
          label: 'REGON',
          value: '611320105'
        }
      },
      form: {
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'Email',
        message: 'Wiadomość',
        send: 'Wyślij wiadomość',
        sending: 'Wysyłanie...',
        success: 'Dziękujemy za wiadomość. Skontaktujemy się wkrótce!',
        error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.'
      }
    },
    partners: {
      title: 'WSPÓŁPRACE'
    }
  }
};