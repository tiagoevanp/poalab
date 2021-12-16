import React from 'react';

import { Card } from '../../Card';
import Bancada from '../../../resources/equipment/bancada.png';
import Printrbot from '../../../resources/equipment/printrbot.png';
import Wanhao from '../../../resources/equipment/wanhao.png';
import Cma6040 from '../../../resources/equipment/cma6040.png';
import PlotterSaga from '../../../resources/equipment/plottersaga.png';
import Fresa from '../../../resources/equipment/fresa1.png';
import Filabot from '../../../resources/equipment/filabot.png';
import PlotterHp from '../../../resources/equipment/plotterhp.png';
import './style.scss';

export const Equipments = () =>
	<section className='page-content'>
		<div className='page-content-title'><h1>Equipamentos</h1></div>
		<div className='equipments'>
			<Card img={{ src: Wanhao, alt: 'wanhao' }} title='2 Impressoras 3D Wanhao Duplicator 4' description='2 extrusores, filamento 1.75mm, camada entre 0.1 e 0.5mm, área: 225mm x 145mm x 150mm, base aquecida' />
			<Card img={{ src: Printrbot, alt: 'printrbot' }} title='1 Impressora 3D printrbot simple metal' description='Filamento de 1.75mm, resolução de camada entre 0.1 e 0.5mm, área de trabalho: 152mm x 152mm x 152mm' />
			<Card img={{ src: Cma6040, alt: 'cma6040' }} title='1 Cortadora Laser CMA6040' description='Área de corte de 60cm x 40cm, potência do laser: 70-80W, Espessura do corte: 0-25mm para acrílico, Precisão < 0.01mm' />
			<Card img={{ src: PlotterSaga, alt: 'plotter saga' }} title='1 Plotter de Recorte SAGA 720i' description='Largura máxima da mídia: 72cm, largura máxima de corte: 62cm, laser point, velocidade: 600mm/s, precisão de repetição: 0.082mm' />
			<Card img={{ src: Fresa, alt: 'fresa' }} title='1 Fresadora MTC-200×250 (não operacional)' description='Área: 200mm x 250mm, eixo z: 150mm, refrigeração do motor a ar, velocidade de rotação programável' />
			<Card img={{ src: Filabot, alt: 'filabot' }} title='1 Extrusora de filamento modelo filabot wee' description='Bico de extrusão de 1.75mm, adequado para ABS e PLA, taxa de extrusão entre 13 e 51 cm/minuto' />
			<Card img={{ src: PlotterHp, alt: 'plotter hp' }} title='1 Plotter de Impressão HP T520 (não operacional)' description='Alimentação por rolo ou folha, largura de impressão: 61cm, espessura: até 11.8 milésimos de polegada, resolução de impressão: 2400 x 1200 dpi' />
			<Card img={{ src: Bancada, alt: 'bancada' }} title='Bancada Eletrônica' description='Contêm osciloscópio, fonte de bancada, estação de solda, componentes eletrônicos diversos.' />
		</div>
	</section>;
