document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Definición de Datos de la Malla ---
    const ramos = [
        // Semestre 1
        { id: 'geologia_general_i', nombre: 'Geología General I', semestre: 1, requisitos: [] },
        { id: 'neontologia', nombre: 'Neontología', semestre: 1, requisitos: [] },
        { id: 'introduccion_ciencias', nombre: 'Introducción a las ciencias', semestre: 1, requisitos: [] },
        { id: 'matematicas', nombre: 'Matemáticas', semestre: 1, requisitos: [] },
        { id: 'algebra_i', nombre: 'Algebra I', semestre: 1, requisitos: [] },
        { id: 'formacion_integral', nombre: 'Formación Integral', semestre: 1, requisitos: [] },
        // Semestre 2
        { id: 'geologia_general_ii', nombre: 'Geología General II', semestre: 2, requisitos: ['geologia_general_i', 'neontologia'] },
        { id: 'ingles_i', nombre: 'Ingles I', semestre: 2, requisitos: [] },
        { id: 'quimica_general', nombre: 'Química General', semestre: 2, requisitos: ['introduccion_ciencias'] },
        { id: 'calculo_i', nombre: 'Calculo I', semestre: 2, requisitos: ['matematicas'] },
        { id: 'fisica_i', nombre: 'Física I', semestre: 2, requisitos: ['introduccion_ciencias'] },
        // Semestre 3
        { id: 'cristalografia_mineralogia', nombre: 'Cristalografía y Mineralogía Óptica', semestre: 3, requisitos: ['geologia_general_ii'] },
        { id: 'ingles_ii', nombre: 'Ingles II', semestre: 3, requisitos: ['ingles_i'] },
        { id: 'paleontologia', nombre: 'Paleontología', semestre: 3, requisitos: ['geologia_general_ii'] },
        { id: 'calculo_ii', nombre: 'Calculo II', semestre: 3, requisitos: ['calculo_i'] },
        { id: 'fisica_ii', nombre: 'Física II', semestre: 3, requisitos: ['fisica_i'] },
        { id: 'optativo_i', nombre: 'Optativo I', semestre: 3, requisitos: [] },
        // Semestre 4
        { id: 'petrologia_ignea_meta_i', nombre: 'Petrología Ígnea y Metamórfica I', semestre: 4, requisitos: ['cristalografia_mineralogia'] },
        { id: 'ingles_iii', nombre: 'Ingles III', semestre: 4, requisitos: ['ingles_ii'] },
        { id: 'geologia_estructural', nombre: 'Geología Estructural', semestre: 4, requisitos: ['geologia_general_ii'] },
        { id: 'termodinamica', nombre: 'Termodinámica', semestre: 4, requisitos: ['quimica_general'] },
        { id: 'fisica_iii', nombre: 'Física III', semestre: 4, requisitos: ['fisica_ii'] },
        { id: 'estadistica_aplicada', nombre: 'Estadística Aplicada', semestre: 4, requisitos: ['calculo_ii'] },
        // Semestre 5
        { id: 'geoquimica', nombre: 'Geoquímica', semestre: 5, requisitos: ['petrologia_ignea_meta_i'] },
        { id: 'ingles_iv', nombre: 'Ingles IV', semestre: 5, requisitos: ['ingles_iii'] },
        { id: 'cartografia_geologica_sig', nombre: 'Cartografía Geológica y SIG', semestre: 5, requisitos: ['geologia_estructural'] },
        { id: 'petrologia_sedimentaria', nombre: 'Petrología Sedimentaria', semestre: 5, requisitos: ['paleontologia'] },
        { id: 'mecanica_fluidos', nombre: 'Mecánica de Fluidos', semestre: 5, requisitos: ['termodinamica'] },
        { id: 'optativo_ii', nombre: 'Optativo II', semestre: 5, requisitos: [] },
        // Semestre 6
        { id: 'petrologia_ignea_meta_ii', nombre: 'Petrología Ígnea y Metamórfica II', semestre: 6, requisitos: ['geoquimica'] },
        { id: 'geologia_historica', nombre: 'Geología Histórica', semestre: 6, requisitos: ['petrologia_sedimentaria'] },
        { id: 'geotectonica', nombre: 'Geotectónica', semestre: 6, requisitos: ['cartografia_geologica_sig'] },
        { id: 'estratigrafia_analisis_cuencas', nombre: 'Estratigrafía y Análisis de Cuencas', semestre: 6, requisitos: ['petrologia_sedimentaria'] },
        { id: 'geofisica', nombre: 'Geofísica', semestre: 6, requisitos: ['geologia_estructural'] },
        { id: 'electivo_i', nombre: 'Electivo I', semestre: 6, requisitos: [] },
        // Semestre 7
        { id: 'depositos_minerales', nombre: 'Depósitos Minerales', semestre: 7, requisitos: ['petrologia_ignea_meta_ii'] },
        { id: 'geologia_chile', nombre: 'Geología de Chile', semestre: 7, requisitos: ['geologia_historica', 'geotectonica'] },
        { id: 'hidrogeologia_i', nombre: 'Hidrogeología I', semestre: 7, requisitos: ['estratigrafia_analisis_cuencas'] },
        { id: 'geomorfologia', nombre: 'Geomorfología', semestre: 7, requisitos: ['estratigrafia_analisis_cuencas'] },
        { id: 'metodologia_investigacion', nombre: 'Metodología de la Investigación', semestre: 7, requisitos: [] },
        { id: 'electivo_ii', nombre: 'Electivo II', semestre: 7, requisitos: [] },
        // Semestre 8
        { id: 'metalogenesis_microscopia', nombre: 'Metalogénesis y Microscopia de Menas', semestre: 8, requisitos: ['depositos_minerales'] },
        { id: 'geologia_campo_i', nombre: 'Geología de Campo I', semestre: 8, requisitos: ['geologia_chile'] },
        { id: 'geologia_ambiental', nombre: 'Geología Ambiental', semestre: 8, requisitos: ['hidrogeologia_i', 'geomorfologia'] },
        { id: 'geologia_economica', nombre: 'Geología Económica', semestre: 8, requisitos: ['depositos_minerales'] },
        { id: 'seminario_proyecto', nombre: 'Seminario de proyecto', semestre: 8, requisitos: ['metodologia_investigacion'] },
        { id: 'electivo_iii', nombre: 'Electivo III', semestre: 8, requisitos: [] },
        // Semestre 9
        { id: 'exploraciones_mineras', nombre: 'Exploraciones Mineras', semestre: 9, requisitos: ['metalogenesis_microscopia', 'geologia_campo_i', 'geologia_ambiental', 'geologia_economica', 'seminario_proyecto'] },
        { id: 'geologia_campo_ii', nombre: 'Geología de Campo II', semestre: 9, requisitos: ['geologia_campo_i'] },
        { id: 'hidrogeologia_ii', nombre: 'Hidrogeología II', semestre: 9, requisitos: ['hidrogeologia_i'] },
        { id: 'geoestadistica', nombre: 'Geoestadística', semestre: 9, requisitos: ['geologia_economica'] },
        { id: 'electivo_iv', nombre: 'Electivo IV', semestre: 9, requisitos: [] },
        // Semestre 10
        { id: 'geologia_minas', nombre: 'Geología de Minas', semestre: 10, requisitos: ['exploraciones_mineras'] },
        { id: 'geologia_campo_iii', nombre: 'Geología de Campo III', semestre: 10, requisitos: ['geologia_campo_ii'] },
        { id: 'riesgos_geologicos', nombre: 'Riesgos Geológicos', semestre: 10, requisitos: ['hidrogeologia_ii'] },
        { id: 'ingenieria_geologica', nombre: 'Ingeniería Geológica', semestre: 10, requisitos: ['geologia_ambiental'] },
        { id: 'proyecto_titulacion', nombre: 'Proyecto de Titulación', semestre: 10, requisitos: ['seminario_proyecto'] },
        { id: 'electivo_v', nombre: 'Electivo V', semestre: 10, requisitos: [] },
        // Semestre 11
        { id: 'practica_profesional', nombre: 'Practica Profesional', semestre: 11, requisitos: ['proyecto_titulacion'] },
        { id: 'trabajo_titulacion', nombre: 'Trabajo de Titulación', semestre: 11, requisitos: ['proyecto_titulacion'] },
    ];

    // --- 2. Elementos del DOM ---
    const container = document.getElementById('malla-curricular-container');
    const notificacion = document.getElementById('notificacion');
    const notificacionTexto = document.getElementById('notificacion-texto');
    const notificacionCerrar = document.getElementById('notificacion-cerrar');
    const resetButton = document.getElementById('resetButton');

    // --- 3. Estado de la Aplicación ---
    let ramosAprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    // --- 4. Funciones ---

    /** Guarda el conjunto de ramos aprobados en localStorage. */
    const guardarProgreso = () => {
        localStorage.setItem('ramosAprobados', JSON.stringify(Array.from(ramosAprobados)));
    };

    /** Muestra una notificación con un mensaje. */
    const mostrarNotificacion = (mensaje) => {
        notificacionTexto.innerHTML = mensaje;
        notificacion.classList.remove('hidden');
    };

    /** Oculta la notificación. */
    const ocultarNotificacion = () => {
        notificacion.classList.add('hidden');
    };

    /** Genera el HTML de la malla curricular. */
    const dibujarMalla = () => {
        container.innerHTML = '';
        const maxSemestre = Math.max(...ramos.map(r => r.semestre));

        for (let i = 1; i <= maxSemestre; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.className = 'semestre-columna';
            
            const semestreTitulo = document.createElement('div');
            semestreTitulo.className = 'semestre-titulo';
            semestreTitulo.textContent = `Semestre ${i}`;
            semestreColumna.appendChild(semestreTitulo);

            const ramosDelSemestre = ramos.filter(ramo => ramo.semestre === i);
            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.textContent = ramo.nombre;
                ramoDiv.dataset.id = ramo.id;
                semestreColumna.appendChild(ramoDiv);
            });
            container.appendChild(semestreColumna);
        }
        actualizarEstadoVisual();
    };

    /** Actualiza las clases CSS de cada ramo (aprobado, bloqueado, disponible). */
    const actualizarEstadoVisual = () => {
        document.querySelectorAll('.ramo').forEach(ramoDiv => {
            const id = ramoDiv.dataset.id;
            const ramo = ramos.find(r => r.id === id);
            
            ramoDiv.classList.remove('aprobado', 'bloqueado');

            if (ramosAprobados.has(id)) {
                ramoDiv.classList.add('aprobado');
            } else {
                const requisitosFaltantes = ramo.requisitos.filter(reqId => !ramosAprobados.has(reqId));
                if (requisitosFaltantes.length > 0) {
                    ramoDiv.classList.add('bloqueado');
                }
            }
        });
    };

    /** Maneja el clic en un ramo. */
    const manejarClickRamo = (e) => {
        const ramoDiv = e.target.closest('.ramo');
        if (!ramoDiv) return;

        const id = ramoDiv.dataset.id;
        const ramo = ramos.find(r => r.id === id);

        if (ramosAprobados.has(id)) {
            // Opcional: Desaprobar un ramo (y los que dependen de él)
            // Por simplicidad, esta función está desactivada. Para activarla,
            // habría que implementar una lógica compleja de desaprobación en cascada.
            console.log(`El ramo "${ramo.nombre}" ya está aprobado.`);
            return;
        }

        const requisitosFaltantesIds = ramo.requisitos.filter(reqId => !ramosAprobados.has(reqId));
        
        if (requisitosFaltantesIds.length > 0) {
            const nombresRequisitosFaltantes = requisitosFaltantesIds.map(reqId => {
                return ramos.find(r => r.id === reqId).nombre;
            });
            mostrarNotificacion(`<strong>Ramo Bloqueado</strong><br>Necesitas aprobar:<br><ul>${nombresRequisitosFaltantes.map(n => `<li>${n}</li>`).join('')}</ul>`);
        } else {
            ramosAprobados.add(id);
            guardarProgreso();
            actualizarEstadoVisual();
        }
    };

    /** Limpia todo el progreso guardado. */
    const resetearProgreso = () => {
        if (confirm('¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
            ramosAprobados.clear();
            guardarProgreso();
            actualizarEstadoVisual();
        }
    };

    // --- 5. Inicialización y Event Listeners ---
    dibujarMalla();
    container.addEventListener('click', manejarClickRamo);
    notificacionCerrar.addEventListener('click', ocultarNotificacion);
    resetButton.addEventListener('click', resetearProgreso);
});
