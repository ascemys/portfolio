import React from 'react';
import { motion } from 'framer-motion';

const editingSkills = [
  'Montage vidéo',
  'Storytelling visuel',
  'Rythme et pacing',
  'Color grading',
  'Sound design',
  'Sous-titrage',
  'Motion design de base',
  'Montage vertical pour réseaux sociaux',
  'Vidéo corporate',
  'Mariage',
  'Séminaire',
  'Clip vidéo',
  'Clipping',
  'Podcast',
];

const toolSkills = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Optimisation des formats sociaux',
  'Adobe After Effects',
  'Photoshop',
  'Sony A7IV',
  'Sony FX3',
  'Canon R5',
  'Avid Media Composer',
  'Sony Vegas Pro',
];

export default function Skills() {
  return (
    <section id="competences" className="py-24 md:py-36 bg-0a0a0a">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-FF00FF uppercase mb-4">
            Compétences
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Savoir-faire technique et créatif
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
              Compétences créatives
            </h3>

            <div className="flex flex-wrap gap-3">
              {editingSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-sm text-white/70 border border-white/10 px-4 py-2.5 rounded-sm hover:border-FF00FF/40 hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
              Outils logiciels
            </h3>

            <div className="flex flex-wrap gap-3">
              {toolSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                  className="text-sm text-white/70 bg-white/5 border border-white/5 px-4 py-2.5 rounded-sm hover:border-FF00FF/40 hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
