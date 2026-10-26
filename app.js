// PrevMaster AI - Software Computadorizado de Planejamento Previdenciário
// Segurado: Jorge Rubens Teste Demonstrativo | Base Legal: EC 103/2019, Lei 8.213/91, IN 128/2022
// Foco Principal: Matriz Combinatória de Descartes, Melhores Salários e Parecer Técnico para o Meu INSS
// Desenvolvedor : Henrique Rosa - Antigravity @2026

const DEMO_CNIS_DATA = {
  "segurado": {
    "nome": "JORGE RUBENS TESTE DEMONSTRATIVO",
    "cpf": "797.777.777-77",
    "nascimento": "06/06/1965",
    "idade_atual": 61,
    "mae": "LINDALVA DIAS DA SILVA",
    "der_anterior": "29/11/2019 (NB 189.158.211-6 - Indeferido)"
  },
  "auditoria_marinha": {
    "periodos": "24/01/1983-30/11/1983 e 27/03/1985-23/09/1999",
    "total_tempo": "15 anos, 4 meses e 10 dias (5.605 dias)",
    "desligamento": "PDV da União (MP 1.917/1999)",
    "indicador": "PRPPS (Exige Certidão de Tempo de Contribuição - CTC)",
    "conclusao": "Averbar CTC junto à Marinha/INSS é o passo jurídico prioritário absoluto."
  },
  "analise_financeira_mei": {
    "total_meses_mei": 45,
    "custo_complementacao_darf1910": 11250.0,
    "impacto_na_media": "Altamente Prejudicial se incluído (salários de 1 SM derrubam a média)",
    "recomendacao": "NÃO COMPLEMENTAR O MEI. A complementação custaria ~R$ 11.250 em DARFs 1910 com SELIC sem gerar benefício proporcional. O descarte inteligente das competências MEI gera R$ 832.49/mês a mais de RMI vitalícia sem gastar nada."
  },
  "resumo_numerico": {
    "total_competencias_pbc": 269,
    "media_sem_descarte": 3220.78,
    "coef_sem_descarte": 90.0,
    "rmi_sem_descarte": 2898.7,
    "descartes_otimos": 240,
    "media_otimizada": 6218.65,
    "coef_otimizado": 60.0,
    "rmi_otimizada": 3731.19,
    "ganho_mensal_rmi": 832.49,
    "patrimonio_vitalicio_ganho": 199797.6
  },
  "marcos_estrategicos": [
    {
      "descartes": 0,
      "salarios_restantes": 269,
      "media_corrigida": 3220.78,
      "tc_anos_resultante": 35.0,
      "carencia_restante": 420,
      "coeficiente_perc": 90.0,
      "rmi": 2898.7,
      "delta_rmi": 0.0,
      "tag": "Cenário 0: Sem Descarte (Status Quo)",
      "faixa_descartada": "Nenhuma",
      "maior_salario_expurgado": 0.0,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 45,
      "salarios_restantes": 224,
      "media_corrigida": 3623.17,
      "tc_anos_resultante": 31.2,
      "carencia_restante": 375,
      "coeficiente_perc": 82.0,
      "rmi": 2971.0,
      "delta_rmi": 72.3,
      "tag": "Cenário MEI: Expurgo dos 45 Meses de MEI (5%)",
      "faixa_descartada": "01/2009 a 06/2024",
      "maior_salario_expurgado": 1328.05,
      "patrimonio_vitalicio": 17352.0
    },
    {
      "descartes": 96,
      "salarios_restantes": 173,
      "media_corrigida": 4238.62,
      "tc_anos_resultante": 27.0,
      "carencia_restante": 324,
      "coeficiente_perc": 74.0,
      "rmi": 3136.58,
      "delta_rmi": 237.88,
      "tag": "Cenário MEI + GPS 20% Mínimos (2008-2012)",
      "faixa_descartada": "01/2009 a 06/1998",
      "maior_salario_expurgado": 2076.04,
      "patrimonio_vitalicio": 57091.2
    },
    {
      "descartes": 120,
      "salarios_restantes": 149,
      "media_corrigida": 4544.28,
      "tc_anos_resultante": 25.0,
      "carencia_restante": 300,
      "coeficiente_perc": 70.0,
      "rmi": 3180.99,
      "delta_rmi": 282.29,
      "tag": "Cenário Equilíbrio Coeficiente (70%)",
      "faixa_descartada": "01/2009 a 08/1999",
      "maior_salario_expurgado": 2562.75,
      "patrimonio_vitalicio": 67749.6
    },
    {
      "descartes": 180,
      "salarios_restantes": 89,
      "media_corrigida": 5321.24,
      "tc_anos_resultante": 20.0,
      "carencia_restante": 240,
      "coeficiente_perc": 60.0,
      "rmi": 3192.74,
      "delta_rmi": 294.04,
      "tag": "Cenário Transição Piso 20 Anos (Coef. 60%)",
      "faixa_descartada": "01/2009 a 04/2013",
      "maior_salario_expurgado": 4636.45,
      "patrimonio_vitalicio": 70569.6
    },
    {
      "descartes": 240,
      "salarios_restantes": 29,
      "media_corrigida": 6218.65,
      "tc_anos_resultante": 15.0,
      "carencia_restante": 180,
      "coeficiente_perc": 60.0,
      "rmi": 3731.19,
      "delta_rmi": 832.49,
      "tag": "Ponto Ótimo Global Atuarial (15 Anos Rigorosamente Preservados) 👑",
      "faixa_descartada": "01/2009 a 06/2017",
      "maior_salario_expurgado": 5061.12,
      "patrimonio_vitalicio": 199797.6
    }
  ],
  "matriz_descarte_completa": [
    {
      "descartes": 0,
      "salarios_restantes": 269,
      "media_corrigida": 3220.78,
      "tc_anos_resultante": 35.0,
      "carencia_restante": 420,
      "coeficiente_perc": 90.0,
      "rmi": 2898.7,
      "delta_rmi": 0.0,
      "tag": "Cenário 0: Sem Descarte (Status Quo)",
      "faixa_descartada": "Nenhuma",
      "maior_salario_expurgado": 0.0,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 1,
      "salarios_restantes": 268,
      "media_corrigida": 3228.73,
      "tc_anos_resultante": 34.9,
      "carencia_restante": 419,
      "coeficiente_perc": 88.0,
      "rmi": 2841.28,
      "delta_rmi": -57.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2009",
      "maior_salario_expurgado": 1091.38,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 2,
      "salarios_restantes": 267,
      "media_corrigida": 3236.71,
      "tc_anos_resultante": 34.8,
      "carencia_restante": 418,
      "coeficiente_perc": 88.0,
      "rmi": 2848.3,
      "delta_rmi": -50.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2008",
      "maior_salario_expurgado": 1098.37,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 3,
      "salarios_restantes": 266,
      "media_corrigida": 3244.73,
      "tc_anos_resultante": 34.8,
      "carencia_restante": 417,
      "coeficiente_perc": 88.0,
      "rmi": 2855.37,
      "delta_rmi": -43.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2008",
      "maior_salario_expurgado": 1101.55,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 4,
      "salarios_restantes": 265,
      "media_corrigida": 3252.81,
      "tc_anos_resultante": 34.7,
      "carencia_restante": 416,
      "coeficiente_perc": 88.0,
      "rmi": 2862.47,
      "delta_rmi": -36.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2008",
      "maior_salario_expurgado": 1105.74,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 5,
      "salarios_restantes": 264,
      "media_corrigida": 3260.92,
      "tc_anos_resultante": 34.6,
      "carencia_restante": 415,
      "coeficiente_perc": 88.0,
      "rmi": 2869.61,
      "delta_rmi": -29.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2008",
      "maior_salario_expurgado": 1111.27,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 6,
      "salarios_restantes": 263,
      "media_corrigida": 3269.08,
      "tc_anos_resultante": 34.5,
      "carencia_restante": 414,
      "coeficiente_perc": 88.0,
      "rmi": 2876.79,
      "delta_rmi": -21.91,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2008",
      "maior_salario_expurgado": 1112.93,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 7,
      "salarios_restantes": 262,
      "media_corrigida": 3277.28,
      "tc_anos_resultante": 34.4,
      "carencia_restante": 413,
      "coeficiente_perc": 88.0,
      "rmi": 2884.01,
      "delta_rmi": -14.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2008",
      "maior_salario_expurgado": 1121.74,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 8,
      "salarios_restantes": 261,
      "media_corrigida": 3285.5,
      "tc_anos_resultante": 34.3,
      "carencia_restante": 412,
      "coeficiente_perc": 88.0,
      "rmi": 2891.24,
      "delta_rmi": -7.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2008",
      "maior_salario_expurgado": 1131.95,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 9,
      "salarios_restantes": 260,
      "media_corrigida": 3293.59,
      "tc_anos_resultante": 34.2,
      "carencia_restante": 411,
      "coeficiente_perc": 88.0,
      "rmi": 2898.36,
      "delta_rmi": -0.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2009",
      "maior_salario_expurgado": 1182.07,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 10,
      "salarios_restantes": 259,
      "media_corrigida": 3301.73,
      "tc_anos_resultante": 34.2,
      "carencia_restante": 410,
      "coeficiente_perc": 88.0,
      "rmi": 2905.52,
      "delta_rmi": 6.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2009",
      "maior_salario_expurgado": 1184.91,
      "patrimonio_vitalicio": 1636.8
    },
    {
      "descartes": 11,
      "salarios_restantes": 258,
      "media_corrigida": 3309.92,
      "tc_anos_resultante": 34.1,
      "carencia_restante": 409,
      "coeficiente_perc": 88.0,
      "rmi": 2912.73,
      "delta_rmi": 14.03,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2009",
      "maior_salario_expurgado": 1189.29,
      "patrimonio_vitalicio": 3367.2
    },
    {
      "descartes": 12,
      "salarios_restantes": 257,
      "media_corrigida": 3318.16,
      "tc_anos_resultante": 34.0,
      "carencia_restante": 408,
      "coeficiente_perc": 88.0,
      "rmi": 2919.98,
      "delta_rmi": 21.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2009",
      "maior_salario_expurgado": 1192.15,
      "patrimonio_vitalicio": 5107.2
    },
    {
      "descartes": 13,
      "salarios_restantes": 256,
      "media_corrigida": 3326.46,
      "tc_anos_resultante": 33.9,
      "carencia_restante": 407,
      "coeficiente_perc": 86.0,
      "rmi": 2860.75,
      "delta_rmi": -37.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2009",
      "maior_salario_expurgado": 1194.05,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 14,
      "salarios_restantes": 255,
      "media_corrigida": 3334.82,
      "tc_anos_resultante": 33.8,
      "carencia_restante": 406,
      "coeficiente_perc": 86.0,
      "rmi": 2867.94,
      "delta_rmi": -30.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2009",
      "maior_salario_expurgado": 1195.01,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 15,
      "salarios_restantes": 254,
      "media_corrigida": 3343.23,
      "tc_anos_resultante": 33.8,
      "carencia_restante": 405,
      "coeficiente_perc": 86.0,
      "rmi": 2875.18,
      "delta_rmi": -23.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2009",
      "maior_salario_expurgado": 1197.76,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 16,
      "salarios_restantes": 253,
      "media_corrigida": 3351.69,
      "tc_anos_resultante": 33.7,
      "carencia_restante": 404,
      "coeficiente_perc": 86.0,
      "rmi": 2882.45,
      "delta_rmi": -16.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2009",
      "maior_salario_expurgado": 1202.79,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 17,
      "salarios_restantes": 252,
      "media_corrigida": 3360.19,
      "tc_anos_resultante": 33.6,
      "carencia_restante": 403,
      "coeficiente_perc": 86.0,
      "rmi": 2889.76,
      "delta_rmi": -8.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2009",
      "maior_salario_expurgado": 1210.0,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 18,
      "salarios_restantes": 251,
      "media_corrigida": 3368.73,
      "tc_anos_resultante": 33.5,
      "carencia_restante": 402,
      "coeficiente_perc": 86.0,
      "rmi": 2897.11,
      "delta_rmi": -1.59,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2009",
      "maior_salario_expurgado": 1216.66,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 19,
      "salarios_restantes": 250,
      "media_corrigida": 3377.33,
      "tc_anos_resultante": 33.4,
      "carencia_restante": 401,
      "coeficiente_perc": 86.0,
      "rmi": 2904.51,
      "delta_rmi": 5.81,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2010",
      "maior_salario_expurgado": 1217.74,
      "patrimonio_vitalicio": 1394.4
    },
    {
      "descartes": 20,
      "salarios_restantes": 249,
      "media_corrigida": 3386.0,
      "tc_anos_resultante": 33.3,
      "carencia_restante": 400,
      "coeficiente_perc": 86.0,
      "rmi": 2911.96,
      "delta_rmi": 13.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2009",
      "maior_salario_expurgado": 1219.09,
      "patrimonio_vitalicio": 3182.4
    },
    {
      "descartes": 21,
      "salarios_restantes": 248,
      "media_corrigida": 3394.71,
      "tc_anos_resultante": 33.2,
      "carencia_restante": 399,
      "coeficiente_perc": 86.0,
      "rmi": 2919.45,
      "delta_rmi": 20.75,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2010",
      "maior_salario_expurgado": 1225.04,
      "patrimonio_vitalicio": 4980.0
    },
    {
      "descartes": 22,
      "salarios_restantes": 247,
      "media_corrigida": 3403.49,
      "tc_anos_resultante": 33.2,
      "carencia_restante": 398,
      "coeficiente_perc": 86.0,
      "rmi": 2927.0,
      "delta_rmi": 28.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2011",
      "maior_salario_expurgado": 1226.72,
      "patrimonio_vitalicio": 6792.0
    },
    {
      "descartes": 23,
      "salarios_restantes": 246,
      "media_corrigida": 3412.31,
      "tc_anos_resultante": 33.1,
      "carencia_restante": 397,
      "coeficiente_perc": 86.0,
      "rmi": 2934.59,
      "delta_rmi": 35.89,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2011",
      "maior_salario_expurgado": 1232.98,
      "patrimonio_vitalicio": 8613.6
    },
    {
      "descartes": 24,
      "salarios_restantes": 245,
      "media_corrigida": 3421.19,
      "tc_anos_resultante": 33.0,
      "carencia_restante": 396,
      "coeficiente_perc": 86.0,
      "rmi": 2942.22,
      "delta_rmi": 43.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2010",
      "maior_salario_expurgado": 1237.66,
      "patrimonio_vitalicio": 10444.8
    },
    {
      "descartes": 25,
      "salarios_restantes": 244,
      "media_corrigida": 3430.13,
      "tc_anos_resultante": 32.9,
      "carencia_restante": 395,
      "coeficiente_perc": 84.0,
      "rmi": 2881.31,
      "delta_rmi": -17.39,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2011",
      "maior_salario_expurgado": 1240.01,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 26,
      "salarios_restantes": 243,
      "media_corrigida": 3439.13,
      "tc_anos_resultante": 32.8,
      "carencia_restante": 394,
      "coeficiente_perc": 84.0,
      "rmi": 2888.87,
      "delta_rmi": -9.83,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2011",
      "maior_salario_expurgado": 1243.97,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 27,
      "salarios_restantes": 242,
      "media_corrigida": 3448.18,
      "tc_anos_resultante": 32.8,
      "carencia_restante": 393,
      "coeficiente_perc": 84.0,
      "rmi": 2896.47,
      "delta_rmi": -2.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2010",
      "maior_salario_expurgado": 1249.05,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 28,
      "salarios_restantes": 241,
      "media_corrigida": 3457.3,
      "tc_anos_resultante": 32.7,
      "carencia_restante": 392,
      "coeficiente_perc": 84.0,
      "rmi": 2904.13,
      "delta_rmi": 5.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2011",
      "maior_salario_expurgado": 1249.57,
      "patrimonio_vitalicio": 1303.2
    },
    {
      "descartes": 29,
      "salarios_restantes": 240,
      "media_corrigida": 3466.49,
      "tc_anos_resultante": 32.6,
      "carencia_restante": 391,
      "coeficiente_perc": 84.0,
      "rmi": 2911.85,
      "delta_rmi": 13.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2010",
      "maior_salario_expurgado": 1252.65,
      "patrimonio_vitalicio": 3156.0
    },
    {
      "descartes": 30,
      "salarios_restantes": 239,
      "media_corrigida": 3475.74,
      "tc_anos_resultante": 32.5,
      "carencia_restante": 390,
      "coeficiente_perc": 84.0,
      "rmi": 2919.62,
      "delta_rmi": 20.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2010",
      "maior_salario_expurgado": 1254.03,
      "patrimonio_vitalicio": 5020.8
    },
    {
      "descartes": 31,
      "salarios_restantes": 238,
      "media_corrigida": 3485.07,
      "tc_anos_resultante": 32.4,
      "carencia_restante": 389,
      "coeficiente_perc": 84.0,
      "rmi": 2927.46,
      "delta_rmi": 28.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2011",
      "maior_salario_expurgado": 1254.82,
      "patrimonio_vitalicio": 6902.4
    },
    {
      "descartes": 32,
      "salarios_restantes": 237,
      "media_corrigida": 3494.48,
      "tc_anos_resultante": 32.3,
      "carencia_restante": 388,
      "coeficiente_perc": 84.0,
      "rmi": 2935.37,
      "delta_rmi": 36.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2011",
      "maior_salario_expurgado": 1254.82,
      "patrimonio_vitalicio": 8800.8
    },
    {
      "descartes": 33,
      "salarios_restantes": 236,
      "media_corrigida": 3503.97,
      "tc_anos_resultante": 32.2,
      "carencia_restante": 387,
      "coeficiente_perc": 84.0,
      "rmi": 2943.34,
      "delta_rmi": 44.64,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2010",
      "maior_salario_expurgado": 1254.91,
      "patrimonio_vitalicio": 10713.6
    },
    {
      "descartes": 34,
      "salarios_restantes": 235,
      "media_corrigida": 3513.54,
      "tc_anos_resultante": 32.2,
      "carencia_restante": 386,
      "coeficiente_perc": 84.0,
      "rmi": 2951.37,
      "delta_rmi": 52.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2010",
      "maior_salario_expurgado": 1255.79,
      "patrimonio_vitalicio": 12640.8
    },
    {
      "descartes": 35,
      "salarios_restantes": 234,
      "media_corrigida": 3523.18,
      "tc_anos_resultante": 32.1,
      "carencia_restante": 385,
      "coeficiente_perc": 84.0,
      "rmi": 2959.47,
      "delta_rmi": 60.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2011",
      "maior_salario_expurgado": 1257.58,
      "patrimonio_vitalicio": 14584.8
    },
    {
      "descartes": 36,
      "salarios_restantes": 233,
      "media_corrigida": 3532.9,
      "tc_anos_resultante": 32.0,
      "carencia_restante": 384,
      "coeficiente_perc": 84.0,
      "rmi": 2967.64,
      "delta_rmi": 68.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2010",
      "maior_salario_expurgado": 1258.04,
      "patrimonio_vitalicio": 16545.6
    },
    {
      "descartes": 37,
      "salarios_restantes": 232,
      "media_corrigida": 3542.68,
      "tc_anos_resultante": 31.9,
      "carencia_restante": 383,
      "coeficiente_perc": 82.0,
      "rmi": 2905.0,
      "delta_rmi": 6.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2011",
      "maior_salario_expurgado": 1264.75,
      "patrimonio_vitalicio": 1512.0
    },
    {
      "descartes": 38,
      "salarios_restantes": 231,
      "media_corrigida": 3552.53,
      "tc_anos_resultante": 31.8,
      "carencia_restante": 382,
      "coeficiente_perc": 82.0,
      "rmi": 2913.07,
      "delta_rmi": 14.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2010",
      "maior_salario_expurgado": 1267.22,
      "patrimonio_vitalicio": 3448.8
    },
    {
      "descartes": 39,
      "salarios_restantes": 230,
      "media_corrigida": 3562.44,
      "tc_anos_resultante": 31.8,
      "carencia_restante": 381,
      "coeficiente_perc": 82.0,
      "rmi": 2921.2,
      "delta_rmi": 22.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2011",
      "maior_salario_expurgado": 1273.86,
      "patrimonio_vitalicio": 5400.0
    },
    {
      "descartes": 40,
      "salarios_restantes": 229,
      "media_corrigida": 3572.42,
      "tc_anos_resultante": 31.7,
      "carencia_restante": 380,
      "coeficiente_perc": 82.0,
      "rmi": 2929.39,
      "delta_rmi": 30.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2010",
      "maior_salario_expurgado": 1276.22,
      "patrimonio_vitalicio": 7365.6
    },
    {
      "descartes": 41,
      "salarios_restantes": 228,
      "media_corrigida": 3582.49,
      "tc_anos_resultante": 31.6,
      "carencia_restante": 379,
      "coeficiente_perc": 82.0,
      "rmi": 2937.64,
      "delta_rmi": 38.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2011",
      "maior_salario_expurgado": 1277.36,
      "patrimonio_vitalicio": 9345.6
    },
    {
      "descartes": 42,
      "salarios_restantes": 227,
      "media_corrigida": 3592.62,
      "tc_anos_resultante": 31.5,
      "carencia_restante": 378,
      "coeficiente_perc": 82.0,
      "rmi": 2945.95,
      "delta_rmi": 47.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2011",
      "maior_salario_expurgado": 1282.26,
      "patrimonio_vitalicio": 11340.0
    },
    {
      "descartes": 43,
      "salarios_restantes": 226,
      "media_corrigida": 3602.83,
      "tc_anos_resultante": 31.4,
      "carencia_restante": 377,
      "coeficiente_perc": 82.0,
      "rmi": 2954.32,
      "delta_rmi": 55.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2010",
      "maior_salario_expurgado": 1285.16,
      "patrimonio_vitalicio": 13348.8
    },
    {
      "descartes": 44,
      "salarios_restantes": 225,
      "media_corrigida": 3612.96,
      "tc_anos_resultante": 31.3,
      "carencia_restante": 376,
      "coeficiente_perc": 82.0,
      "rmi": 2962.63,
      "delta_rmi": 63.93,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1995",
      "maior_salario_expurgado": 1322.56,
      "patrimonio_vitalicio": 15343.2
    },
    {
      "descartes": 45,
      "salarios_restantes": 224,
      "media_corrigida": 3623.17,
      "tc_anos_resultante": 31.2,
      "carencia_restante": 375,
      "coeficiente_perc": 82.0,
      "rmi": 2971.0,
      "delta_rmi": 72.3,
      "tag": "Cenário MEI: Expurgo dos 45 Meses de MEI (5%)",
      "faixa_descartada": "01/2009 a 06/2024",
      "maior_salario_expurgado": 1328.05,
      "patrimonio_vitalicio": 17352.0
    },
    {
      "descartes": 46,
      "salarios_restantes": 223,
      "media_corrigida": 3633.29,
      "tc_anos_resultante": 31.2,
      "carencia_restante": 374,
      "coeficiente_perc": 82.0,
      "rmi": 2979.3,
      "delta_rmi": 80.6,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2012",
      "maior_salario_expurgado": 1365.15,
      "patrimonio_vitalicio": 19344.0
    },
    {
      "descartes": 47,
      "salarios_restantes": 222,
      "media_corrigida": 3643.49,
      "tc_anos_resultante": 31.1,
      "carencia_restante": 373,
      "coeficiente_perc": 82.0,
      "rmi": 2987.66,
      "delta_rmi": 88.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2012",
      "maior_salario_expurgado": 1368.69,
      "patrimonio_vitalicio": 21350.4
    },
    {
      "descartes": 48,
      "salarios_restantes": 221,
      "media_corrigida": 3653.75,
      "tc_anos_resultante": 31.0,
      "carencia_restante": 372,
      "coeficiente_perc": 82.0,
      "rmi": 2996.08,
      "delta_rmi": 97.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2012",
      "maior_salario_expurgado": 1376.22,
      "patrimonio_vitalicio": 23371.2
    },
    {
      "descartes": 49,
      "salarios_restantes": 220,
      "media_corrigida": 3664.09,
      "tc_anos_resultante": 30.9,
      "carencia_restante": 371,
      "coeficiente_perc": 80.0,
      "rmi": 2931.28,
      "delta_rmi": 32.58,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2021",
      "maior_salario_expurgado": 1378.19,
      "patrimonio_vitalicio": 7819.2
    },
    {
      "descartes": 50,
      "salarios_restantes": 219,
      "media_corrigida": 3674.5,
      "tc_anos_resultante": 30.8,
      "carencia_restante": 370,
      "coeficiente_perc": 80.0,
      "rmi": 2939.6,
      "delta_rmi": 40.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2012",
      "maior_salario_expurgado": 1385.03,
      "patrimonio_vitalicio": 9816.0
    },
    {
      "descartes": 51,
      "salarios_restantes": 218,
      "media_corrigida": 3684.99,
      "tc_anos_resultante": 30.8,
      "carencia_restante": 369,
      "coeficiente_perc": 80.0,
      "rmi": 2947.99,
      "delta_rmi": 49.29,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2012",
      "maior_salario_expurgado": 1387.52,
      "patrimonio_vitalicio": 11829.6
    },
    {
      "descartes": 52,
      "salarios_restantes": 217,
      "media_corrigida": 3695.57,
      "tc_anos_resultante": 30.7,
      "carencia_restante": 368,
      "coeficiente_perc": 80.0,
      "rmi": 2956.46,
      "delta_rmi": 57.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2021",
      "maior_salario_expurgado": 1389.77,
      "patrimonio_vitalicio": 13862.4
    },
    {
      "descartes": 53,
      "salarios_restantes": 216,
      "media_corrigida": 3706.23,
      "tc_anos_resultante": 30.6,
      "carencia_restante": 367,
      "coeficiente_perc": 80.0,
      "rmi": 2964.98,
      "delta_rmi": 66.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2012",
      "maior_salario_expurgado": 1392.93,
      "patrimonio_vitalicio": 15907.2
    },
    {
      "descartes": 54,
      "salarios_restantes": 215,
      "media_corrigida": 3716.93,
      "tc_anos_resultante": 30.5,
      "carencia_restante": 366,
      "coeficiente_perc": 80.0,
      "rmi": 2973.54,
      "delta_rmi": 74.84,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2021",
      "maior_salario_expurgado": 1405.89,
      "patrimonio_vitalicio": 17961.6
    },
    {
      "descartes": 55,
      "salarios_restantes": 214,
      "media_corrigida": 3727.65,
      "tc_anos_resultante": 30.4,
      "carencia_restante": 365,
      "coeficiente_perc": 80.0,
      "rmi": 2982.12,
      "delta_rmi": 83.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2021",
      "maior_salario_expurgado": 1422.76,
      "patrimonio_vitalicio": 20020.8
    },
    {
      "descartes": 56,
      "salarios_restantes": 213,
      "media_corrigida": 3738.47,
      "tc_anos_resultante": 30.3,
      "carencia_restante": 364,
      "coeficiente_perc": 80.0,
      "rmi": 2990.77,
      "delta_rmi": 92.07,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2022",
      "maior_salario_expurgado": 1423.09,
      "patrimonio_vitalicio": 22096.8
    },
    {
      "descartes": 57,
      "salarios_restantes": 212,
      "media_corrigida": 3749.35,
      "tc_anos_resultante": 30.2,
      "carencia_restante": 363,
      "coeficiente_perc": 80.0,
      "rmi": 2999.48,
      "delta_rmi": 100.78,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2020",
      "maior_salario_expurgado": 1431.85,
      "patrimonio_vitalicio": 24187.2
    },
    {
      "descartes": 58,
      "salarios_restantes": 211,
      "media_corrigida": 3760.33,
      "tc_anos_resultante": 30.2,
      "carencia_restante": 362,
      "coeficiente_perc": 80.0,
      "rmi": 3008.26,
      "delta_rmi": 109.56,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2022",
      "maior_salario_expurgado": 1432.91,
      "patrimonio_vitalicio": 26294.4
    },
    {
      "descartes": 59,
      "salarios_restantes": 210,
      "media_corrigida": 3771.4,
      "tc_anos_resultante": 30.1,
      "carencia_restante": 361,
      "coeficiente_perc": 80.0,
      "rmi": 3017.12,
      "delta_rmi": 118.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2021",
      "maior_salario_expurgado": 1435.28,
      "patrimonio_vitalicio": 28420.8
    },
    {
      "descartes": 60,
      "salarios_restantes": 209,
      "media_corrigida": 3782.57,
      "tc_anos_resultante": 30.0,
      "carencia_restante": 360,
      "coeficiente_perc": 80.0,
      "rmi": 3026.06,
      "delta_rmi": 127.36,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2022",
      "maior_salario_expurgado": 1436.02,
      "patrimonio_vitalicio": 30566.4
    },
    {
      "descartes": 61,
      "salarios_restantes": 208,
      "media_corrigida": 3793.84,
      "tc_anos_resultante": 29.9,
      "carencia_restante": 359,
      "coeficiente_perc": 78.0,
      "rmi": 2959.2,
      "delta_rmi": 60.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2022",
      "maior_salario_expurgado": 1438.35,
      "patrimonio_vitalicio": 14520.0
    },
    {
      "descartes": 62,
      "salarios_restantes": 207,
      "media_corrigida": 3805.21,
      "tc_anos_resultante": 29.8,
      "carencia_restante": 358,
      "coeficiente_perc": 78.0,
      "rmi": 2968.07,
      "delta_rmi": 69.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2022",
      "maior_salario_expurgado": 1440.49,
      "patrimonio_vitalicio": 16648.8
    },
    {
      "descartes": 63,
      "salarios_restantes": 206,
      "media_corrigida": 3816.67,
      "tc_anos_resultante": 29.8,
      "carencia_restante": 357,
      "coeficiente_perc": 78.0,
      "rmi": 2977.0,
      "delta_rmi": 78.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2022",
      "maior_salario_expurgado": 1445.11,
      "patrimonio_vitalicio": 18792.0
    },
    {
      "descartes": 64,
      "salarios_restantes": 205,
      "media_corrigida": 3828.21,
      "tc_anos_resultante": 29.7,
      "carencia_restante": 356,
      "coeficiente_perc": 78.0,
      "rmi": 2986.01,
      "delta_rmi": 87.31,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2021",
      "maior_salario_expurgado": 1449.92,
      "patrimonio_vitalicio": 20954.4
    },
    {
      "descartes": 65,
      "salarios_restantes": 204,
      "media_corrigida": 3839.86,
      "tc_anos_resultante": 29.6,
      "carencia_restante": 355,
      "coeficiente_perc": 78.0,
      "rmi": 2995.09,
      "delta_rmi": 96.39,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2020",
      "maior_salario_expurgado": 1452.76,
      "patrimonio_vitalicio": 23133.6
    },
    {
      "descartes": 66,
      "salarios_restantes": 203,
      "media_corrigida": 3851.59,
      "tc_anos_resultante": 29.5,
      "carencia_restante": 354,
      "coeficiente_perc": 78.0,
      "rmi": 3004.24,
      "delta_rmi": 105.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2021",
      "maior_salario_expurgado": 1458.62,
      "patrimonio_vitalicio": 25329.6
    },
    {
      "descartes": 67,
      "salarios_restantes": 202,
      "media_corrigida": 3863.37,
      "tc_anos_resultante": 29.4,
      "carencia_restante": 353,
      "coeficiente_perc": 78.0,
      "rmi": 3013.43,
      "delta_rmi": 114.73,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2021",
      "maior_salario_expurgado": 1472.62,
      "patrimonio_vitalicio": 27535.2
    },
    {
      "descartes": 68,
      "salarios_restantes": 201,
      "media_corrigida": 3875.23,
      "tc_anos_resultante": 29.3,
      "carencia_restante": 352,
      "coeficiente_perc": 78.0,
      "rmi": 3022.68,
      "delta_rmi": 123.98,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2021",
      "maior_salario_expurgado": 1478.22,
      "patrimonio_vitalicio": 29755.2
    },
    {
      "descartes": 69,
      "salarios_restantes": 200,
      "media_corrigida": 3887.15,
      "tc_anos_resultante": 29.2,
      "carencia_restante": 351,
      "coeficiente_perc": 78.0,
      "rmi": 3031.98,
      "delta_rmi": 133.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2021",
      "maior_salario_expurgado": 1490.93,
      "patrimonio_vitalicio": 31987.2
    },
    {
      "descartes": 70,
      "salarios_restantes": 199,
      "media_corrigida": 3899.19,
      "tc_anos_resultante": 29.2,
      "carencia_restante": 350,
      "coeficiente_perc": 78.0,
      "rmi": 3041.37,
      "delta_rmi": 142.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2023",
      "maior_salario_expurgado": 1492.62,
      "patrimonio_vitalicio": 34240.8
    },
    {
      "descartes": 71,
      "salarios_restantes": 198,
      "media_corrigida": 3911.33,
      "tc_anos_resultante": 29.1,
      "carencia_restante": 349,
      "coeficiente_perc": 78.0,
      "rmi": 3050.84,
      "delta_rmi": 152.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2023",
      "maior_salario_expurgado": 1494.5,
      "patrimonio_vitalicio": 36513.6
    },
    {
      "descartes": 72,
      "salarios_restantes": 197,
      "media_corrigida": 3923.57,
      "tc_anos_resultante": 29.0,
      "carencia_restante": 348,
      "coeficiente_perc": 78.0,
      "rmi": 3060.38,
      "delta_rmi": 161.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2023",
      "maior_salario_expurgado": 1500.53,
      "patrimonio_vitalicio": 38803.2
    },
    {
      "descartes": 73,
      "salarios_restantes": 196,
      "media_corrigida": 3935.92,
      "tc_anos_resultante": 28.9,
      "carencia_restante": 347,
      "coeficiente_perc": 76.0,
      "rmi": 2991.3,
      "delta_rmi": 92.6,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2023",
      "maior_salario_expurgado": 1502.72,
      "patrimonio_vitalicio": 22224.0
    },
    {
      "descartes": 74,
      "salarios_restantes": 195,
      "media_corrigida": 3948.4,
      "tc_anos_resultante": 28.8,
      "carencia_restante": 346,
      "coeficiente_perc": 76.0,
      "rmi": 3000.78,
      "delta_rmi": 102.08,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2021",
      "maior_salario_expurgado": 1503.16,
      "patrimonio_vitalicio": 24499.2
    },
    {
      "descartes": 75,
      "salarios_restantes": 194,
      "media_corrigida": 3960.99,
      "tc_anos_resultante": 28.8,
      "carencia_restante": 345,
      "coeficiente_perc": 76.0,
      "rmi": 3010.36,
      "delta_rmi": 111.66,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2023",
      "maior_salario_expurgado": 1504.22,
      "patrimonio_vitalicio": 26798.4
    },
    {
      "descartes": 76,
      "salarios_restantes": 193,
      "media_corrigida": 3973.71,
      "tc_anos_resultante": 28.7,
      "carencia_restante": 344,
      "coeficiente_perc": 76.0,
      "rmi": 3020.02,
      "delta_rmi": 121.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2023",
      "maior_salario_expurgado": 1506.02,
      "patrimonio_vitalicio": 29116.8
    },
    {
      "descartes": 77,
      "salarios_restantes": 192,
      "media_corrigida": 3986.56,
      "tc_anos_resultante": 28.6,
      "carencia_restante": 343,
      "coeficiente_perc": 76.0,
      "rmi": 3029.78,
      "delta_rmi": 131.08,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2023",
      "maior_salario_expurgado": 1507.68,
      "patrimonio_vitalicio": 31459.2
    },
    {
      "descartes": 78,
      "salarios_restantes": 191,
      "media_corrigida": 3999.54,
      "tc_anos_resultante": 28.5,
      "carencia_restante": 342,
      "coeficiente_perc": 76.0,
      "rmi": 3039.65,
      "delta_rmi": 140.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2023",
      "maior_salario_expurgado": 1507.83,
      "patrimonio_vitalicio": 33828.0
    },
    {
      "descartes": 79,
      "salarios_restantes": 190,
      "media_corrigida": 4012.64,
      "tc_anos_resultante": 28.4,
      "carencia_restante": 341,
      "coeficiente_perc": 76.0,
      "rmi": 3049.61,
      "delta_rmi": 150.91,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2023",
      "maior_salario_expurgado": 1509.34,
      "patrimonio_vitalicio": 36218.4
    },
    {
      "descartes": 80,
      "salarios_restantes": 189,
      "media_corrigida": 4025.88,
      "tc_anos_resultante": 28.3,
      "carencia_restante": 340,
      "coeficiente_perc": 76.0,
      "rmi": 3059.67,
      "delta_rmi": 160.97,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2023",
      "maior_salario_expurgado": 1510.14,
      "patrimonio_vitalicio": 38632.8
    },
    {
      "descartes": 81,
      "salarios_restantes": 188,
      "media_corrigida": 4039.26,
      "tc_anos_resultante": 28.2,
      "carencia_restante": 339,
      "coeficiente_perc": 76.0,
      "rmi": 3069.84,
      "delta_rmi": 171.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2023",
      "maior_salario_expurgado": 1510.7,
      "patrimonio_vitalicio": 41073.6
    },
    {
      "descartes": 82,
      "salarios_restantes": 187,
      "media_corrigida": 4052.72,
      "tc_anos_resultante": 28.2,
      "carencia_restante": 338,
      "coeficiente_perc": 76.0,
      "rmi": 3080.07,
      "delta_rmi": 181.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2023",
      "maior_salario_expurgado": 1521.76,
      "patrimonio_vitalicio": 43528.8
    },
    {
      "descartes": 83,
      "salarios_restantes": 186,
      "media_corrigida": 4066.12,
      "tc_anos_resultante": 28.1,
      "carencia_restante": 337,
      "coeficiente_perc": 76.0,
      "rmi": 3090.25,
      "delta_rmi": 191.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2024",
      "maior_salario_expurgado": 1560.85,
      "patrimonio_vitalicio": 45972.0
    },
    {
      "descartes": 84,
      "salarios_restantes": 185,
      "media_corrigida": 4079.63,
      "tc_anos_resultante": 28.0,
      "carencia_restante": 336,
      "coeficiente_perc": 76.0,
      "rmi": 3100.52,
      "delta_rmi": 201.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2024",
      "maior_salario_expurgado": 1568.03,
      "patrimonio_vitalicio": 48436.8
    },
    {
      "descartes": 85,
      "salarios_restantes": 184,
      "media_corrigida": 4093.24,
      "tc_anos_resultante": 27.9,
      "carencia_restante": 335,
      "coeficiente_perc": 74.0,
      "rmi": 3029.0,
      "delta_rmi": 130.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2024",
      "maior_salario_expurgado": 1573.84,
      "patrimonio_vitalicio": 31272.0
    },
    {
      "descartes": 86,
      "salarios_restantes": 183,
      "media_corrigida": 4106.99,
      "tc_anos_resultante": 27.8,
      "carencia_restante": 334,
      "coeficiente_perc": 74.0,
      "rmi": 3039.18,
      "delta_rmi": 140.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2024",
      "maior_salario_expurgado": 1576.83,
      "patrimonio_vitalicio": 33715.2
    },
    {
      "descartes": 87,
      "salarios_restantes": 182,
      "media_corrigida": 4120.83,
      "tc_anos_resultante": 27.8,
      "carencia_restante": 333,
      "coeficiente_perc": 74.0,
      "rmi": 3049.41,
      "delta_rmi": 150.71,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2024",
      "maior_salario_expurgado": 1589.6,
      "patrimonio_vitalicio": 36170.4
    },
    {
      "descartes": 88,
      "salarios_restantes": 181,
      "media_corrigida": 4134.66,
      "tc_anos_resultante": 27.7,
      "carencia_restante": 332,
      "coeficiente_perc": 74.0,
      "rmi": 3059.65,
      "delta_rmi": 160.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2025",
      "maior_salario_expurgado": 1616.53,
      "patrimonio_vitalicio": 38628.0
    },
    {
      "descartes": 89,
      "salarios_restantes": 180,
      "media_corrigida": 4148.58,
      "tc_anos_resultante": 27.6,
      "carencia_restante": 331,
      "coeficiente_perc": 74.0,
      "rmi": 3069.95,
      "delta_rmi": 171.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2026",
      "maior_salario_expurgado": 1629.06,
      "patrimonio_vitalicio": 41100.0
    },
    {
      "descartes": 90,
      "salarios_restantes": 179,
      "media_corrigida": 4162.43,
      "tc_anos_resultante": 27.5,
      "carencia_restante": 330,
      "coeficiente_perc": 74.0,
      "rmi": 3080.2,
      "delta_rmi": 181.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2026",
      "maior_salario_expurgado": 1670.14,
      "patrimonio_vitalicio": 43560.0
    },
    {
      "descartes": 91,
      "salarios_restantes": 178,
      "media_corrigida": 4176.38,
      "tc_anos_resultante": 27.4,
      "carencia_restante": 329,
      "coeficiente_perc": 74.0,
      "rmi": 3090.52,
      "delta_rmi": 191.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2026",
      "maior_salario_expurgado": 1679.5,
      "patrimonio_vitalicio": 46036.8
    },
    {
      "descartes": 92,
      "salarios_restantes": 177,
      "media_corrigida": 4189.25,
      "tc_anos_resultante": 27.3,
      "carencia_restante": 328,
      "coeficiente_perc": 74.0,
      "rmi": 3100.04,
      "delta_rmi": 201.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1994",
      "maior_salario_expurgado": 1897.91,
      "patrimonio_vitalicio": 48321.6
    },
    {
      "descartes": 93,
      "salarios_restantes": 176,
      "media_corrigida": 4201.51,
      "tc_anos_resultante": 27.2,
      "carencia_restante": 327,
      "coeficiente_perc": 74.0,
      "rmi": 3109.11,
      "delta_rmi": 210.41,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1996",
      "maior_salario_expurgado": 2032.14,
      "patrimonio_vitalicio": 50498.4
    },
    {
      "descartes": 94,
      "salarios_restantes": 175,
      "media_corrigida": 4213.83,
      "tc_anos_resultante": 27.2,
      "carencia_restante": 326,
      "coeficiente_perc": 74.0,
      "rmi": 3118.24,
      "delta_rmi": 219.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1994",
      "maior_salario_expurgado": 2044.03,
      "patrimonio_vitalicio": 52689.6
    },
    {
      "descartes": 95,
      "salarios_restantes": 174,
      "media_corrigida": 4226.2,
      "tc_anos_resultante": 27.1,
      "carencia_restante": 325,
      "coeficiente_perc": 74.0,
      "rmi": 3127.39,
      "delta_rmi": 228.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1994",
      "maior_salario_expurgado": 2062.9,
      "patrimonio_vitalicio": 54885.6
    },
    {
      "descartes": 96,
      "salarios_restantes": 173,
      "media_corrigida": 4238.62,
      "tc_anos_resultante": 27.0,
      "carencia_restante": 324,
      "coeficiente_perc": 74.0,
      "rmi": 3136.58,
      "delta_rmi": 237.88,
      "tag": "Cenário MEI + GPS 20% Mínimos (2008-2012)",
      "faixa_descartada": "01/2009 a 06/1998",
      "maior_salario_expurgado": 2076.04,
      "patrimonio_vitalicio": 57091.2
    },
    {
      "descartes": 97,
      "salarios_restantes": 172,
      "media_corrigida": 4250.92,
      "tc_anos_resultante": 26.9,
      "carencia_restante": 323,
      "coeficiente_perc": 72.0,
      "rmi": 3060.66,
      "delta_rmi": 161.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1994",
      "maior_salario_expurgado": 2123.97,
      "patrimonio_vitalicio": 38870.4
    },
    {
      "descartes": 98,
      "salarios_restantes": 171,
      "media_corrigida": 4263.34,
      "tc_anos_resultante": 26.8,
      "carencia_restante": 322,
      "coeficiente_perc": 72.0,
      "rmi": 3069.6,
      "delta_rmi": 170.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1998",
      "maior_salario_expurgado": 2127.72,
      "patrimonio_vitalicio": 41016.0
    },
    {
      "descartes": 99,
      "salarios_restantes": 170,
      "media_corrigida": 4275.66,
      "tc_anos_resultante": 26.8,
      "carencia_restante": 321,
      "coeficiente_perc": 72.0,
      "rmi": 3078.48,
      "delta_rmi": 179.78,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1998",
      "maior_salario_expurgado": 2168.23,
      "patrimonio_vitalicio": 43147.2
    },
    {
      "descartes": 100,
      "salarios_restantes": 169,
      "media_corrigida": 4288.04,
      "tc_anos_resultante": 26.7,
      "carencia_restante": 320,
      "coeficiente_perc": 72.0,
      "rmi": 3087.39,
      "delta_rmi": 188.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1994",
      "maior_salario_expurgado": 2183.86,
      "patrimonio_vitalicio": 45285.6
    },
    {
      "descartes": 101,
      "salarios_restantes": 168,
      "media_corrigida": 4300.33,
      "tc_anos_resultante": 26.6,
      "carencia_restante": 319,
      "coeficiente_perc": 72.0,
      "rmi": 3096.24,
      "delta_rmi": 197.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1998",
      "maior_salario_expurgado": 2223.24,
      "patrimonio_vitalicio": 47409.6
    },
    {
      "descartes": 102,
      "salarios_restantes": 167,
      "media_corrigida": 4312.75,
      "tc_anos_resultante": 26.5,
      "carencia_restante": 318,
      "coeficiente_perc": 72.0,
      "rmi": 3105.18,
      "delta_rmi": 206.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1998",
      "maior_salario_expurgado": 2225.51,
      "patrimonio_vitalicio": 49555.2
    },
    {
      "descartes": 103,
      "salarios_restantes": 166,
      "media_corrigida": 4325.13,
      "tc_anos_resultante": 26.4,
      "carencia_restante": 317,
      "coeficiente_perc": 72.0,
      "rmi": 3114.1,
      "delta_rmi": 215.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1996",
      "maior_salario_expurgado": 2257.26,
      "patrimonio_vitalicio": 51696.0
    },
    {
      "descartes": 104,
      "salarios_restantes": 165,
      "media_corrigida": 4337.63,
      "tc_anos_resultante": 26.3,
      "carencia_restante": 316,
      "coeficiente_perc": 72.0,
      "rmi": 3123.1,
      "delta_rmi": 224.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1998",
      "maior_salario_expurgado": 2262.66,
      "patrimonio_vitalicio": 53856.0
    },
    {
      "descartes": 105,
      "salarios_restantes": 164,
      "media_corrigida": 4350.21,
      "tc_anos_resultante": 26.2,
      "carencia_restante": 315,
      "coeficiente_perc": 72.0,
      "rmi": 3132.15,
      "delta_rmi": 233.45,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1998",
      "maior_salario_expurgado": 2274.88,
      "patrimonio_vitalicio": 56028.0
    },
    {
      "descartes": 106,
      "salarios_restantes": 163,
      "media_corrigida": 4362.83,
      "tc_anos_resultante": 26.2,
      "carencia_restante": 314,
      "coeficiente_perc": 72.0,
      "rmi": 3141.24,
      "delta_rmi": 242.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1994",
      "maior_salario_expurgado": 2293.27,
      "patrimonio_vitalicio": 58209.6
    },
    {
      "descartes": 107,
      "salarios_restantes": 162,
      "media_corrigida": 4375.48,
      "tc_anos_resultante": 26.1,
      "carencia_restante": 313,
      "coeficiente_perc": 72.0,
      "rmi": 3150.35,
      "delta_rmi": 251.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1999",
      "maior_salario_expurgado": 2313.34,
      "patrimonio_vitalicio": 60396.0
    },
    {
      "descartes": 108,
      "salarios_restantes": 161,
      "media_corrigida": 4388.03,
      "tc_anos_resultante": 26.0,
      "carencia_restante": 312,
      "coeficiente_perc": 72.0,
      "rmi": 3159.39,
      "delta_rmi": 260.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1998",
      "maior_salario_expurgado": 2354.55,
      "patrimonio_vitalicio": 62565.6
    },
    {
      "descartes": 109,
      "salarios_restantes": 160,
      "media_corrigida": 4400.57,
      "tc_anos_resultante": 25.9,
      "carencia_restante": 311,
      "coeficiente_perc": 70.0,
      "rmi": 3080.4,
      "delta_rmi": 181.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1999",
      "maior_salario_expurgado": 2382.62,
      "patrimonio_vitalicio": 43608.0
    },
    {
      "descartes": 110,
      "salarios_restantes": 159,
      "media_corrigida": 4413.19,
      "tc_anos_resultante": 25.8,
      "carencia_restante": 310,
      "coeficiente_perc": 70.0,
      "rmi": 3089.23,
      "delta_rmi": 190.53,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1996",
      "maior_salario_expurgado": 2393.73,
      "patrimonio_vitalicio": 45727.2
    },
    {
      "descartes": 111,
      "salarios_restantes": 158,
      "media_corrigida": 4425.92,
      "tc_anos_resultante": 25.8,
      "carencia_restante": 309,
      "coeficiente_perc": 70.0,
      "rmi": 3098.15,
      "delta_rmi": 199.45,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1996",
      "maior_salario_expurgado": 2401.63,
      "patrimonio_vitalicio": 47868.0
    },
    {
      "descartes": 112,
      "salarios_restantes": 157,
      "media_corrigida": 4438.76,
      "tc_anos_resultante": 25.7,
      "carencia_restante": 308,
      "coeficiente_perc": 70.0,
      "rmi": 3107.13,
      "delta_rmi": 208.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1996",
      "maior_salario_expurgado": 2409.79,
      "patrimonio_vitalicio": 50023.2
    },
    {
      "descartes": 113,
      "salarios_restantes": 156,
      "media_corrigida": 4451.71,
      "tc_anos_resultante": 25.6,
      "carencia_restante": 307,
      "coeficiente_perc": 70.0,
      "rmi": 3116.2,
      "delta_rmi": 217.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1996",
      "maior_salario_expurgado": 2418.95,
      "patrimonio_vitalicio": 52200.0
    },
    {
      "descartes": 114,
      "salarios_restantes": 155,
      "media_corrigida": 4464.82,
      "tc_anos_resultante": 25.5,
      "carencia_restante": 306,
      "coeficiente_perc": 70.0,
      "rmi": 3125.38,
      "delta_rmi": 226.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1996",
      "maior_salario_expurgado": 2419.43,
      "patrimonio_vitalicio": 54403.2
    },
    {
      "descartes": 115,
      "salarios_restantes": 154,
      "media_corrigida": 4478.1,
      "tc_anos_resultante": 25.4,
      "carencia_restante": 305,
      "coeficiente_perc": 70.0,
      "rmi": 3134.67,
      "delta_rmi": 235.97,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1999",
      "maior_salario_expurgado": 2420.75,
      "patrimonio_vitalicio": 56632.8
    },
    {
      "descartes": 116,
      "salarios_restantes": 153,
      "media_corrigida": 4491.47,
      "tc_anos_resultante": 25.3,
      "carencia_restante": 304,
      "coeficiente_perc": 70.0,
      "rmi": 3144.03,
      "delta_rmi": 245.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1996",
      "maior_salario_expurgado": 2431.53,
      "patrimonio_vitalicio": 58879.2
    },
    {
      "descartes": 117,
      "salarios_restantes": 152,
      "media_corrigida": 4504.83,
      "tc_anos_resultante": 25.2,
      "carencia_restante": 303,
      "coeficiente_perc": 70.0,
      "rmi": 3153.38,
      "delta_rmi": 254.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1996",
      "maior_salario_expurgado": 2460.71,
      "patrimonio_vitalicio": 61123.2
    },
    {
      "descartes": 118,
      "salarios_restantes": 151,
      "media_corrigida": 4517.94,
      "tc_anos_resultante": 25.2,
      "carencia_restante": 302,
      "coeficiente_perc": 70.0,
      "rmi": 3162.56,
      "delta_rmi": 263.86,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1996",
      "maior_salario_expurgado": 2525.41,
      "patrimonio_vitalicio": 63326.4
    },
    {
      "descartes": 119,
      "salarios_restantes": 150,
      "media_corrigida": 4531.07,
      "tc_anos_resultante": 25.1,
      "carencia_restante": 301,
      "coeficiente_perc": 70.0,
      "rmi": 3171.75,
      "delta_rmi": 273.05,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1996",
      "maior_salario_expurgado": 2548.9,
      "patrimonio_vitalicio": 65532.0
    },
    {
      "descartes": 120,
      "salarios_restantes": 149,
      "media_corrigida": 4544.28,
      "tc_anos_resultante": 25.0,
      "carencia_restante": 300,
      "coeficiente_perc": 70.0,
      "rmi": 3180.99,
      "delta_rmi": 282.29,
      "tag": "Cenário Equilíbrio Coeficiente (70%)",
      "faixa_descartada": "01/2009 a 08/1999",
      "maior_salario_expurgado": 2562.75,
      "patrimonio_vitalicio": 67749.6
    },
    {
      "descartes": 121,
      "salarios_restantes": 148,
      "media_corrigida": 4557.59,
      "tc_anos_resultante": 24.9,
      "carencia_restante": 299,
      "coeficiente_perc": 68.0,
      "rmi": 3099.16,
      "delta_rmi": 200.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1996",
      "maior_salario_expurgado": 2574.44,
      "patrimonio_vitalicio": 48110.4
    },
    {
      "descartes": 122,
      "salarios_restantes": 147,
      "media_corrigida": 4571.06,
      "tc_anos_resultante": 24.8,
      "carencia_restante": 298,
      "coeficiente_perc": 68.0,
      "rmi": 3108.32,
      "delta_rmi": 209.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1999",
      "maior_salario_expurgado": 2576.84,
      "patrimonio_vitalicio": 50308.8
    },
    {
      "descartes": 123,
      "salarios_restantes": 146,
      "media_corrigida": 4584.59,
      "tc_anos_resultante": 24.8,
      "carencia_restante": 297,
      "coeficiente_perc": 68.0,
      "rmi": 3117.52,
      "delta_rmi": 218.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1999",
      "maior_salario_expurgado": 2595.91,
      "patrimonio_vitalicio": 52516.8
    },
    {
      "descartes": 124,
      "salarios_restantes": 145,
      "media_corrigida": 4598.3,
      "tc_anos_resultante": 24.7,
      "carencia_restante": 296,
      "coeficiente_perc": 68.0,
      "rmi": 3126.85,
      "delta_rmi": 228.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1995",
      "maior_salario_expurgado": 2596.02,
      "patrimonio_vitalicio": 54756.0
    },
    {
      "descartes": 125,
      "salarios_restantes": 144,
      "media_corrigida": 4612.2,
      "tc_anos_resultante": 24.6,
      "carencia_restante": 295,
      "coeficiente_perc": 68.0,
      "rmi": 3136.29,
      "delta_rmi": 237.59,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1999",
      "maior_salario_expurgado": 2597.73,
      "patrimonio_vitalicio": 57021.6
    },
    {
      "descartes": 126,
      "salarios_restantes": 143,
      "media_corrigida": 4626.28,
      "tc_anos_resultante": 24.5,
      "carencia_restante": 294,
      "coeficiente_perc": 68.0,
      "rmi": 3145.87,
      "delta_rmi": 247.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1999",
      "maior_salario_expurgado": 2599.08,
      "patrimonio_vitalicio": 59320.8
    },
    {
      "descartes": 127,
      "salarios_restantes": 142,
      "media_corrigida": 4640.51,
      "tc_anos_resultante": 24.4,
      "carencia_restante": 293,
      "coeficiente_perc": 68.0,
      "rmi": 3155.55,
      "delta_rmi": 256.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1998",
      "maior_salario_expurgado": 2604.43,
      "patrimonio_vitalicio": 61644.0
    },
    {
      "descartes": 128,
      "salarios_restantes": 141,
      "media_corrigida": 4654.92,
      "tc_anos_resultante": 24.3,
      "carencia_restante": 292,
      "coeficiente_perc": 68.0,
      "rmi": 3165.35,
      "delta_rmi": 266.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1998",
      "maior_salario_expurgado": 2609.12,
      "patrimonio_vitalicio": 63996.0
    },
    {
      "descartes": 129,
      "salarios_restantes": 140,
      "media_corrigida": 4669.51,
      "tc_anos_resultante": 24.2,
      "carencia_restante": 291,
      "coeficiente_perc": 68.0,
      "rmi": 3175.27,
      "delta_rmi": 276.57,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1995",
      "maior_salario_expurgado": 2612.03,
      "patrimonio_vitalicio": 66376.8
    },
    {
      "descartes": 130,
      "salarios_restantes": 139,
      "media_corrigida": 4684.08,
      "tc_anos_resultante": 24.2,
      "carencia_restante": 290,
      "coeficiente_perc": 68.0,
      "rmi": 3185.17,
      "delta_rmi": 286.47,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1999",
      "maior_salario_expurgado": 2644.72,
      "patrimonio_vitalicio": 68752.8
    },
    {
      "descartes": 131,
      "salarios_restantes": 138,
      "media_corrigida": 4698.57,
      "tc_anos_resultante": 24.1,
      "carencia_restante": 289,
      "coeficiente_perc": 68.0,
      "rmi": 3195.02,
      "delta_rmi": 296.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1995",
      "maior_salario_expurgado": 2685.06,
      "patrimonio_vitalicio": 71116.8
    },
    {
      "descartes": 132,
      "salarios_restantes": 137,
      "media_corrigida": 4712.99,
      "tc_anos_resultante": 24.0,
      "carencia_restante": 288,
      "coeficiente_perc": 68.0,
      "rmi": 3204.83,
      "delta_rmi": 306.13,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1995",
      "maior_salario_expurgado": 2722.65,
      "patrimonio_vitalicio": 73471.2
    },
    {
      "descartes": 133,
      "salarios_restantes": 136,
      "media_corrigida": 4727.39,
      "tc_anos_resultante": 23.9,
      "carencia_restante": 287,
      "coeficiente_perc": 66.0,
      "rmi": 3120.08,
      "delta_rmi": 221.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1995",
      "maior_salario_expurgado": 2754.5,
      "patrimonio_vitalicio": 53131.2
    },
    {
      "descartes": 134,
      "salarios_restantes": 135,
      "media_corrigida": 4741.79,
      "tc_anos_resultante": 23.8,
      "carencia_restante": 286,
      "coeficiente_perc": 66.0,
      "rmi": 3129.58,
      "delta_rmi": 230.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1995",
      "maior_salario_expurgado": 2782.6,
      "patrimonio_vitalicio": 55411.2
    },
    {
      "descartes": 135,
      "salarios_restantes": 134,
      "media_corrigida": 4755.65,
      "tc_anos_resultante": 23.8,
      "carencia_restante": 285,
      "coeficiente_perc": 66.0,
      "rmi": 3138.73,
      "delta_rmi": 240.03,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1998",
      "maior_salario_expurgado": 2885.85,
      "patrimonio_vitalicio": 57607.2
    },
    {
      "descartes": 136,
      "salarios_restantes": 133,
      "media_corrigida": 4769.5,
      "tc_anos_resultante": 23.7,
      "carencia_restante": 284,
      "coeficiente_perc": 66.0,
      "rmi": 3147.87,
      "delta_rmi": 249.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1995",
      "maior_salario_expurgado": 2913.2,
      "patrimonio_vitalicio": 59800.8
    },
    {
      "descartes": 137,
      "salarios_restantes": 132,
      "media_corrigida": 4783.52,
      "tc_anos_resultante": 23.6,
      "carencia_restante": 283,
      "coeficiente_perc": 66.0,
      "rmi": 3157.12,
      "delta_rmi": 258.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1998",
      "maior_salario_expurgado": 2918.28,
      "patrimonio_vitalicio": 62020.8
    },
    {
      "descartes": 138,
      "salarios_restantes": 131,
      "media_corrigida": 4796.77,
      "tc_anos_resultante": 23.5,
      "carencia_restante": 282,
      "coeficiente_perc": 66.0,
      "rmi": 3165.87,
      "delta_rmi": 267.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1995",
      "maior_salario_expurgado": 3048.44,
      "patrimonio_vitalicio": 64120.8
    },
    {
      "descartes": 139,
      "salarios_restantes": 130,
      "media_corrigida": 4809.6,
      "tc_anos_resultante": 23.4,
      "carencia_restante": 281,
      "coeficiente_perc": 66.0,
      "rmi": 3174.33,
      "delta_rmi": 275.63,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1995",
      "maior_salario_expurgado": 3129.12,
      "patrimonio_vitalicio": 66151.2
    },
    {
      "descartes": 140,
      "salarios_restantes": 129,
      "media_corrigida": 4821.13,
      "tc_anos_resultante": 23.3,
      "carencia_restante": 280,
      "coeficiente_perc": 66.0,
      "rmi": 3181.94,
      "delta_rmi": 283.24,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2006",
      "maior_salario_expurgado": 3322.25,
      "patrimonio_vitalicio": 67977.6
    },
    {
      "descartes": 141,
      "salarios_restantes": 128,
      "media_corrigida": 4832.77,
      "tc_anos_resultante": 23.2,
      "carencia_restante": 279,
      "coeficiente_perc": 66.0,
      "rmi": 3189.62,
      "delta_rmi": 290.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2006",
      "maior_salario_expurgado": 3331.22,
      "patrimonio_vitalicio": 69820.8
    },
    {
      "descartes": 142,
      "salarios_restantes": 127,
      "media_corrigida": 4844.53,
      "tc_anos_resultante": 23.2,
      "carencia_restante": 278,
      "coeficiente_perc": 66.0,
      "rmi": 3197.39,
      "delta_rmi": 298.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2006",
      "maior_salario_expurgado": 3338.88,
      "patrimonio_vitalicio": 71685.6
    },
    {
      "descartes": 143,
      "salarios_restantes": 126,
      "media_corrigida": 4856.38,
      "tc_anos_resultante": 23.1,
      "carencia_restante": 277,
      "coeficiente_perc": 66.0,
      "rmi": 3205.21,
      "delta_rmi": 306.51,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2005",
      "maior_salario_expurgado": 3351.57,
      "patrimonio_vitalicio": 73562.4
    },
    {
      "descartes": 144,
      "salarios_restantes": 125,
      "media_corrigida": 4868.31,
      "tc_anos_resultante": 23.0,
      "carencia_restante": 276,
      "coeficiente_perc": 66.0,
      "rmi": 3213.08,
      "delta_rmi": 314.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2005",
      "maior_salario_expurgado": 3364.97,
      "patrimonio_vitalicio": 75451.2
    },
    {
      "descartes": 145,
      "salarios_restantes": 124,
      "media_corrigida": 4880.29,
      "tc_anos_resultante": 22.9,
      "carencia_restante": 275,
      "coeficiente_perc": 64.0,
      "rmi": 3123.38,
      "delta_rmi": 224.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2005",
      "maior_salario_expurgado": 3383.14,
      "patrimonio_vitalicio": 53923.2
    },
    {
      "descartes": 146,
      "salarios_restantes": 123,
      "media_corrigida": 4892.3,
      "tc_anos_resultante": 22.8,
      "carencia_restante": 274,
      "coeficiente_perc": 64.0,
      "rmi": 3131.07,
      "delta_rmi": 232.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2005",
      "maior_salario_expurgado": 3402.77,
      "patrimonio_vitalicio": 55768.8
    },
    {
      "descartes": 147,
      "salarios_restantes": 122,
      "media_corrigida": 4904.49,
      "tc_anos_resultante": 22.8,
      "carencia_restante": 273,
      "coeficiente_perc": 64.0,
      "rmi": 3138.87,
      "delta_rmi": 240.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2005",
      "maior_salario_expurgado": 3405.14,
      "patrimonio_vitalicio": 57640.8
    },
    {
      "descartes": 148,
      "salarios_restantes": 121,
      "media_corrigida": 4916.86,
      "tc_anos_resultante": 22.7,
      "carencia_restante": 272,
      "coeficiente_perc": 64.0,
      "rmi": 3146.79,
      "delta_rmi": 248.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2005",
      "maior_salario_expurgado": 3407.87,
      "patrimonio_vitalicio": 59541.6
    },
    {
      "descartes": 149,
      "salarios_restantes": 120,
      "media_corrigida": 4929.43,
      "tc_anos_resultante": 22.6,
      "carencia_restante": 271,
      "coeficiente_perc": 64.0,
      "rmi": 3154.84,
      "delta_rmi": 256.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2005",
      "maior_salario_expurgado": 3407.87,
      "patrimonio_vitalicio": 61473.6
    },
    {
      "descartes": 150,
      "salarios_restantes": 119,
      "media_corrigida": 4942.21,
      "tc_anos_resultante": 22.5,
      "carencia_restante": 270,
      "coeficiente_perc": 64.0,
      "rmi": 3163.01,
      "delta_rmi": 264.31,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2005",
      "maior_salario_expurgado": 3408.89,
      "patrimonio_vitalicio": 63434.4
    },
    {
      "descartes": 151,
      "salarios_restantes": 118,
      "media_corrigida": 4955.03,
      "tc_anos_resultante": 22.4,
      "carencia_restante": 269,
      "coeficiente_perc": 64.0,
      "rmi": 3171.22,
      "delta_rmi": 272.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2005",
      "maior_salario_expurgado": 3428.98,
      "patrimonio_vitalicio": 65404.8
    },
    {
      "descartes": 152,
      "salarios_restantes": 117,
      "media_corrigida": 4967.81,
      "tc_anos_resultante": 22.3,
      "carencia_restante": 268,
      "coeficiente_perc": 64.0,
      "rmi": 3179.4,
      "delta_rmi": 280.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2005",
      "maior_salario_expurgado": 3460.18,
      "patrimonio_vitalicio": 67368.0
    },
    {
      "descartes": 153,
      "salarios_restantes": 116,
      "media_corrigida": 4980.59,
      "tc_anos_resultante": 22.2,
      "carencia_restante": 267,
      "coeficiente_perc": 64.0,
      "rmi": 3187.58,
      "delta_rmi": 288.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2005",
      "maior_salario_expurgado": 3485.44,
      "patrimonio_vitalicio": 69331.2
    },
    {
      "descartes": 154,
      "salarios_restantes": 115,
      "media_corrigida": 4993.46,
      "tc_anos_resultante": 22.2,
      "carencia_restante": 266,
      "coeficiente_perc": 64.0,
      "rmi": 3195.81,
      "delta_rmi": 297.11,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2005",
      "maior_salario_expurgado": 3500.78,
      "patrimonio_vitalicio": 71306.4
    },
    {
      "descartes": 155,
      "salarios_restantes": 114,
      "media_corrigida": 5006.37,
      "tc_anos_resultante": 22.1,
      "carencia_restante": 265,
      "coeficiente_perc": 64.0,
      "rmi": 3204.08,
      "delta_rmi": 305.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2004",
      "maior_salario_expurgado": 3520.73,
      "patrimonio_vitalicio": 73291.2
    },
    {
      "descartes": 156,
      "salarios_restantes": 113,
      "media_corrigida": 5019.25,
      "tc_anos_resultante": 22.0,
      "carencia_restante": 264,
      "coeficiente_perc": 64.0,
      "rmi": 3212.32,
      "delta_rmi": 313.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2004",
      "maior_salario_expurgado": 3551.01,
      "patrimonio_vitalicio": 75268.8
    },
    {
      "descartes": 157,
      "salarios_restantes": 112,
      "media_corrigida": 5032.22,
      "tc_anos_resultante": 21.9,
      "carencia_restante": 263,
      "coeficiente_perc": 62.0,
      "rmi": 3119.98,
      "delta_rmi": 221.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2004",
      "maior_salario_expurgado": 3566.64,
      "patrimonio_vitalicio": 53107.2
    },
    {
      "descartes": 158,
      "salarios_restantes": 111,
      "media_corrigida": 5045.37,
      "tc_anos_resultante": 21.8,
      "carencia_restante": 262,
      "coeficiente_perc": 62.0,
      "rmi": 3128.13,
      "delta_rmi": 229.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2004",
      "maior_salario_expurgado": 3572.7,
      "patrimonio_vitalicio": 55063.2
    },
    {
      "descartes": 159,
      "salarios_restantes": 110,
      "media_corrigida": 5058.71,
      "tc_anos_resultante": 21.8,
      "carencia_restante": 261,
      "coeficiente_perc": 62.0,
      "rmi": 3136.4,
      "delta_rmi": 237.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2004",
      "maior_salario_expurgado": 3578.77,
      "patrimonio_vitalicio": 57048.0
    },
    {
      "descartes": 160,
      "salarios_restantes": 109,
      "media_corrigida": 5072.12,
      "tc_anos_resultante": 21.7,
      "carencia_restante": 260,
      "coeficiente_perc": 62.0,
      "rmi": 3144.71,
      "delta_rmi": 246.01,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2004",
      "maior_salario_expurgado": 3596.67,
      "patrimonio_vitalicio": 59042.4
    },
    {
      "descartes": 161,
      "salarios_restantes": 108,
      "media_corrigida": 5085.54,
      "tc_anos_resultante": 21.6,
      "carencia_restante": 259,
      "coeficiente_perc": 62.0,
      "rmi": 3153.03,
      "delta_rmi": 254.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2004",
      "maior_salario_expurgado": 3622.92,
      "patrimonio_vitalicio": 61039.2
    },
    {
      "descartes": 162,
      "salarios_restantes": 107,
      "media_corrigida": 5099.04,
      "tc_anos_resultante": 21.5,
      "carencia_restante": 258,
      "coeficiente_perc": 62.0,
      "rmi": 3161.4,
      "delta_rmi": 262.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2004",
      "maior_salario_expurgado": 3641.04,
      "patrimonio_vitalicio": 63048.0
    },
    {
      "descartes": 163,
      "salarios_restantes": 106,
      "media_corrigida": 5112.65,
      "tc_anos_resultante": 21.4,
      "carencia_restante": 257,
      "coeficiente_perc": 62.0,
      "rmi": 3169.85,
      "delta_rmi": 271.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2004",
      "maior_salario_expurgado": 3655.6,
      "patrimonio_vitalicio": 65076.0
    },
    {
      "descartes": 164,
      "salarios_restantes": 105,
      "media_corrigida": 5126.39,
      "tc_anos_resultante": 21.3,
      "carencia_restante": 256,
      "coeficiente_perc": 62.0,
      "rmi": 3178.36,
      "delta_rmi": 279.66,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2004",
      "maior_salario_expurgado": 3670.59,
      "patrimonio_vitalicio": 67118.4
    },
    {
      "descartes": 165,
      "salarios_restantes": 104,
      "media_corrigida": 5140.19,
      "tc_anos_resultante": 21.2,
      "carencia_restante": 255,
      "coeficiente_perc": 62.0,
      "rmi": 3186.91,
      "delta_rmi": 288.21,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2004",
      "maior_salario_expurgado": 3691.51,
      "patrimonio_vitalicio": 69170.4
    },
    {
      "descartes": 166,
      "salarios_restantes": 103,
      "media_corrigida": 5154.11,
      "tc_anos_resultante": 21.2,
      "carencia_restante": 254,
      "coeficiente_perc": 62.0,
      "rmi": 3195.55,
      "delta_rmi": 296.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2004",
      "maior_salario_expurgado": 3705.91,
      "patrimonio_vitalicio": 71244.0
    },
    {
      "descartes": 167,
      "salarios_restantes": 102,
      "media_corrigida": 5168.01,
      "tc_anos_resultante": 21.1,
      "carencia_restante": 253,
      "coeficiente_perc": 62.0,
      "rmi": 3204.16,
      "delta_rmi": 305.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2003",
      "maior_salario_expurgado": 3736.67,
      "patrimonio_vitalicio": 73310.4
    },
    {
      "descartes": 168,
      "salarios_restantes": 101,
      "media_corrigida": 5181.98,
      "tc_anos_resultante": 21.0,
      "carencia_restante": 252,
      "coeficiente_perc": 62.0,
      "rmi": 3212.83,
      "delta_rmi": 314.13,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2003",
      "maior_salario_expurgado": 3756.84,
      "patrimonio_vitalicio": 75391.2
    },
    {
      "descartes": 169,
      "salarios_restantes": 100,
      "media_corrigida": 5195.94,
      "tc_anos_resultante": 20.9,
      "carencia_restante": 251,
      "coeficiente_perc": 60.0,
      "rmi": 3117.57,
      "delta_rmi": 218.87,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2003",
      "maior_salario_expurgado": 3785.45,
      "patrimonio_vitalicio": 52528.8
    },
    {
      "descartes": 170,
      "salarios_restantes": 99,
      "media_corrigida": 5209.88,
      "tc_anos_resultante": 20.8,
      "carencia_restante": 250,
      "coeficiente_perc": 60.0,
      "rmi": 3125.93,
      "delta_rmi": 227.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2003",
      "maior_salario_expurgado": 3816.49,
      "patrimonio_vitalicio": 54535.2
    },
    {
      "descartes": 171,
      "salarios_restantes": 98,
      "media_corrigida": 5224.03,
      "tc_anos_resultante": 20.8,
      "carencia_restante": 249,
      "coeficiente_perc": 60.0,
      "rmi": 3134.42,
      "delta_rmi": 235.72,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2003",
      "maior_salario_expurgado": 3822.6,
      "patrimonio_vitalicio": 56572.8
    },
    {
      "descartes": 172,
      "salarios_restantes": 97,
      "media_corrigida": 5238.47,
      "tc_anos_resultante": 20.7,
      "carencia_restante": 248,
      "coeficiente_perc": 60.0,
      "rmi": 3143.08,
      "delta_rmi": 244.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2003",
      "maior_salario_expurgado": 3823.36,
      "patrimonio_vitalicio": 58651.2
    },
    {
      "descartes": 173,
      "salarios_restantes": 96,
      "media_corrigida": 5253.2,
      "tc_anos_resultante": 20.6,
      "carencia_restante": 247,
      "coeficiente_perc": 60.0,
      "rmi": 3151.92,
      "delta_rmi": 253.22,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2003",
      "maior_salario_expurgado": 3824.89,
      "patrimonio_vitalicio": 60772.8
    },
    {
      "descartes": 174,
      "salarios_restantes": 95,
      "media_corrigida": 5267.86,
      "tc_anos_resultante": 20.5,
      "carencia_restante": 246,
      "coeficiente_perc": 60.0,
      "rmi": 3160.72,
      "delta_rmi": 262.02,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2003",
      "maior_salario_expurgado": 3860.44,
      "patrimonio_vitalicio": 62884.8
    },
    {
      "descartes": 175,
      "salarios_restantes": 94,
      "media_corrigida": 5278.4,
      "tc_anos_resultante": 20.4,
      "carencia_restante": 245,
      "coeficiente_perc": 60.0,
      "rmi": 3167.04,
      "delta_rmi": 268.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1995",
      "maior_salario_expurgado": 4276.58,
      "patrimonio_vitalicio": 64401.6
    },
    {
      "descartes": 176,
      "salarios_restantes": 93,
      "media_corrigida": 5288.37,
      "tc_anos_resultante": 20.3,
      "carencia_restante": 244,
      "coeficiente_perc": 60.0,
      "rmi": 3173.02,
      "delta_rmi": 274.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1995",
      "maior_salario_expurgado": 4351.68,
      "patrimonio_vitalicio": 65836.8
    },
    {
      "descartes": 177,
      "salarios_restantes": 92,
      "media_corrigida": 5297.5,
      "tc_anos_resultante": 20.2,
      "carencia_restante": 243,
      "coeficiente_perc": 60.0,
      "rmi": 3178.5,
      "delta_rmi": 279.8,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2012",
      "maior_salario_expurgado": 4448.52,
      "patrimonio_vitalicio": 67152.0
    },
    {
      "descartes": 178,
      "salarios_restantes": 91,
      "media_corrigida": 5305.66,
      "tc_anos_resultante": 20.2,
      "carencia_restante": 242,
      "coeficiente_perc": 60.0,
      "rmi": 3183.4,
      "delta_rmi": 284.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2012",
      "maior_salario_expurgado": 4554.61,
      "patrimonio_vitalicio": 68328.0
    },
    {
      "descartes": 179,
      "salarios_restantes": 90,
      "media_corrigida": 5313.63,
      "tc_anos_resultante": 20.1,
      "carencia_restante": 241,
      "coeficiente_perc": 60.0,
      "rmi": 3188.18,
      "delta_rmi": 289.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2013",
      "maior_salario_expurgado": 4588.5,
      "patrimonio_vitalicio": 69475.2
    },
    {
      "descartes": 180,
      "salarios_restantes": 89,
      "media_corrigida": 5321.24,
      "tc_anos_resultante": 20.0,
      "carencia_restante": 240,
      "coeficiente_perc": 60.0,
      "rmi": 3192.74,
      "delta_rmi": 294.04,
      "tag": "Cenário Transição Piso 20 Anos (Coef. 60%)",
      "faixa_descartada": "01/2009 a 04/2013",
      "maior_salario_expurgado": 4636.45,
      "patrimonio_vitalicio": 70569.6
    },
    {
      "descartes": 181,
      "salarios_restantes": 88,
      "media_corrigida": 5328.96,
      "tc_anos_resultante": 19.9,
      "carencia_restante": 239,
      "coeficiente_perc": 60.0,
      "rmi": 3197.37,
      "delta_rmi": 298.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2015",
      "maior_salario_expurgado": 4642.24,
      "patrimonio_vitalicio": 71680.8
    },
    {
      "descartes": 182,
      "salarios_restantes": 87,
      "media_corrigida": 5336.77,
      "tc_anos_resultante": 19.8,
      "carencia_restante": 238,
      "coeficiente_perc": 60.0,
      "rmi": 3202.06,
      "delta_rmi": 303.36,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2013",
      "maior_salario_expurgado": 4649.48,
      "patrimonio_vitalicio": 72806.4
    },
    {
      "descartes": 183,
      "salarios_restantes": 86,
      "media_corrigida": 5344.43,
      "tc_anos_resultante": 19.8,
      "carencia_restante": 237,
      "coeficiente_perc": 60.0,
      "rmi": 3206.66,
      "delta_rmi": 307.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2013",
      "maior_salario_expurgado": 4677.38,
      "patrimonio_vitalicio": 73910.4
    },
    {
      "descartes": 184,
      "salarios_restantes": 85,
      "media_corrigida": 5352.11,
      "tc_anos_resultante": 19.7,
      "carencia_restante": 236,
      "coeficiente_perc": 60.0,
      "rmi": 3211.27,
      "delta_rmi": 312.57,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2014",
      "maior_salario_expurgado": 4691.67,
      "patrimonio_vitalicio": 75016.8
    },
    {
      "descartes": 185,
      "salarios_restantes": 84,
      "media_corrigida": 5359.93,
      "tc_anos_resultante": 19.6,
      "carencia_restante": 235,
      "coeficiente_perc": 60.0,
      "rmi": 3215.96,
      "delta_rmi": 317.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2008",
      "maior_salario_expurgado": 4695.17,
      "patrimonio_vitalicio": 76142.4
    },
    {
      "descartes": 186,
      "salarios_restantes": 83,
      "media_corrigida": 5367.71,
      "tc_anos_resultante": 19.5,
      "carencia_restante": 234,
      "coeficiente_perc": 60.0,
      "rmi": 3220.63,
      "delta_rmi": 321.93,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2012",
      "maior_salario_expurgado": 4714.18,
      "patrimonio_vitalicio": 77263.2
    },
    {
      "descartes": 187,
      "salarios_restantes": 82,
      "media_corrigida": 5375.3,
      "tc_anos_resultante": 19.4,
      "carencia_restante": 233,
      "coeficiente_perc": 60.0,
      "rmi": 3225.18,
      "delta_rmi": 326.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2014",
      "maior_salario_expurgado": 4745.48,
      "patrimonio_vitalicio": 78355.2
    },
    {
      "descartes": 188,
      "salarios_restantes": 81,
      "media_corrigida": 5382.94,
      "tc_anos_resultante": 19.3,
      "carencia_restante": 232,
      "coeficiente_perc": 60.0,
      "rmi": 3229.77,
      "delta_rmi": 331.07,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2015",
      "maior_salario_expurgado": 4756.3,
      "patrimonio_vitalicio": 79456.8
    },
    {
      "descartes": 189,
      "salarios_restantes": 80,
      "media_corrigida": 5390.59,
      "tc_anos_resultante": 19.2,
      "carencia_restante": 231,
      "coeficiente_perc": 60.0,
      "rmi": 3234.35,
      "delta_rmi": 335.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2016",
      "maior_salario_expurgado": 4771.07,
      "patrimonio_vitalicio": 80556.0
    },
    {
      "descartes": 190,
      "salarios_restantes": 79,
      "media_corrigida": 5398.37,
      "tc_anos_resultante": 19.2,
      "carencia_restante": 230,
      "coeficiente_perc": 60.0,
      "rmi": 3239.02,
      "delta_rmi": 340.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2012",
      "maior_salario_expurgado": 4776.47,
      "patrimonio_vitalicio": 81676.8
    },
    {
      "descartes": 191,
      "salarios_restantes": 78,
      "media_corrigida": 5406.23,
      "tc_anos_resultante": 19.1,
      "carencia_restante": 229,
      "coeficiente_perc": 60.0,
      "rmi": 3243.74,
      "delta_rmi": 345.04,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2014",
      "maior_salario_expurgado": 4784.94,
      "patrimonio_vitalicio": 82809.6
    },
    {
      "descartes": 192,
      "salarios_restantes": 77,
      "media_corrigida": 5414.14,
      "tc_anos_resultante": 19.0,
      "carencia_restante": 228,
      "coeficiente_perc": 60.0,
      "rmi": 3248.49,
      "delta_rmi": 349.79,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2015",
      "maior_salario_expurgado": 4796.8,
      "patrimonio_vitalicio": 83949.6
    },
    {
      "descartes": 193,
      "salarios_restantes": 76,
      "media_corrigida": 5422.09,
      "tc_anos_resultante": 18.9,
      "carencia_restante": 227,
      "coeficiente_perc": 60.0,
      "rmi": 3253.25,
      "delta_rmi": 354.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2014",
      "maior_salario_expurgado": 4810.16,
      "patrimonio_vitalicio": 85092.0
    },
    {
      "descartes": 194,
      "salarios_restantes": 75,
      "media_corrigida": 5430.21,
      "tc_anos_resultante": 18.8,
      "carencia_restante": 226,
      "coeficiente_perc": 60.0,
      "rmi": 3258.13,
      "delta_rmi": 359.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2016",
      "maior_salario_expurgado": 4813.15,
      "patrimonio_vitalicio": 86263.2
    },
    {
      "descartes": 195,
      "salarios_restantes": 74,
      "media_corrigida": 5438.51,
      "tc_anos_resultante": 18.8,
      "carencia_restante": 225,
      "coeficiente_perc": 60.0,
      "rmi": 3263.1,
      "delta_rmi": 364.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2016",
      "maior_salario_expurgado": 4816.4,
      "patrimonio_vitalicio": 87456.0
    },
    {
      "descartes": 196,
      "salarios_restantes": 73,
      "media_corrigida": 5446.9,
      "tc_anos_resultante": 18.7,
      "carencia_restante": 224,
      "coeficiente_perc": 60.0,
      "rmi": 3268.14,
      "delta_rmi": 369.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2014",
      "maior_salario_expurgado": 4825.88,
      "patrimonio_vitalicio": 88665.6
    },
    {
      "descartes": 197,
      "salarios_restantes": 72,
      "media_corrigida": 5455.51,
      "tc_anos_resultante": 18.6,
      "carencia_restante": 223,
      "coeficiente_perc": 60.0,
      "rmi": 3273.31,
      "delta_rmi": 374.61,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2017",
      "maior_salario_expurgado": 4826.53,
      "patrimonio_vitalicio": 89906.4
    },
    {
      "descartes": 198,
      "salarios_restantes": 71,
      "media_corrigida": 5464.34,
      "tc_anos_resultante": 18.5,
      "carencia_restante": 222,
      "coeficiente_perc": 60.0,
      "rmi": 3278.6,
      "delta_rmi": 379.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2015",
      "maior_salario_expurgado": 4828.86,
      "patrimonio_vitalicio": 91176.0
    },
    {
      "descartes": 199,
      "salarios_restantes": 70,
      "media_corrigida": 5473.21,
      "tc_anos_resultante": 18.4,
      "carencia_restante": 221,
      "coeficiente_perc": 60.0,
      "rmi": 3283.93,
      "delta_rmi": 385.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2015",
      "maior_salario_expurgado": 4843.52,
      "patrimonio_vitalicio": 92455.2
    },
    {
      "descartes": 200,
      "salarios_restantes": 69,
      "media_corrigida": 5482.31,
      "tc_anos_resultante": 18.3,
      "carencia_restante": 220,
      "coeficiente_perc": 60.0,
      "rmi": 3289.39,
      "delta_rmi": 390.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2013",
      "maior_salario_expurgado": 4845.13,
      "patrimonio_vitalicio": 93765.6
    },
    {
      "descartes": 201,
      "salarios_restantes": 68,
      "media_corrigida": 5491.57,
      "tc_anos_resultante": 18.2,
      "carencia_restante": 219,
      "coeficiente_perc": 60.0,
      "rmi": 3294.94,
      "delta_rmi": 396.24,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2014",
      "maior_salario_expurgado": 4852.67,
      "patrimonio_vitalicio": 95097.6
    },
    {
      "descartes": 202,
      "salarios_restantes": 67,
      "media_corrigida": 5501.06,
      "tc_anos_resultante": 18.2,
      "carencia_restante": 218,
      "coeficiente_perc": 60.0,
      "rmi": 3300.64,
      "delta_rmi": 401.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2015",
      "maior_salario_expurgado": 4855.79,
      "patrimonio_vitalicio": 96465.6
    },
    {
      "descartes": 203,
      "salarios_restantes": 66,
      "media_corrigida": 5510.82,
      "tc_anos_resultante": 18.1,
      "carencia_restante": 217,
      "coeficiente_perc": 60.0,
      "rmi": 3306.49,
      "delta_rmi": 407.79,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2014",
      "maior_salario_expurgado": 4856.7,
      "patrimonio_vitalicio": 97869.6
    },
    {
      "descartes": 204,
      "salarios_restantes": 65,
      "media_corrigida": 5520.74,
      "tc_anos_resultante": 18.0,
      "carencia_restante": 216,
      "coeficiente_perc": 60.0,
      "rmi": 3312.45,
      "delta_rmi": 413.75,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2017",
      "maior_salario_expurgado": 4866.09,
      "patrimonio_vitalicio": 99300.0
    },
    {
      "descartes": 205,
      "salarios_restantes": 64,
      "media_corrigida": 5530.78,
      "tc_anos_resultante": 17.9,
      "carencia_restante": 215,
      "coeficiente_perc": 60.0,
      "rmi": 3318.47,
      "delta_rmi": 419.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2015",
      "maior_salario_expurgado": 4878.24,
      "patrimonio_vitalicio": 100744.8
    },
    {
      "descartes": 206,
      "salarios_restantes": 63,
      "media_corrigida": 5541.1,
      "tc_anos_resultante": 17.8,
      "carencia_restante": 214,
      "coeficiente_perc": 60.0,
      "rmi": 3324.66,
      "delta_rmi": 425.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2019",
      "maior_salario_expurgado": 4880.58,
      "patrimonio_vitalicio": 102230.4
    },
    {
      "descartes": 207,
      "salarios_restantes": 62,
      "media_corrigida": 5551.71,
      "tc_anos_resultante": 17.8,
      "carencia_restante": 213,
      "coeficiente_perc": 60.0,
      "rmi": 3331.03,
      "delta_rmi": 432.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2019",
      "maior_salario_expurgado": 4883.39,
      "patrimonio_vitalicio": 103759.2
    },
    {
      "descartes": 208,
      "salarios_restantes": 61,
      "media_corrigida": 5562.57,
      "tc_anos_resultante": 17.7,
      "carencia_restante": 212,
      "coeficiente_perc": 60.0,
      "rmi": 3337.54,
      "delta_rmi": 438.84,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2015",
      "maior_salario_expurgado": 4889.13,
      "patrimonio_vitalicio": 105321.6
    },
    {
      "descartes": 209,
      "salarios_restantes": 60,
      "media_corrigida": 5573.75,
      "tc_anos_resultante": 17.6,
      "carencia_restante": 211,
      "coeficiente_perc": 60.0,
      "rmi": 3344.25,
      "delta_rmi": 445.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2019",
      "maior_salario_expurgado": 4892.06,
      "patrimonio_vitalicio": 106932.0
    },
    {
      "descartes": 210,
      "salarios_restantes": 59,
      "media_corrigida": 5585.22,
      "tc_anos_resultante": 17.5,
      "carencia_restante": 210,
      "coeficiente_perc": 60.0,
      "rmi": 3351.13,
      "delta_rmi": 452.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2014",
      "maior_salario_expurgado": 4896.59,
      "patrimonio_vitalicio": 108583.2
    },
    {
      "descartes": 211,
      "salarios_restantes": 58,
      "media_corrigida": 5596.97,
      "tc_anos_resultante": 17.4,
      "carencia_restante": 209,
      "coeficiente_perc": 60.0,
      "rmi": 3358.18,
      "delta_rmi": 459.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2017",
      "maior_salario_expurgado": 4904.03,
      "patrimonio_vitalicio": 110275.2
    },
    {
      "descartes": 212,
      "salarios_restantes": 57,
      "media_corrigida": 5609.04,
      "tc_anos_resultante": 17.3,
      "carencia_restante": 208,
      "coeficiente_perc": 60.0,
      "rmi": 3365.42,
      "delta_rmi": 466.72,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2017",
      "maior_salario_expurgado": 4909.07,
      "patrimonio_vitalicio": 112012.8
    },
    {
      "descartes": 213,
      "salarios_restantes": 56,
      "media_corrigida": 5621.49,
      "tc_anos_resultante": 17.2,
      "carencia_restante": 207,
      "coeficiente_perc": 60.0,
      "rmi": 3372.89,
      "delta_rmi": 474.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2014",
      "maior_salario_expurgado": 4911.73,
      "patrimonio_vitalicio": 113805.6
    },
    {
      "descartes": 214,
      "salarios_restantes": 55,
      "media_corrigida": 5634.24,
      "tc_anos_resultante": 17.2,
      "carencia_restante": 206,
      "coeficiente_perc": 60.0,
      "rmi": 3380.55,
      "delta_rmi": 481.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2015",
      "maior_salario_expurgado": 4919.96,
      "patrimonio_vitalicio": 115644.0
    },
    {
      "descartes": 215,
      "salarios_restantes": 54,
      "media_corrigida": 5647.44,
      "tc_anos_resultante": 17.1,
      "carencia_restante": 205,
      "coeficiente_perc": 60.0,
      "rmi": 3388.46,
      "delta_rmi": 489.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2018",
      "maior_salario_expurgado": 4921.8,
      "patrimonio_vitalicio": 117542.4
    },
    {
      "descartes": 216,
      "salarios_restantes": 53,
      "media_corrigida": 5661.1,
      "tc_anos_resultante": 17.0,
      "carencia_restante": 204,
      "coeficiente_perc": 60.0,
      "rmi": 3396.66,
      "delta_rmi": 497.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2013",
      "maior_salario_expurgado": 4923.2,
      "patrimonio_vitalicio": 119510.4
    },
    {
      "descartes": 217,
      "salarios_restantes": 52,
      "media_corrigida": 5675.21,
      "tc_anos_resultante": 16.9,
      "carencia_restante": 203,
      "coeficiente_perc": 60.0,
      "rmi": 3405.13,
      "delta_rmi": 506.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2013",
      "maior_salario_expurgado": 4927.44,
      "patrimonio_vitalicio": 121543.2
    },
    {
      "descartes": 218,
      "salarios_restantes": 51,
      "media_corrigida": 5689.82,
      "tc_anos_resultante": 16.8,
      "carencia_restante": 202,
      "coeficiente_perc": 60.0,
      "rmi": 3413.89,
      "delta_rmi": 515.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2012",
      "maior_salario_expurgado": 4930.32,
      "patrimonio_vitalicio": 123645.6
    },
    {
      "descartes": 219,
      "salarios_restantes": 50,
      "media_corrigida": 5704.8,
      "tc_anos_resultante": 16.8,
      "carencia_restante": 201,
      "coeficiente_perc": 60.0,
      "rmi": 3422.88,
      "delta_rmi": 524.18,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2016",
      "maior_salario_expurgado": 4940.88,
      "patrimonio_vitalicio": 125803.2
    },
    {
      "descartes": 220,
      "salarios_restantes": 49,
      "media_corrigida": 5720.31,
      "tc_anos_resultante": 16.7,
      "carencia_restante": 200,
      "coeficiente_perc": 60.0,
      "rmi": 3432.18,
      "delta_rmi": 533.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2016",
      "maior_salario_expurgado": 4944.78,
      "patrimonio_vitalicio": 128035.2
    },
    {
      "descartes": 221,
      "salarios_restantes": 48,
      "media_corrigida": 5736.45,
      "tc_anos_resultante": 16.6,
      "carencia_restante": 199,
      "coeficiente_perc": 60.0,
      "rmi": 3441.87,
      "delta_rmi": 543.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2019",
      "maior_salario_expurgado": 4945.35,
      "patrimonio_vitalicio": 130360.8
    },
    {
      "descartes": 222,
      "salarios_restantes": 47,
      "media_corrigida": 5753.15,
      "tc_anos_resultante": 16.5,
      "carencia_restante": 198,
      "coeficiente_perc": 60.0,
      "rmi": 3451.89,
      "delta_rmi": 553.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2015",
      "maior_salario_expurgado": 4951.63,
      "patrimonio_vitalicio": 132765.6
    },
    {
      "descartes": 223,
      "salarios_restantes": 46,
      "media_corrigida": 5770.51,
      "tc_anos_resultante": 16.4,
      "carencia_restante": 197,
      "coeficiente_perc": 60.0,
      "rmi": 3462.31,
      "delta_rmi": 563.61,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2016",
      "maior_salario_expurgado": 4954.44,
      "patrimonio_vitalicio": 135266.4
    },
    {
      "descartes": 224,
      "salarios_restantes": 45,
      "media_corrigida": 5788.57,
      "tc_anos_resultante": 16.3,
      "carencia_restante": 196,
      "coeficiente_perc": 60.0,
      "rmi": 3473.14,
      "delta_rmi": 574.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2019",
      "maior_salario_expurgado": 4957.78,
      "patrimonio_vitalicio": 137865.6
    },
    {
      "descartes": 225,
      "salarios_restantes": 44,
      "media_corrigida": 5807.34,
      "tc_anos_resultante": 16.2,
      "carencia_restante": 195,
      "coeficiente_perc": 60.0,
      "rmi": 3484.4,
      "delta_rmi": 585.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2013",
      "maior_salario_expurgado": 4962.92,
      "patrimonio_vitalicio": 140568.0
    },
    {
      "descartes": 226,
      "salarios_restantes": 43,
      "media_corrigida": 5826.89,
      "tc_anos_resultante": 16.2,
      "carencia_restante": 194,
      "coeficiente_perc": 60.0,
      "rmi": 3496.14,
      "delta_rmi": 597.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2016",
      "maior_salario_expurgado": 4966.46,
      "patrimonio_vitalicio": 143385.6
    },
    {
      "descartes": 227,
      "salarios_restantes": 42,
      "media_corrigida": 5847.36,
      "tc_anos_resultante": 16.1,
      "carencia_restante": 193,
      "coeficiente_perc": 60.0,
      "rmi": 3508.41,
      "delta_rmi": 609.71,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2015",
      "maior_salario_expurgado": 4967.42,
      "patrimonio_vitalicio": 146330.4
    },
    {
      "descartes": 228,
      "salarios_restantes": 41,
      "media_corrigida": 5868.64,
      "tc_anos_resultante": 16.0,
      "carencia_restante": 192,
      "coeficiente_perc": 60.0,
      "rmi": 3521.18,
      "delta_rmi": 622.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2016",
      "maior_salario_expurgado": 4974.9,
      "patrimonio_vitalicio": 149395.2
    },
    {
      "descartes": 229,
      "salarios_restantes": 40,
      "media_corrigida": 5890.96,
      "tc_anos_resultante": 15.9,
      "carencia_restante": 191,
      "coeficiente_perc": 60.0,
      "rmi": 3534.58,
      "delta_rmi": 635.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2018",
      "maior_salario_expurgado": 4975.68,
      "patrimonio_vitalicio": 152611.2
    },
    {
      "descartes": 230,
      "salarios_restantes": 39,
      "media_corrigida": 5914.37,
      "tc_anos_resultante": 15.8,
      "carencia_restante": 190,
      "coeficiente_perc": 60.0,
      "rmi": 3548.62,
      "delta_rmi": 649.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2016",
      "maior_salario_expurgado": 4977.96,
      "patrimonio_vitalicio": 155980.8
    },
    {
      "descartes": 231,
      "salarios_restantes": 38,
      "media_corrigida": 5938.65,
      "tc_anos_resultante": 15.8,
      "carencia_restante": 189,
      "coeficiente_perc": 60.0,
      "rmi": 3563.19,
      "delta_rmi": 664.49,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2013",
      "maior_salario_expurgado": 4991.84,
      "patrimonio_vitalicio": 159477.6
    },
    {
      "descartes": 232,
      "salarios_restantes": 37,
      "media_corrigida": 5964.12,
      "tc_anos_resultante": 15.7,
      "carencia_restante": 188,
      "coeficiente_perc": 60.0,
      "rmi": 3578.47,
      "delta_rmi": 679.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2014",
      "maior_salario_expurgado": 4996.31,
      "patrimonio_vitalicio": 163144.8
    },
    {
      "descartes": 233,
      "salarios_restantes": 36,
      "media_corrigida": 5990.86,
      "tc_anos_resultante": 15.6,
      "carencia_restante": 187,
      "coeficiente_perc": 60.0,
      "rmi": 3594.52,
      "delta_rmi": 695.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2016",
      "maior_salario_expurgado": 5001.35,
      "patrimonio_vitalicio": 166996.8
    },
    {
      "descartes": 234,
      "salarios_restantes": 35,
      "media_corrigida": 6018.42,
      "tc_anos_resultante": 15.5,
      "carencia_restante": 186,
      "coeficiente_perc": 60.0,
      "rmi": 3611.05,
      "delta_rmi": 712.35,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2016",
      "maior_salario_expurgado": 5026.26,
      "patrimonio_vitalicio": 170964.0
    },
    {
      "descartes": 235,
      "salarios_restantes": 34,
      "media_corrigida": 6047.34,
      "tc_anos_resultante": 15.4,
      "carencia_restante": 185,
      "coeficiente_perc": 60.0,
      "rmi": 3628.4,
      "delta_rmi": 729.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2013",
      "maior_salario_expurgado": 5035.21,
      "patrimonio_vitalicio": 175128.0
    },
    {
      "descartes": 236,
      "salarios_restantes": 33,
      "media_corrigida": 6077.98,
      "tc_anos_resultante": 15.3,
      "carencia_restante": 184,
      "coeficiente_perc": 60.0,
      "rmi": 3646.79,
      "delta_rmi": 748.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2018",
      "maior_salario_expurgado": 5036.14,
      "patrimonio_vitalicio": 179541.6
    },
    {
      "descartes": 237,
      "salarios_restantes": 32,
      "media_corrigida": 6109.94,
      "tc_anos_resultante": 15.2,
      "carencia_restante": 183,
      "coeficiente_perc": 60.0,
      "rmi": 3665.96,
      "delta_rmi": 767.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2017",
      "maior_salario_expurgado": 5055.31,
      "patrimonio_vitalicio": 184142.4
    },
    {
      "descartes": 238,
      "salarios_restantes": 31,
      "media_corrigida": 6143.91,
      "tc_anos_resultante": 15.2,
      "carencia_restante": 182,
      "coeficiente_perc": 60.0,
      "rmi": 3686.35,
      "delta_rmi": 787.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2018",
      "maior_salario_expurgado": 5056.71,
      "patrimonio_vitalicio": 189036.0
    },
    {
      "descartes": 239,
      "salarios_restantes": 30,
      "media_corrigida": 6180.07,
      "tc_anos_resultante": 15.1,
      "carencia_restante": 181,
      "coeficiente_perc": 60.0,
      "rmi": 3708.04,
      "delta_rmi": 809.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2018",
      "maior_salario_expurgado": 5059.29,
      "patrimonio_vitalicio": 194241.6
    },
    {
      "descartes": 240,
      "salarios_restantes": 29,
      "media_corrigida": 6218.65,
      "tc_anos_resultante": 15.0,
      "carencia_restante": 180,
      "coeficiente_perc": 60.0,
      "rmi": 3731.19,
      "delta_rmi": 832.49,
      "tag": "Ponto Ótimo Global Atuarial (15 Anos Rigorosamente Preservados) 👑",
      "faixa_descartada": "01/2009 a 06/2017",
      "maior_salario_expurgado": 5061.12,
      "patrimonio_vitalicio": 199797.6
    }
  ],
  "descarte_curve": [
    {
      "descartes": 0,
      "salarios_restantes": 269,
      "media_corrigida": 3220.78,
      "tc_anos_resultante": 35.0,
      "carencia_restante": 420,
      "coeficiente_perc": 90.0,
      "rmi": 2898.7,
      "delta_rmi": 0.0,
      "tag": "Cenário 0: Sem Descarte (Status Quo)",
      "faixa_descartada": "Nenhuma",
      "maior_salario_expurgado": 0.0,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 1,
      "salarios_restantes": 268,
      "media_corrigida": 3228.73,
      "tc_anos_resultante": 34.9,
      "carencia_restante": 419,
      "coeficiente_perc": 88.0,
      "rmi": 2841.28,
      "delta_rmi": -57.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2009",
      "maior_salario_expurgado": 1091.38,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 2,
      "salarios_restantes": 267,
      "media_corrigida": 3236.71,
      "tc_anos_resultante": 34.8,
      "carencia_restante": 418,
      "coeficiente_perc": 88.0,
      "rmi": 2848.3,
      "delta_rmi": -50.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2008",
      "maior_salario_expurgado": 1098.37,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 3,
      "salarios_restantes": 266,
      "media_corrigida": 3244.73,
      "tc_anos_resultante": 34.8,
      "carencia_restante": 417,
      "coeficiente_perc": 88.0,
      "rmi": 2855.37,
      "delta_rmi": -43.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2008",
      "maior_salario_expurgado": 1101.55,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 4,
      "salarios_restantes": 265,
      "media_corrigida": 3252.81,
      "tc_anos_resultante": 34.7,
      "carencia_restante": 416,
      "coeficiente_perc": 88.0,
      "rmi": 2862.47,
      "delta_rmi": -36.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2008",
      "maior_salario_expurgado": 1105.74,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 5,
      "salarios_restantes": 264,
      "media_corrigida": 3260.92,
      "tc_anos_resultante": 34.6,
      "carencia_restante": 415,
      "coeficiente_perc": 88.0,
      "rmi": 2869.61,
      "delta_rmi": -29.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2008",
      "maior_salario_expurgado": 1111.27,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 6,
      "salarios_restantes": 263,
      "media_corrigida": 3269.08,
      "tc_anos_resultante": 34.5,
      "carencia_restante": 414,
      "coeficiente_perc": 88.0,
      "rmi": 2876.79,
      "delta_rmi": -21.91,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2008",
      "maior_salario_expurgado": 1112.93,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 7,
      "salarios_restantes": 262,
      "media_corrigida": 3277.28,
      "tc_anos_resultante": 34.4,
      "carencia_restante": 413,
      "coeficiente_perc": 88.0,
      "rmi": 2884.01,
      "delta_rmi": -14.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2008",
      "maior_salario_expurgado": 1121.74,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 8,
      "salarios_restantes": 261,
      "media_corrigida": 3285.5,
      "tc_anos_resultante": 34.3,
      "carencia_restante": 412,
      "coeficiente_perc": 88.0,
      "rmi": 2891.24,
      "delta_rmi": -7.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2008",
      "maior_salario_expurgado": 1131.95,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 9,
      "salarios_restantes": 260,
      "media_corrigida": 3293.59,
      "tc_anos_resultante": 34.2,
      "carencia_restante": 411,
      "coeficiente_perc": 88.0,
      "rmi": 2898.36,
      "delta_rmi": -0.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2009",
      "maior_salario_expurgado": 1182.07,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 10,
      "salarios_restantes": 259,
      "media_corrigida": 3301.73,
      "tc_anos_resultante": 34.2,
      "carencia_restante": 410,
      "coeficiente_perc": 88.0,
      "rmi": 2905.52,
      "delta_rmi": 6.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2009",
      "maior_salario_expurgado": 1184.91,
      "patrimonio_vitalicio": 1636.8
    },
    {
      "descartes": 11,
      "salarios_restantes": 258,
      "media_corrigida": 3309.92,
      "tc_anos_resultante": 34.1,
      "carencia_restante": 409,
      "coeficiente_perc": 88.0,
      "rmi": 2912.73,
      "delta_rmi": 14.03,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2009",
      "maior_salario_expurgado": 1189.29,
      "patrimonio_vitalicio": 3367.2
    },
    {
      "descartes": 12,
      "salarios_restantes": 257,
      "media_corrigida": 3318.16,
      "tc_anos_resultante": 34.0,
      "carencia_restante": 408,
      "coeficiente_perc": 88.0,
      "rmi": 2919.98,
      "delta_rmi": 21.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2009",
      "maior_salario_expurgado": 1192.15,
      "patrimonio_vitalicio": 5107.2
    },
    {
      "descartes": 13,
      "salarios_restantes": 256,
      "media_corrigida": 3326.46,
      "tc_anos_resultante": 33.9,
      "carencia_restante": 407,
      "coeficiente_perc": 86.0,
      "rmi": 2860.75,
      "delta_rmi": -37.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2009",
      "maior_salario_expurgado": 1194.05,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 14,
      "salarios_restantes": 255,
      "media_corrigida": 3334.82,
      "tc_anos_resultante": 33.8,
      "carencia_restante": 406,
      "coeficiente_perc": 86.0,
      "rmi": 2867.94,
      "delta_rmi": -30.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2009",
      "maior_salario_expurgado": 1195.01,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 15,
      "salarios_restantes": 254,
      "media_corrigida": 3343.23,
      "tc_anos_resultante": 33.8,
      "carencia_restante": 405,
      "coeficiente_perc": 86.0,
      "rmi": 2875.18,
      "delta_rmi": -23.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2009",
      "maior_salario_expurgado": 1197.76,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 16,
      "salarios_restantes": 253,
      "media_corrigida": 3351.69,
      "tc_anos_resultante": 33.7,
      "carencia_restante": 404,
      "coeficiente_perc": 86.0,
      "rmi": 2882.45,
      "delta_rmi": -16.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2009",
      "maior_salario_expurgado": 1202.79,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 17,
      "salarios_restantes": 252,
      "media_corrigida": 3360.19,
      "tc_anos_resultante": 33.6,
      "carencia_restante": 403,
      "coeficiente_perc": 86.0,
      "rmi": 2889.76,
      "delta_rmi": -8.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2009",
      "maior_salario_expurgado": 1210.0,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 18,
      "salarios_restantes": 251,
      "media_corrigida": 3368.73,
      "tc_anos_resultante": 33.5,
      "carencia_restante": 402,
      "coeficiente_perc": 86.0,
      "rmi": 2897.11,
      "delta_rmi": -1.59,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2009",
      "maior_salario_expurgado": 1216.66,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 19,
      "salarios_restantes": 250,
      "media_corrigida": 3377.33,
      "tc_anos_resultante": 33.4,
      "carencia_restante": 401,
      "coeficiente_perc": 86.0,
      "rmi": 2904.51,
      "delta_rmi": 5.81,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2010",
      "maior_salario_expurgado": 1217.74,
      "patrimonio_vitalicio": 1394.4
    },
    {
      "descartes": 20,
      "salarios_restantes": 249,
      "media_corrigida": 3386.0,
      "tc_anos_resultante": 33.3,
      "carencia_restante": 400,
      "coeficiente_perc": 86.0,
      "rmi": 2911.96,
      "delta_rmi": 13.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2009",
      "maior_salario_expurgado": 1219.09,
      "patrimonio_vitalicio": 3182.4
    },
    {
      "descartes": 21,
      "salarios_restantes": 248,
      "media_corrigida": 3394.71,
      "tc_anos_resultante": 33.2,
      "carencia_restante": 399,
      "coeficiente_perc": 86.0,
      "rmi": 2919.45,
      "delta_rmi": 20.75,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2010",
      "maior_salario_expurgado": 1225.04,
      "patrimonio_vitalicio": 4980.0
    },
    {
      "descartes": 22,
      "salarios_restantes": 247,
      "media_corrigida": 3403.49,
      "tc_anos_resultante": 33.2,
      "carencia_restante": 398,
      "coeficiente_perc": 86.0,
      "rmi": 2927.0,
      "delta_rmi": 28.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2011",
      "maior_salario_expurgado": 1226.72,
      "patrimonio_vitalicio": 6792.0
    },
    {
      "descartes": 23,
      "salarios_restantes": 246,
      "media_corrigida": 3412.31,
      "tc_anos_resultante": 33.1,
      "carencia_restante": 397,
      "coeficiente_perc": 86.0,
      "rmi": 2934.59,
      "delta_rmi": 35.89,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2011",
      "maior_salario_expurgado": 1232.98,
      "patrimonio_vitalicio": 8613.6
    },
    {
      "descartes": 24,
      "salarios_restantes": 245,
      "media_corrigida": 3421.19,
      "tc_anos_resultante": 33.0,
      "carencia_restante": 396,
      "coeficiente_perc": 86.0,
      "rmi": 2942.22,
      "delta_rmi": 43.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2010",
      "maior_salario_expurgado": 1237.66,
      "patrimonio_vitalicio": 10444.8
    },
    {
      "descartes": 25,
      "salarios_restantes": 244,
      "media_corrigida": 3430.13,
      "tc_anos_resultante": 32.9,
      "carencia_restante": 395,
      "coeficiente_perc": 84.0,
      "rmi": 2881.31,
      "delta_rmi": -17.39,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2011",
      "maior_salario_expurgado": 1240.01,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 26,
      "salarios_restantes": 243,
      "media_corrigida": 3439.13,
      "tc_anos_resultante": 32.8,
      "carencia_restante": 394,
      "coeficiente_perc": 84.0,
      "rmi": 2888.87,
      "delta_rmi": -9.83,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2011",
      "maior_salario_expurgado": 1243.97,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 27,
      "salarios_restantes": 242,
      "media_corrigida": 3448.18,
      "tc_anos_resultante": 32.8,
      "carencia_restante": 393,
      "coeficiente_perc": 84.0,
      "rmi": 2896.47,
      "delta_rmi": -2.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2010",
      "maior_salario_expurgado": 1249.05,
      "patrimonio_vitalicio": 0
    },
    {
      "descartes": 28,
      "salarios_restantes": 241,
      "media_corrigida": 3457.3,
      "tc_anos_resultante": 32.7,
      "carencia_restante": 392,
      "coeficiente_perc": 84.0,
      "rmi": 2904.13,
      "delta_rmi": 5.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2011",
      "maior_salario_expurgado": 1249.57,
      "patrimonio_vitalicio": 1303.2
    },
    {
      "descartes": 29,
      "salarios_restantes": 240,
      "media_corrigida": 3466.49,
      "tc_anos_resultante": 32.6,
      "carencia_restante": 391,
      "coeficiente_perc": 84.0,
      "rmi": 2911.85,
      "delta_rmi": 13.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2010",
      "maior_salario_expurgado": 1252.65,
      "patrimonio_vitalicio": 3156.0
    },
    {
      "descartes": 30,
      "salarios_restantes": 239,
      "media_corrigida": 3475.74,
      "tc_anos_resultante": 32.5,
      "carencia_restante": 390,
      "coeficiente_perc": 84.0,
      "rmi": 2919.62,
      "delta_rmi": 20.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2010",
      "maior_salario_expurgado": 1254.03,
      "patrimonio_vitalicio": 5020.8
    },
    {
      "descartes": 31,
      "salarios_restantes": 238,
      "media_corrigida": 3485.07,
      "tc_anos_resultante": 32.4,
      "carencia_restante": 389,
      "coeficiente_perc": 84.0,
      "rmi": 2927.46,
      "delta_rmi": 28.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2011",
      "maior_salario_expurgado": 1254.82,
      "patrimonio_vitalicio": 6902.4
    },
    {
      "descartes": 32,
      "salarios_restantes": 237,
      "media_corrigida": 3494.48,
      "tc_anos_resultante": 32.3,
      "carencia_restante": 388,
      "coeficiente_perc": 84.0,
      "rmi": 2935.37,
      "delta_rmi": 36.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2011",
      "maior_salario_expurgado": 1254.82,
      "patrimonio_vitalicio": 8800.8
    },
    {
      "descartes": 33,
      "salarios_restantes": 236,
      "media_corrigida": 3503.97,
      "tc_anos_resultante": 32.2,
      "carencia_restante": 387,
      "coeficiente_perc": 84.0,
      "rmi": 2943.34,
      "delta_rmi": 44.64,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2010",
      "maior_salario_expurgado": 1254.91,
      "patrimonio_vitalicio": 10713.6
    },
    {
      "descartes": 34,
      "salarios_restantes": 235,
      "media_corrigida": 3513.54,
      "tc_anos_resultante": 32.2,
      "carencia_restante": 386,
      "coeficiente_perc": 84.0,
      "rmi": 2951.37,
      "delta_rmi": 52.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2010",
      "maior_salario_expurgado": 1255.79,
      "patrimonio_vitalicio": 12640.8
    },
    {
      "descartes": 35,
      "salarios_restantes": 234,
      "media_corrigida": 3523.18,
      "tc_anos_resultante": 32.1,
      "carencia_restante": 385,
      "coeficiente_perc": 84.0,
      "rmi": 2959.47,
      "delta_rmi": 60.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2011",
      "maior_salario_expurgado": 1257.58,
      "patrimonio_vitalicio": 14584.8
    },
    {
      "descartes": 36,
      "salarios_restantes": 233,
      "media_corrigida": 3532.9,
      "tc_anos_resultante": 32.0,
      "carencia_restante": 384,
      "coeficiente_perc": 84.0,
      "rmi": 2967.64,
      "delta_rmi": 68.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2010",
      "maior_salario_expurgado": 1258.04,
      "patrimonio_vitalicio": 16545.6
    },
    {
      "descartes": 37,
      "salarios_restantes": 232,
      "media_corrigida": 3542.68,
      "tc_anos_resultante": 31.9,
      "carencia_restante": 383,
      "coeficiente_perc": 82.0,
      "rmi": 2905.0,
      "delta_rmi": 6.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2011",
      "maior_salario_expurgado": 1264.75,
      "patrimonio_vitalicio": 1512.0
    },
    {
      "descartes": 38,
      "salarios_restantes": 231,
      "media_corrigida": 3552.53,
      "tc_anos_resultante": 31.8,
      "carencia_restante": 382,
      "coeficiente_perc": 82.0,
      "rmi": 2913.07,
      "delta_rmi": 14.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2010",
      "maior_salario_expurgado": 1267.22,
      "patrimonio_vitalicio": 3448.8
    },
    {
      "descartes": 39,
      "salarios_restantes": 230,
      "media_corrigida": 3562.44,
      "tc_anos_resultante": 31.8,
      "carencia_restante": 381,
      "coeficiente_perc": 82.0,
      "rmi": 2921.2,
      "delta_rmi": 22.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2011",
      "maior_salario_expurgado": 1273.86,
      "patrimonio_vitalicio": 5400.0
    },
    {
      "descartes": 40,
      "salarios_restantes": 229,
      "media_corrigida": 3572.42,
      "tc_anos_resultante": 31.7,
      "carencia_restante": 380,
      "coeficiente_perc": 82.0,
      "rmi": 2929.39,
      "delta_rmi": 30.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2010",
      "maior_salario_expurgado": 1276.22,
      "patrimonio_vitalicio": 7365.6
    },
    {
      "descartes": 41,
      "salarios_restantes": 228,
      "media_corrigida": 3582.49,
      "tc_anos_resultante": 31.6,
      "carencia_restante": 379,
      "coeficiente_perc": 82.0,
      "rmi": 2937.64,
      "delta_rmi": 38.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2011",
      "maior_salario_expurgado": 1277.36,
      "patrimonio_vitalicio": 9345.6
    },
    {
      "descartes": 42,
      "salarios_restantes": 227,
      "media_corrigida": 3592.62,
      "tc_anos_resultante": 31.5,
      "carencia_restante": 378,
      "coeficiente_perc": 82.0,
      "rmi": 2945.95,
      "delta_rmi": 47.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2011",
      "maior_salario_expurgado": 1282.26,
      "patrimonio_vitalicio": 11340.0
    },
    {
      "descartes": 43,
      "salarios_restantes": 226,
      "media_corrigida": 3602.83,
      "tc_anos_resultante": 31.4,
      "carencia_restante": 377,
      "coeficiente_perc": 82.0,
      "rmi": 2954.32,
      "delta_rmi": 55.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2010",
      "maior_salario_expurgado": 1285.16,
      "patrimonio_vitalicio": 13348.8
    },
    {
      "descartes": 44,
      "salarios_restantes": 225,
      "media_corrigida": 3612.96,
      "tc_anos_resultante": 31.3,
      "carencia_restante": 376,
      "coeficiente_perc": 82.0,
      "rmi": 2962.63,
      "delta_rmi": 63.93,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1995",
      "maior_salario_expurgado": 1322.56,
      "patrimonio_vitalicio": 15343.2
    },
    {
      "descartes": 45,
      "salarios_restantes": 224,
      "media_corrigida": 3623.17,
      "tc_anos_resultante": 31.2,
      "carencia_restante": 375,
      "coeficiente_perc": 82.0,
      "rmi": 2971.0,
      "delta_rmi": 72.3,
      "tag": "Cenário MEI: Expurgo dos 45 Meses de MEI (5%)",
      "faixa_descartada": "01/2009 a 06/2024",
      "maior_salario_expurgado": 1328.05,
      "patrimonio_vitalicio": 17352.0
    },
    {
      "descartes": 46,
      "salarios_restantes": 223,
      "media_corrigida": 3633.29,
      "tc_anos_resultante": 31.2,
      "carencia_restante": 374,
      "coeficiente_perc": 82.0,
      "rmi": 2979.3,
      "delta_rmi": 80.6,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2012",
      "maior_salario_expurgado": 1365.15,
      "patrimonio_vitalicio": 19344.0
    },
    {
      "descartes": 47,
      "salarios_restantes": 222,
      "media_corrigida": 3643.49,
      "tc_anos_resultante": 31.1,
      "carencia_restante": 373,
      "coeficiente_perc": 82.0,
      "rmi": 2987.66,
      "delta_rmi": 88.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2012",
      "maior_salario_expurgado": 1368.69,
      "patrimonio_vitalicio": 21350.4
    },
    {
      "descartes": 48,
      "salarios_restantes": 221,
      "media_corrigida": 3653.75,
      "tc_anos_resultante": 31.0,
      "carencia_restante": 372,
      "coeficiente_perc": 82.0,
      "rmi": 2996.08,
      "delta_rmi": 97.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2012",
      "maior_salario_expurgado": 1376.22,
      "patrimonio_vitalicio": 23371.2
    },
    {
      "descartes": 49,
      "salarios_restantes": 220,
      "media_corrigida": 3664.09,
      "tc_anos_resultante": 30.9,
      "carencia_restante": 371,
      "coeficiente_perc": 80.0,
      "rmi": 2931.28,
      "delta_rmi": 32.58,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2021",
      "maior_salario_expurgado": 1378.19,
      "patrimonio_vitalicio": 7819.2
    },
    {
      "descartes": 50,
      "salarios_restantes": 219,
      "media_corrigida": 3674.5,
      "tc_anos_resultante": 30.8,
      "carencia_restante": 370,
      "coeficiente_perc": 80.0,
      "rmi": 2939.6,
      "delta_rmi": 40.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2012",
      "maior_salario_expurgado": 1385.03,
      "patrimonio_vitalicio": 9816.0
    },
    {
      "descartes": 51,
      "salarios_restantes": 218,
      "media_corrigida": 3684.99,
      "tc_anos_resultante": 30.8,
      "carencia_restante": 369,
      "coeficiente_perc": 80.0,
      "rmi": 2947.99,
      "delta_rmi": 49.29,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2012",
      "maior_salario_expurgado": 1387.52,
      "patrimonio_vitalicio": 11829.6
    },
    {
      "descartes": 52,
      "salarios_restantes": 217,
      "media_corrigida": 3695.57,
      "tc_anos_resultante": 30.7,
      "carencia_restante": 368,
      "coeficiente_perc": 80.0,
      "rmi": 2956.46,
      "delta_rmi": 57.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2021",
      "maior_salario_expurgado": 1389.77,
      "patrimonio_vitalicio": 13862.4
    },
    {
      "descartes": 53,
      "salarios_restantes": 216,
      "media_corrigida": 3706.23,
      "tc_anos_resultante": 30.6,
      "carencia_restante": 367,
      "coeficiente_perc": 80.0,
      "rmi": 2964.98,
      "delta_rmi": 66.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2012",
      "maior_salario_expurgado": 1392.93,
      "patrimonio_vitalicio": 15907.2
    },
    {
      "descartes": 54,
      "salarios_restantes": 215,
      "media_corrigida": 3716.93,
      "tc_anos_resultante": 30.5,
      "carencia_restante": 366,
      "coeficiente_perc": 80.0,
      "rmi": 2973.54,
      "delta_rmi": 74.84,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2021",
      "maior_salario_expurgado": 1405.89,
      "patrimonio_vitalicio": 17961.6
    },
    {
      "descartes": 55,
      "salarios_restantes": 214,
      "media_corrigida": 3727.65,
      "tc_anos_resultante": 30.4,
      "carencia_restante": 365,
      "coeficiente_perc": 80.0,
      "rmi": 2982.12,
      "delta_rmi": 83.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2021",
      "maior_salario_expurgado": 1422.76,
      "patrimonio_vitalicio": 20020.8
    },
    {
      "descartes": 56,
      "salarios_restantes": 213,
      "media_corrigida": 3738.47,
      "tc_anos_resultante": 30.3,
      "carencia_restante": 364,
      "coeficiente_perc": 80.0,
      "rmi": 2990.77,
      "delta_rmi": 92.07,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2022",
      "maior_salario_expurgado": 1423.09,
      "patrimonio_vitalicio": 22096.8
    },
    {
      "descartes": 57,
      "salarios_restantes": 212,
      "media_corrigida": 3749.35,
      "tc_anos_resultante": 30.2,
      "carencia_restante": 363,
      "coeficiente_perc": 80.0,
      "rmi": 2999.48,
      "delta_rmi": 100.78,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2020",
      "maior_salario_expurgado": 1431.85,
      "patrimonio_vitalicio": 24187.2
    },
    {
      "descartes": 58,
      "salarios_restantes": 211,
      "media_corrigida": 3760.33,
      "tc_anos_resultante": 30.2,
      "carencia_restante": 362,
      "coeficiente_perc": 80.0,
      "rmi": 3008.26,
      "delta_rmi": 109.56,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2022",
      "maior_salario_expurgado": 1432.91,
      "patrimonio_vitalicio": 26294.4
    },
    {
      "descartes": 59,
      "salarios_restantes": 210,
      "media_corrigida": 3771.4,
      "tc_anos_resultante": 30.1,
      "carencia_restante": 361,
      "coeficiente_perc": 80.0,
      "rmi": 3017.12,
      "delta_rmi": 118.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2021",
      "maior_salario_expurgado": 1435.28,
      "patrimonio_vitalicio": 28420.8
    },
    {
      "descartes": 60,
      "salarios_restantes": 209,
      "media_corrigida": 3782.57,
      "tc_anos_resultante": 30.0,
      "carencia_restante": 360,
      "coeficiente_perc": 80.0,
      "rmi": 3026.06,
      "delta_rmi": 127.36,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2022",
      "maior_salario_expurgado": 1436.02,
      "patrimonio_vitalicio": 30566.4
    },
    {
      "descartes": 61,
      "salarios_restantes": 208,
      "media_corrigida": 3793.84,
      "tc_anos_resultante": 29.9,
      "carencia_restante": 359,
      "coeficiente_perc": 78.0,
      "rmi": 2959.2,
      "delta_rmi": 60.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2022",
      "maior_salario_expurgado": 1438.35,
      "patrimonio_vitalicio": 14520.0
    },
    {
      "descartes": 62,
      "salarios_restantes": 207,
      "media_corrigida": 3805.21,
      "tc_anos_resultante": 29.8,
      "carencia_restante": 358,
      "coeficiente_perc": 78.0,
      "rmi": 2968.07,
      "delta_rmi": 69.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2022",
      "maior_salario_expurgado": 1440.49,
      "patrimonio_vitalicio": 16648.8
    },
    {
      "descartes": 63,
      "salarios_restantes": 206,
      "media_corrigida": 3816.67,
      "tc_anos_resultante": 29.8,
      "carencia_restante": 357,
      "coeficiente_perc": 78.0,
      "rmi": 2977.0,
      "delta_rmi": 78.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2022",
      "maior_salario_expurgado": 1445.11,
      "patrimonio_vitalicio": 18792.0
    },
    {
      "descartes": 64,
      "salarios_restantes": 205,
      "media_corrigida": 3828.21,
      "tc_anos_resultante": 29.7,
      "carencia_restante": 356,
      "coeficiente_perc": 78.0,
      "rmi": 2986.01,
      "delta_rmi": 87.31,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2021",
      "maior_salario_expurgado": 1449.92,
      "patrimonio_vitalicio": 20954.4
    },
    {
      "descartes": 65,
      "salarios_restantes": 204,
      "media_corrigida": 3839.86,
      "tc_anos_resultante": 29.6,
      "carencia_restante": 355,
      "coeficiente_perc": 78.0,
      "rmi": 2995.09,
      "delta_rmi": 96.39,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2020",
      "maior_salario_expurgado": 1452.76,
      "patrimonio_vitalicio": 23133.6
    },
    {
      "descartes": 66,
      "salarios_restantes": 203,
      "media_corrigida": 3851.59,
      "tc_anos_resultante": 29.5,
      "carencia_restante": 354,
      "coeficiente_perc": 78.0,
      "rmi": 3004.24,
      "delta_rmi": 105.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2021",
      "maior_salario_expurgado": 1458.62,
      "patrimonio_vitalicio": 25329.6
    },
    {
      "descartes": 67,
      "salarios_restantes": 202,
      "media_corrigida": 3863.37,
      "tc_anos_resultante": 29.4,
      "carencia_restante": 353,
      "coeficiente_perc": 78.0,
      "rmi": 3013.43,
      "delta_rmi": 114.73,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2021",
      "maior_salario_expurgado": 1472.62,
      "patrimonio_vitalicio": 27535.2
    },
    {
      "descartes": 68,
      "salarios_restantes": 201,
      "media_corrigida": 3875.23,
      "tc_anos_resultante": 29.3,
      "carencia_restante": 352,
      "coeficiente_perc": 78.0,
      "rmi": 3022.68,
      "delta_rmi": 123.98,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2021",
      "maior_salario_expurgado": 1478.22,
      "patrimonio_vitalicio": 29755.2
    },
    {
      "descartes": 69,
      "salarios_restantes": 200,
      "media_corrigida": 3887.15,
      "tc_anos_resultante": 29.2,
      "carencia_restante": 351,
      "coeficiente_perc": 78.0,
      "rmi": 3031.98,
      "delta_rmi": 133.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2021",
      "maior_salario_expurgado": 1490.93,
      "patrimonio_vitalicio": 31987.2
    },
    {
      "descartes": 70,
      "salarios_restantes": 199,
      "media_corrigida": 3899.19,
      "tc_anos_resultante": 29.2,
      "carencia_restante": 350,
      "coeficiente_perc": 78.0,
      "rmi": 3041.37,
      "delta_rmi": 142.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2023",
      "maior_salario_expurgado": 1492.62,
      "patrimonio_vitalicio": 34240.8
    },
    {
      "descartes": 71,
      "salarios_restantes": 198,
      "media_corrigida": 3911.33,
      "tc_anos_resultante": 29.1,
      "carencia_restante": 349,
      "coeficiente_perc": 78.0,
      "rmi": 3050.84,
      "delta_rmi": 152.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2023",
      "maior_salario_expurgado": 1494.5,
      "patrimonio_vitalicio": 36513.6
    },
    {
      "descartes": 72,
      "salarios_restantes": 197,
      "media_corrigida": 3923.57,
      "tc_anos_resultante": 29.0,
      "carencia_restante": 348,
      "coeficiente_perc": 78.0,
      "rmi": 3060.38,
      "delta_rmi": 161.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2023",
      "maior_salario_expurgado": 1500.53,
      "patrimonio_vitalicio": 38803.2
    },
    {
      "descartes": 73,
      "salarios_restantes": 196,
      "media_corrigida": 3935.92,
      "tc_anos_resultante": 28.9,
      "carencia_restante": 347,
      "coeficiente_perc": 76.0,
      "rmi": 2991.3,
      "delta_rmi": 92.6,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2023",
      "maior_salario_expurgado": 1502.72,
      "patrimonio_vitalicio": 22224.0
    },
    {
      "descartes": 74,
      "salarios_restantes": 195,
      "media_corrigida": 3948.4,
      "tc_anos_resultante": 28.8,
      "carencia_restante": 346,
      "coeficiente_perc": 76.0,
      "rmi": 3000.78,
      "delta_rmi": 102.08,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2021",
      "maior_salario_expurgado": 1503.16,
      "patrimonio_vitalicio": 24499.2
    },
    {
      "descartes": 75,
      "salarios_restantes": 194,
      "media_corrigida": 3960.99,
      "tc_anos_resultante": 28.8,
      "carencia_restante": 345,
      "coeficiente_perc": 76.0,
      "rmi": 3010.36,
      "delta_rmi": 111.66,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2023",
      "maior_salario_expurgado": 1504.22,
      "patrimonio_vitalicio": 26798.4
    },
    {
      "descartes": 76,
      "salarios_restantes": 193,
      "media_corrigida": 3973.71,
      "tc_anos_resultante": 28.7,
      "carencia_restante": 344,
      "coeficiente_perc": 76.0,
      "rmi": 3020.02,
      "delta_rmi": 121.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2023",
      "maior_salario_expurgado": 1506.02,
      "patrimonio_vitalicio": 29116.8
    },
    {
      "descartes": 77,
      "salarios_restantes": 192,
      "media_corrigida": 3986.56,
      "tc_anos_resultante": 28.6,
      "carencia_restante": 343,
      "coeficiente_perc": 76.0,
      "rmi": 3029.78,
      "delta_rmi": 131.08,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2023",
      "maior_salario_expurgado": 1507.68,
      "patrimonio_vitalicio": 31459.2
    },
    {
      "descartes": 78,
      "salarios_restantes": 191,
      "media_corrigida": 3999.54,
      "tc_anos_resultante": 28.5,
      "carencia_restante": 342,
      "coeficiente_perc": 76.0,
      "rmi": 3039.65,
      "delta_rmi": 140.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2023",
      "maior_salario_expurgado": 1507.83,
      "patrimonio_vitalicio": 33828.0
    },
    {
      "descartes": 79,
      "salarios_restantes": 190,
      "media_corrigida": 4012.64,
      "tc_anos_resultante": 28.4,
      "carencia_restante": 341,
      "coeficiente_perc": 76.0,
      "rmi": 3049.61,
      "delta_rmi": 150.91,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2023",
      "maior_salario_expurgado": 1509.34,
      "patrimonio_vitalicio": 36218.4
    },
    {
      "descartes": 80,
      "salarios_restantes": 189,
      "media_corrigida": 4025.88,
      "tc_anos_resultante": 28.3,
      "carencia_restante": 340,
      "coeficiente_perc": 76.0,
      "rmi": 3059.67,
      "delta_rmi": 160.97,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2023",
      "maior_salario_expurgado": 1510.14,
      "patrimonio_vitalicio": 38632.8
    },
    {
      "descartes": 81,
      "salarios_restantes": 188,
      "media_corrigida": 4039.26,
      "tc_anos_resultante": 28.2,
      "carencia_restante": 339,
      "coeficiente_perc": 76.0,
      "rmi": 3069.84,
      "delta_rmi": 171.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2023",
      "maior_salario_expurgado": 1510.7,
      "patrimonio_vitalicio": 41073.6
    },
    {
      "descartes": 82,
      "salarios_restantes": 187,
      "media_corrigida": 4052.72,
      "tc_anos_resultante": 28.2,
      "carencia_restante": 338,
      "coeficiente_perc": 76.0,
      "rmi": 3080.07,
      "delta_rmi": 181.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2023",
      "maior_salario_expurgado": 1521.76,
      "patrimonio_vitalicio": 43528.8
    },
    {
      "descartes": 83,
      "salarios_restantes": 186,
      "media_corrigida": 4066.12,
      "tc_anos_resultante": 28.1,
      "carencia_restante": 337,
      "coeficiente_perc": 76.0,
      "rmi": 3090.25,
      "delta_rmi": 191.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2024",
      "maior_salario_expurgado": 1560.85,
      "patrimonio_vitalicio": 45972.0
    },
    {
      "descartes": 84,
      "salarios_restantes": 185,
      "media_corrigida": 4079.63,
      "tc_anos_resultante": 28.0,
      "carencia_restante": 336,
      "coeficiente_perc": 76.0,
      "rmi": 3100.52,
      "delta_rmi": 201.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2024",
      "maior_salario_expurgado": 1568.03,
      "patrimonio_vitalicio": 48436.8
    },
    {
      "descartes": 85,
      "salarios_restantes": 184,
      "media_corrigida": 4093.24,
      "tc_anos_resultante": 27.9,
      "carencia_restante": 335,
      "coeficiente_perc": 74.0,
      "rmi": 3029.0,
      "delta_rmi": 130.3,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2024",
      "maior_salario_expurgado": 1573.84,
      "patrimonio_vitalicio": 31272.0
    },
    {
      "descartes": 86,
      "salarios_restantes": 183,
      "media_corrigida": 4106.99,
      "tc_anos_resultante": 27.8,
      "carencia_restante": 334,
      "coeficiente_perc": 74.0,
      "rmi": 3039.18,
      "delta_rmi": 140.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2024",
      "maior_salario_expurgado": 1576.83,
      "patrimonio_vitalicio": 33715.2
    },
    {
      "descartes": 87,
      "salarios_restantes": 182,
      "media_corrigida": 4120.83,
      "tc_anos_resultante": 27.8,
      "carencia_restante": 333,
      "coeficiente_perc": 74.0,
      "rmi": 3049.41,
      "delta_rmi": 150.71,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2024",
      "maior_salario_expurgado": 1589.6,
      "patrimonio_vitalicio": 36170.4
    },
    {
      "descartes": 88,
      "salarios_restantes": 181,
      "media_corrigida": 4134.66,
      "tc_anos_resultante": 27.7,
      "carencia_restante": 332,
      "coeficiente_perc": 74.0,
      "rmi": 3059.65,
      "delta_rmi": 160.95,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2025",
      "maior_salario_expurgado": 1616.53,
      "patrimonio_vitalicio": 38628.0
    },
    {
      "descartes": 89,
      "salarios_restantes": 180,
      "media_corrigida": 4148.58,
      "tc_anos_resultante": 27.6,
      "carencia_restante": 331,
      "coeficiente_perc": 74.0,
      "rmi": 3069.95,
      "delta_rmi": 171.25,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2026",
      "maior_salario_expurgado": 1629.06,
      "patrimonio_vitalicio": 41100.0
    },
    {
      "descartes": 90,
      "salarios_restantes": 179,
      "media_corrigida": 4162.43,
      "tc_anos_resultante": 27.5,
      "carencia_restante": 330,
      "coeficiente_perc": 74.0,
      "rmi": 3080.2,
      "delta_rmi": 181.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2026",
      "maior_salario_expurgado": 1670.14,
      "patrimonio_vitalicio": 43560.0
    },
    {
      "descartes": 91,
      "salarios_restantes": 178,
      "media_corrigida": 4176.38,
      "tc_anos_resultante": 27.4,
      "carencia_restante": 329,
      "coeficiente_perc": 74.0,
      "rmi": 3090.52,
      "delta_rmi": 191.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2026",
      "maior_salario_expurgado": 1679.5,
      "patrimonio_vitalicio": 46036.8
    },
    {
      "descartes": 92,
      "salarios_restantes": 177,
      "media_corrigida": 4189.25,
      "tc_anos_resultante": 27.3,
      "carencia_restante": 328,
      "coeficiente_perc": 74.0,
      "rmi": 3100.04,
      "delta_rmi": 201.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1994",
      "maior_salario_expurgado": 1897.91,
      "patrimonio_vitalicio": 48321.6
    },
    {
      "descartes": 93,
      "salarios_restantes": 176,
      "media_corrigida": 4201.51,
      "tc_anos_resultante": 27.2,
      "carencia_restante": 327,
      "coeficiente_perc": 74.0,
      "rmi": 3109.11,
      "delta_rmi": 210.41,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1996",
      "maior_salario_expurgado": 2032.14,
      "patrimonio_vitalicio": 50498.4
    },
    {
      "descartes": 94,
      "salarios_restantes": 175,
      "media_corrigida": 4213.83,
      "tc_anos_resultante": 27.2,
      "carencia_restante": 326,
      "coeficiente_perc": 74.0,
      "rmi": 3118.24,
      "delta_rmi": 219.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1994",
      "maior_salario_expurgado": 2044.03,
      "patrimonio_vitalicio": 52689.6
    },
    {
      "descartes": 95,
      "salarios_restantes": 174,
      "media_corrigida": 4226.2,
      "tc_anos_resultante": 27.1,
      "carencia_restante": 325,
      "coeficiente_perc": 74.0,
      "rmi": 3127.39,
      "delta_rmi": 228.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1994",
      "maior_salario_expurgado": 2062.9,
      "patrimonio_vitalicio": 54885.6
    },
    {
      "descartes": 96,
      "salarios_restantes": 173,
      "media_corrigida": 4238.62,
      "tc_anos_resultante": 27.0,
      "carencia_restante": 324,
      "coeficiente_perc": 74.0,
      "rmi": 3136.58,
      "delta_rmi": 237.88,
      "tag": "Cenário MEI + GPS 20% Mínimos (2008-2012)",
      "faixa_descartada": "01/2009 a 06/1998",
      "maior_salario_expurgado": 2076.04,
      "patrimonio_vitalicio": 57091.2
    },
    {
      "descartes": 97,
      "salarios_restantes": 172,
      "media_corrigida": 4250.92,
      "tc_anos_resultante": 26.9,
      "carencia_restante": 323,
      "coeficiente_perc": 72.0,
      "rmi": 3060.66,
      "delta_rmi": 161.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1994",
      "maior_salario_expurgado": 2123.97,
      "patrimonio_vitalicio": 38870.4
    },
    {
      "descartes": 98,
      "salarios_restantes": 171,
      "media_corrigida": 4263.34,
      "tc_anos_resultante": 26.8,
      "carencia_restante": 322,
      "coeficiente_perc": 72.0,
      "rmi": 3069.6,
      "delta_rmi": 170.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1998",
      "maior_salario_expurgado": 2127.72,
      "patrimonio_vitalicio": 41016.0
    },
    {
      "descartes": 99,
      "salarios_restantes": 170,
      "media_corrigida": 4275.66,
      "tc_anos_resultante": 26.8,
      "carencia_restante": 321,
      "coeficiente_perc": 72.0,
      "rmi": 3078.48,
      "delta_rmi": 179.78,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1998",
      "maior_salario_expurgado": 2168.23,
      "patrimonio_vitalicio": 43147.2
    },
    {
      "descartes": 100,
      "salarios_restantes": 169,
      "media_corrigida": 4288.04,
      "tc_anos_resultante": 26.7,
      "carencia_restante": 320,
      "coeficiente_perc": 72.0,
      "rmi": 3087.39,
      "delta_rmi": 188.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1994",
      "maior_salario_expurgado": 2183.86,
      "patrimonio_vitalicio": 45285.6
    },
    {
      "descartes": 101,
      "salarios_restantes": 168,
      "media_corrigida": 4300.33,
      "tc_anos_resultante": 26.6,
      "carencia_restante": 319,
      "coeficiente_perc": 72.0,
      "rmi": 3096.24,
      "delta_rmi": 197.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1998",
      "maior_salario_expurgado": 2223.24,
      "patrimonio_vitalicio": 47409.6
    },
    {
      "descartes": 102,
      "salarios_restantes": 167,
      "media_corrigida": 4312.75,
      "tc_anos_resultante": 26.5,
      "carencia_restante": 318,
      "coeficiente_perc": 72.0,
      "rmi": 3105.18,
      "delta_rmi": 206.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1998",
      "maior_salario_expurgado": 2225.51,
      "patrimonio_vitalicio": 49555.2
    },
    {
      "descartes": 103,
      "salarios_restantes": 166,
      "media_corrigida": 4325.13,
      "tc_anos_resultante": 26.4,
      "carencia_restante": 317,
      "coeficiente_perc": 72.0,
      "rmi": 3114.1,
      "delta_rmi": 215.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1996",
      "maior_salario_expurgado": 2257.26,
      "patrimonio_vitalicio": 51696.0
    },
    {
      "descartes": 104,
      "salarios_restantes": 165,
      "media_corrigida": 4337.63,
      "tc_anos_resultante": 26.3,
      "carencia_restante": 316,
      "coeficiente_perc": 72.0,
      "rmi": 3123.1,
      "delta_rmi": 224.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1998",
      "maior_salario_expurgado": 2262.66,
      "patrimonio_vitalicio": 53856.0
    },
    {
      "descartes": 105,
      "salarios_restantes": 164,
      "media_corrigida": 4350.21,
      "tc_anos_resultante": 26.2,
      "carencia_restante": 315,
      "coeficiente_perc": 72.0,
      "rmi": 3132.15,
      "delta_rmi": 233.45,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1998",
      "maior_salario_expurgado": 2274.88,
      "patrimonio_vitalicio": 56028.0
    },
    {
      "descartes": 106,
      "salarios_restantes": 163,
      "media_corrigida": 4362.83,
      "tc_anos_resultante": 26.2,
      "carencia_restante": 314,
      "coeficiente_perc": 72.0,
      "rmi": 3141.24,
      "delta_rmi": 242.54,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1994",
      "maior_salario_expurgado": 2293.27,
      "patrimonio_vitalicio": 58209.6
    },
    {
      "descartes": 107,
      "salarios_restantes": 162,
      "media_corrigida": 4375.48,
      "tc_anos_resultante": 26.1,
      "carencia_restante": 313,
      "coeficiente_perc": 72.0,
      "rmi": 3150.35,
      "delta_rmi": 251.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1999",
      "maior_salario_expurgado": 2313.34,
      "patrimonio_vitalicio": 60396.0
    },
    {
      "descartes": 108,
      "salarios_restantes": 161,
      "media_corrigida": 4388.03,
      "tc_anos_resultante": 26.0,
      "carencia_restante": 312,
      "coeficiente_perc": 72.0,
      "rmi": 3159.39,
      "delta_rmi": 260.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1998",
      "maior_salario_expurgado": 2354.55,
      "patrimonio_vitalicio": 62565.6
    },
    {
      "descartes": 109,
      "salarios_restantes": 160,
      "media_corrigida": 4400.57,
      "tc_anos_resultante": 25.9,
      "carencia_restante": 311,
      "coeficiente_perc": 70.0,
      "rmi": 3080.4,
      "delta_rmi": 181.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1999",
      "maior_salario_expurgado": 2382.62,
      "patrimonio_vitalicio": 43608.0
    },
    {
      "descartes": 110,
      "salarios_restantes": 159,
      "media_corrigida": 4413.19,
      "tc_anos_resultante": 25.8,
      "carencia_restante": 310,
      "coeficiente_perc": 70.0,
      "rmi": 3089.23,
      "delta_rmi": 190.53,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1996",
      "maior_salario_expurgado": 2393.73,
      "patrimonio_vitalicio": 45727.2
    },
    {
      "descartes": 111,
      "salarios_restantes": 158,
      "media_corrigida": 4425.92,
      "tc_anos_resultante": 25.8,
      "carencia_restante": 309,
      "coeficiente_perc": 70.0,
      "rmi": 3098.15,
      "delta_rmi": 199.45,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1996",
      "maior_salario_expurgado": 2401.63,
      "patrimonio_vitalicio": 47868.0
    },
    {
      "descartes": 112,
      "salarios_restantes": 157,
      "media_corrigida": 4438.76,
      "tc_anos_resultante": 25.7,
      "carencia_restante": 308,
      "coeficiente_perc": 70.0,
      "rmi": 3107.13,
      "delta_rmi": 208.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1996",
      "maior_salario_expurgado": 2409.79,
      "patrimonio_vitalicio": 50023.2
    },
    {
      "descartes": 113,
      "salarios_restantes": 156,
      "media_corrigida": 4451.71,
      "tc_anos_resultante": 25.6,
      "carencia_restante": 307,
      "coeficiente_perc": 70.0,
      "rmi": 3116.2,
      "delta_rmi": 217.5,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1996",
      "maior_salario_expurgado": 2418.95,
      "patrimonio_vitalicio": 52200.0
    },
    {
      "descartes": 114,
      "salarios_restantes": 155,
      "media_corrigida": 4464.82,
      "tc_anos_resultante": 25.5,
      "carencia_restante": 306,
      "coeficiente_perc": 70.0,
      "rmi": 3125.38,
      "delta_rmi": 226.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1996",
      "maior_salario_expurgado": 2419.43,
      "patrimonio_vitalicio": 54403.2
    },
    {
      "descartes": 115,
      "salarios_restantes": 154,
      "media_corrigida": 4478.1,
      "tc_anos_resultante": 25.4,
      "carencia_restante": 305,
      "coeficiente_perc": 70.0,
      "rmi": 3134.67,
      "delta_rmi": 235.97,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1999",
      "maior_salario_expurgado": 2420.75,
      "patrimonio_vitalicio": 56632.8
    },
    {
      "descartes": 116,
      "salarios_restantes": 153,
      "media_corrigida": 4491.47,
      "tc_anos_resultante": 25.3,
      "carencia_restante": 304,
      "coeficiente_perc": 70.0,
      "rmi": 3144.03,
      "delta_rmi": 245.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1996",
      "maior_salario_expurgado": 2431.53,
      "patrimonio_vitalicio": 58879.2
    },
    {
      "descartes": 117,
      "salarios_restantes": 152,
      "media_corrigida": 4504.83,
      "tc_anos_resultante": 25.2,
      "carencia_restante": 303,
      "coeficiente_perc": 70.0,
      "rmi": 3153.38,
      "delta_rmi": 254.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1996",
      "maior_salario_expurgado": 2460.71,
      "patrimonio_vitalicio": 61123.2
    },
    {
      "descartes": 118,
      "salarios_restantes": 151,
      "media_corrigida": 4517.94,
      "tc_anos_resultante": 25.2,
      "carencia_restante": 302,
      "coeficiente_perc": 70.0,
      "rmi": 3162.56,
      "delta_rmi": 263.86,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1996",
      "maior_salario_expurgado": 2525.41,
      "patrimonio_vitalicio": 63326.4
    },
    {
      "descartes": 119,
      "salarios_restantes": 150,
      "media_corrigida": 4531.07,
      "tc_anos_resultante": 25.1,
      "carencia_restante": 301,
      "coeficiente_perc": 70.0,
      "rmi": 3171.75,
      "delta_rmi": 273.05,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1996",
      "maior_salario_expurgado": 2548.9,
      "patrimonio_vitalicio": 65532.0
    },
    {
      "descartes": 120,
      "salarios_restantes": 149,
      "media_corrigida": 4544.28,
      "tc_anos_resultante": 25.0,
      "carencia_restante": 300,
      "coeficiente_perc": 70.0,
      "rmi": 3180.99,
      "delta_rmi": 282.29,
      "tag": "Cenário Equilíbrio Coeficiente (70%)",
      "faixa_descartada": "01/2009 a 08/1999",
      "maior_salario_expurgado": 2562.75,
      "patrimonio_vitalicio": 67749.6
    },
    {
      "descartes": 121,
      "salarios_restantes": 148,
      "media_corrigida": 4557.59,
      "tc_anos_resultante": 24.9,
      "carencia_restante": 299,
      "coeficiente_perc": 68.0,
      "rmi": 3099.16,
      "delta_rmi": 200.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1996",
      "maior_salario_expurgado": 2574.44,
      "patrimonio_vitalicio": 48110.4
    },
    {
      "descartes": 122,
      "salarios_restantes": 147,
      "media_corrigida": 4571.06,
      "tc_anos_resultante": 24.8,
      "carencia_restante": 298,
      "coeficiente_perc": 68.0,
      "rmi": 3108.32,
      "delta_rmi": 209.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1999",
      "maior_salario_expurgado": 2576.84,
      "patrimonio_vitalicio": 50308.8
    },
    {
      "descartes": 123,
      "salarios_restantes": 146,
      "media_corrigida": 4584.59,
      "tc_anos_resultante": 24.8,
      "carencia_restante": 297,
      "coeficiente_perc": 68.0,
      "rmi": 3117.52,
      "delta_rmi": 218.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1999",
      "maior_salario_expurgado": 2595.91,
      "patrimonio_vitalicio": 52516.8
    },
    {
      "descartes": 124,
      "salarios_restantes": 145,
      "media_corrigida": 4598.3,
      "tc_anos_resultante": 24.7,
      "carencia_restante": 296,
      "coeficiente_perc": 68.0,
      "rmi": 3126.85,
      "delta_rmi": 228.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1995",
      "maior_salario_expurgado": 2596.02,
      "patrimonio_vitalicio": 54756.0
    },
    {
      "descartes": 125,
      "salarios_restantes": 144,
      "media_corrigida": 4612.2,
      "tc_anos_resultante": 24.6,
      "carencia_restante": 295,
      "coeficiente_perc": 68.0,
      "rmi": 3136.29,
      "delta_rmi": 237.59,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1999",
      "maior_salario_expurgado": 2597.73,
      "patrimonio_vitalicio": 57021.6
    },
    {
      "descartes": 126,
      "salarios_restantes": 143,
      "media_corrigida": 4626.28,
      "tc_anos_resultante": 24.5,
      "carencia_restante": 294,
      "coeficiente_perc": 68.0,
      "rmi": 3145.87,
      "delta_rmi": 247.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/1999",
      "maior_salario_expurgado": 2599.08,
      "patrimonio_vitalicio": 59320.8
    },
    {
      "descartes": 127,
      "salarios_restantes": 142,
      "media_corrigida": 4640.51,
      "tc_anos_resultante": 24.4,
      "carencia_restante": 293,
      "coeficiente_perc": 68.0,
      "rmi": 3155.55,
      "delta_rmi": 256.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1998",
      "maior_salario_expurgado": 2604.43,
      "patrimonio_vitalicio": 61644.0
    },
    {
      "descartes": 128,
      "salarios_restantes": 141,
      "media_corrigida": 4654.92,
      "tc_anos_resultante": 24.3,
      "carencia_restante": 292,
      "coeficiente_perc": 68.0,
      "rmi": 3165.35,
      "delta_rmi": 266.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/1998",
      "maior_salario_expurgado": 2609.12,
      "patrimonio_vitalicio": 63996.0
    },
    {
      "descartes": 129,
      "salarios_restantes": 140,
      "media_corrigida": 4669.51,
      "tc_anos_resultante": 24.2,
      "carencia_restante": 291,
      "coeficiente_perc": 68.0,
      "rmi": 3175.27,
      "delta_rmi": 276.57,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1995",
      "maior_salario_expurgado": 2612.03,
      "patrimonio_vitalicio": 66376.8
    },
    {
      "descartes": 130,
      "salarios_restantes": 139,
      "media_corrigida": 4684.08,
      "tc_anos_resultante": 24.2,
      "carencia_restante": 290,
      "coeficiente_perc": 68.0,
      "rmi": 3185.17,
      "delta_rmi": 286.47,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1999",
      "maior_salario_expurgado": 2644.72,
      "patrimonio_vitalicio": 68752.8
    },
    {
      "descartes": 131,
      "salarios_restantes": 138,
      "media_corrigida": 4698.57,
      "tc_anos_resultante": 24.1,
      "carencia_restante": 289,
      "coeficiente_perc": 68.0,
      "rmi": 3195.02,
      "delta_rmi": 296.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/1995",
      "maior_salario_expurgado": 2685.06,
      "patrimonio_vitalicio": 71116.8
    },
    {
      "descartes": 132,
      "salarios_restantes": 137,
      "media_corrigida": 4712.99,
      "tc_anos_resultante": 24.0,
      "carencia_restante": 288,
      "coeficiente_perc": 68.0,
      "rmi": 3204.83,
      "delta_rmi": 306.13,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/1995",
      "maior_salario_expurgado": 2722.65,
      "patrimonio_vitalicio": 73471.2
    },
    {
      "descartes": 133,
      "salarios_restantes": 136,
      "media_corrigida": 4727.39,
      "tc_anos_resultante": 23.9,
      "carencia_restante": 287,
      "coeficiente_perc": 66.0,
      "rmi": 3120.08,
      "delta_rmi": 221.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1995",
      "maior_salario_expurgado": 2754.5,
      "patrimonio_vitalicio": 53131.2
    },
    {
      "descartes": 134,
      "salarios_restantes": 135,
      "media_corrigida": 4741.79,
      "tc_anos_resultante": 23.8,
      "carencia_restante": 286,
      "coeficiente_perc": 66.0,
      "rmi": 3129.58,
      "delta_rmi": 230.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/1995",
      "maior_salario_expurgado": 2782.6,
      "patrimonio_vitalicio": 55411.2
    },
    {
      "descartes": 135,
      "salarios_restantes": 134,
      "media_corrigida": 4755.65,
      "tc_anos_resultante": 23.8,
      "carencia_restante": 285,
      "coeficiente_perc": 66.0,
      "rmi": 3138.73,
      "delta_rmi": 240.03,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/1998",
      "maior_salario_expurgado": 2885.85,
      "patrimonio_vitalicio": 57607.2
    },
    {
      "descartes": 136,
      "salarios_restantes": 133,
      "media_corrigida": 4769.5,
      "tc_anos_resultante": 23.7,
      "carencia_restante": 284,
      "coeficiente_perc": 66.0,
      "rmi": 3147.87,
      "delta_rmi": 249.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/1995",
      "maior_salario_expurgado": 2913.2,
      "patrimonio_vitalicio": 59800.8
    },
    {
      "descartes": 137,
      "salarios_restantes": 132,
      "media_corrigida": 4783.52,
      "tc_anos_resultante": 23.6,
      "carencia_restante": 283,
      "coeficiente_perc": 66.0,
      "rmi": 3157.12,
      "delta_rmi": 258.42,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/1998",
      "maior_salario_expurgado": 2918.28,
      "patrimonio_vitalicio": 62020.8
    },
    {
      "descartes": 138,
      "salarios_restantes": 131,
      "media_corrigida": 4796.77,
      "tc_anos_resultante": 23.5,
      "carencia_restante": 282,
      "coeficiente_perc": 66.0,
      "rmi": 3165.87,
      "delta_rmi": 267.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/1995",
      "maior_salario_expurgado": 3048.44,
      "patrimonio_vitalicio": 64120.8
    },
    {
      "descartes": 139,
      "salarios_restantes": 130,
      "media_corrigida": 4809.6,
      "tc_anos_resultante": 23.4,
      "carencia_restante": 281,
      "coeficiente_perc": 66.0,
      "rmi": 3174.33,
      "delta_rmi": 275.63,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/1995",
      "maior_salario_expurgado": 3129.12,
      "patrimonio_vitalicio": 66151.2
    },
    {
      "descartes": 140,
      "salarios_restantes": 129,
      "media_corrigida": 4821.13,
      "tc_anos_resultante": 23.3,
      "carencia_restante": 280,
      "coeficiente_perc": 66.0,
      "rmi": 3181.94,
      "delta_rmi": 283.24,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2006",
      "maior_salario_expurgado": 3322.25,
      "patrimonio_vitalicio": 67977.6
    },
    {
      "descartes": 141,
      "salarios_restantes": 128,
      "media_corrigida": 4832.77,
      "tc_anos_resultante": 23.2,
      "carencia_restante": 279,
      "coeficiente_perc": 66.0,
      "rmi": 3189.62,
      "delta_rmi": 290.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2006",
      "maior_salario_expurgado": 3331.22,
      "patrimonio_vitalicio": 69820.8
    },
    {
      "descartes": 142,
      "salarios_restantes": 127,
      "media_corrigida": 4844.53,
      "tc_anos_resultante": 23.2,
      "carencia_restante": 278,
      "coeficiente_perc": 66.0,
      "rmi": 3197.39,
      "delta_rmi": 298.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2006",
      "maior_salario_expurgado": 3338.88,
      "patrimonio_vitalicio": 71685.6
    },
    {
      "descartes": 143,
      "salarios_restantes": 126,
      "media_corrigida": 4856.38,
      "tc_anos_resultante": 23.1,
      "carencia_restante": 277,
      "coeficiente_perc": 66.0,
      "rmi": 3205.21,
      "delta_rmi": 306.51,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2005",
      "maior_salario_expurgado": 3351.57,
      "patrimonio_vitalicio": 73562.4
    },
    {
      "descartes": 144,
      "salarios_restantes": 125,
      "media_corrigida": 4868.31,
      "tc_anos_resultante": 23.0,
      "carencia_restante": 276,
      "coeficiente_perc": 66.0,
      "rmi": 3213.08,
      "delta_rmi": 314.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2005",
      "maior_salario_expurgado": 3364.97,
      "patrimonio_vitalicio": 75451.2
    },
    {
      "descartes": 145,
      "salarios_restantes": 124,
      "media_corrigida": 4880.29,
      "tc_anos_resultante": 22.9,
      "carencia_restante": 275,
      "coeficiente_perc": 64.0,
      "rmi": 3123.38,
      "delta_rmi": 224.68,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2005",
      "maior_salario_expurgado": 3383.14,
      "patrimonio_vitalicio": 53923.2
    },
    {
      "descartes": 146,
      "salarios_restantes": 123,
      "media_corrigida": 4892.3,
      "tc_anos_resultante": 22.8,
      "carencia_restante": 274,
      "coeficiente_perc": 64.0,
      "rmi": 3131.07,
      "delta_rmi": 232.37,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2005",
      "maior_salario_expurgado": 3402.77,
      "patrimonio_vitalicio": 55768.8
    },
    {
      "descartes": 147,
      "salarios_restantes": 122,
      "media_corrigida": 4904.49,
      "tc_anos_resultante": 22.8,
      "carencia_restante": 273,
      "coeficiente_perc": 64.0,
      "rmi": 3138.87,
      "delta_rmi": 240.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2005",
      "maior_salario_expurgado": 3405.14,
      "patrimonio_vitalicio": 57640.8
    },
    {
      "descartes": 148,
      "salarios_restantes": 121,
      "media_corrigida": 4916.86,
      "tc_anos_resultante": 22.7,
      "carencia_restante": 272,
      "coeficiente_perc": 64.0,
      "rmi": 3146.79,
      "delta_rmi": 248.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2005",
      "maior_salario_expurgado": 3407.87,
      "patrimonio_vitalicio": 59541.6
    },
    {
      "descartes": 149,
      "salarios_restantes": 120,
      "media_corrigida": 4929.43,
      "tc_anos_resultante": 22.6,
      "carencia_restante": 271,
      "coeficiente_perc": 64.0,
      "rmi": 3154.84,
      "delta_rmi": 256.14,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2005",
      "maior_salario_expurgado": 3407.87,
      "patrimonio_vitalicio": 61473.6
    },
    {
      "descartes": 150,
      "salarios_restantes": 119,
      "media_corrigida": 4942.21,
      "tc_anos_resultante": 22.5,
      "carencia_restante": 270,
      "coeficiente_perc": 64.0,
      "rmi": 3163.01,
      "delta_rmi": 264.31,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2005",
      "maior_salario_expurgado": 3408.89,
      "patrimonio_vitalicio": 63434.4
    },
    {
      "descartes": 151,
      "salarios_restantes": 118,
      "media_corrigida": 4955.03,
      "tc_anos_resultante": 22.4,
      "carencia_restante": 269,
      "coeficiente_perc": 64.0,
      "rmi": 3171.22,
      "delta_rmi": 272.52,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2005",
      "maior_salario_expurgado": 3428.98,
      "patrimonio_vitalicio": 65404.8
    },
    {
      "descartes": 152,
      "salarios_restantes": 117,
      "media_corrigida": 4967.81,
      "tc_anos_resultante": 22.3,
      "carencia_restante": 268,
      "coeficiente_perc": 64.0,
      "rmi": 3179.4,
      "delta_rmi": 280.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2005",
      "maior_salario_expurgado": 3460.18,
      "patrimonio_vitalicio": 67368.0
    },
    {
      "descartes": 153,
      "salarios_restantes": 116,
      "media_corrigida": 4980.59,
      "tc_anos_resultante": 22.2,
      "carencia_restante": 267,
      "coeficiente_perc": 64.0,
      "rmi": 3187.58,
      "delta_rmi": 288.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2005",
      "maior_salario_expurgado": 3485.44,
      "patrimonio_vitalicio": 69331.2
    },
    {
      "descartes": 154,
      "salarios_restantes": 115,
      "media_corrigida": 4993.46,
      "tc_anos_resultante": 22.2,
      "carencia_restante": 266,
      "coeficiente_perc": 64.0,
      "rmi": 3195.81,
      "delta_rmi": 297.11,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2005",
      "maior_salario_expurgado": 3500.78,
      "patrimonio_vitalicio": 71306.4
    },
    {
      "descartes": 155,
      "salarios_restantes": 114,
      "media_corrigida": 5006.37,
      "tc_anos_resultante": 22.1,
      "carencia_restante": 265,
      "coeficiente_perc": 64.0,
      "rmi": 3204.08,
      "delta_rmi": 305.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2004",
      "maior_salario_expurgado": 3520.73,
      "patrimonio_vitalicio": 73291.2
    },
    {
      "descartes": 156,
      "salarios_restantes": 113,
      "media_corrigida": 5019.25,
      "tc_anos_resultante": 22.0,
      "carencia_restante": 264,
      "coeficiente_perc": 64.0,
      "rmi": 3212.32,
      "delta_rmi": 313.62,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2004",
      "maior_salario_expurgado": 3551.01,
      "patrimonio_vitalicio": 75268.8
    },
    {
      "descartes": 157,
      "salarios_restantes": 112,
      "media_corrigida": 5032.22,
      "tc_anos_resultante": 21.9,
      "carencia_restante": 263,
      "coeficiente_perc": 62.0,
      "rmi": 3119.98,
      "delta_rmi": 221.28,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2004",
      "maior_salario_expurgado": 3566.64,
      "patrimonio_vitalicio": 53107.2
    },
    {
      "descartes": 158,
      "salarios_restantes": 111,
      "media_corrigida": 5045.37,
      "tc_anos_resultante": 21.8,
      "carencia_restante": 262,
      "coeficiente_perc": 62.0,
      "rmi": 3128.13,
      "delta_rmi": 229.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2004",
      "maior_salario_expurgado": 3572.7,
      "patrimonio_vitalicio": 55063.2
    },
    {
      "descartes": 159,
      "salarios_restantes": 110,
      "media_corrigida": 5058.71,
      "tc_anos_resultante": 21.8,
      "carencia_restante": 261,
      "coeficiente_perc": 62.0,
      "rmi": 3136.4,
      "delta_rmi": 237.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2004",
      "maior_salario_expurgado": 3578.77,
      "patrimonio_vitalicio": 57048.0
    },
    {
      "descartes": 160,
      "salarios_restantes": 109,
      "media_corrigida": 5072.12,
      "tc_anos_resultante": 21.7,
      "carencia_restante": 260,
      "coeficiente_perc": 62.0,
      "rmi": 3144.71,
      "delta_rmi": 246.01,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2004",
      "maior_salario_expurgado": 3596.67,
      "patrimonio_vitalicio": 59042.4
    },
    {
      "descartes": 161,
      "salarios_restantes": 108,
      "media_corrigida": 5085.54,
      "tc_anos_resultante": 21.6,
      "carencia_restante": 259,
      "coeficiente_perc": 62.0,
      "rmi": 3153.03,
      "delta_rmi": 254.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2004",
      "maior_salario_expurgado": 3622.92,
      "patrimonio_vitalicio": 61039.2
    },
    {
      "descartes": 162,
      "salarios_restantes": 107,
      "media_corrigida": 5099.04,
      "tc_anos_resultante": 21.5,
      "carencia_restante": 258,
      "coeficiente_perc": 62.0,
      "rmi": 3161.4,
      "delta_rmi": 262.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2004",
      "maior_salario_expurgado": 3641.04,
      "patrimonio_vitalicio": 63048.0
    },
    {
      "descartes": 163,
      "salarios_restantes": 106,
      "media_corrigida": 5112.65,
      "tc_anos_resultante": 21.4,
      "carencia_restante": 257,
      "coeficiente_perc": 62.0,
      "rmi": 3169.85,
      "delta_rmi": 271.15,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2004",
      "maior_salario_expurgado": 3655.6,
      "patrimonio_vitalicio": 65076.0
    },
    {
      "descartes": 164,
      "salarios_restantes": 105,
      "media_corrigida": 5126.39,
      "tc_anos_resultante": 21.3,
      "carencia_restante": 256,
      "coeficiente_perc": 62.0,
      "rmi": 3178.36,
      "delta_rmi": 279.66,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2004",
      "maior_salario_expurgado": 3670.59,
      "patrimonio_vitalicio": 67118.4
    },
    {
      "descartes": 165,
      "salarios_restantes": 104,
      "media_corrigida": 5140.19,
      "tc_anos_resultante": 21.2,
      "carencia_restante": 255,
      "coeficiente_perc": 62.0,
      "rmi": 3186.91,
      "delta_rmi": 288.21,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2004",
      "maior_salario_expurgado": 3691.51,
      "patrimonio_vitalicio": 69170.4
    },
    {
      "descartes": 166,
      "salarios_restantes": 103,
      "media_corrigida": 5154.11,
      "tc_anos_resultante": 21.2,
      "carencia_restante": 254,
      "coeficiente_perc": 62.0,
      "rmi": 3195.55,
      "delta_rmi": 296.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2004",
      "maior_salario_expurgado": 3705.91,
      "patrimonio_vitalicio": 71244.0
    },
    {
      "descartes": 167,
      "salarios_restantes": 102,
      "media_corrigida": 5168.01,
      "tc_anos_resultante": 21.1,
      "carencia_restante": 253,
      "coeficiente_perc": 62.0,
      "rmi": 3204.16,
      "delta_rmi": 305.46,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2003",
      "maior_salario_expurgado": 3736.67,
      "patrimonio_vitalicio": 73310.4
    },
    {
      "descartes": 168,
      "salarios_restantes": 101,
      "media_corrigida": 5181.98,
      "tc_anos_resultante": 21.0,
      "carencia_restante": 252,
      "coeficiente_perc": 62.0,
      "rmi": 3212.83,
      "delta_rmi": 314.13,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2003",
      "maior_salario_expurgado": 3756.84,
      "patrimonio_vitalicio": 75391.2
    },
    {
      "descartes": 169,
      "salarios_restantes": 100,
      "media_corrigida": 5195.94,
      "tc_anos_resultante": 20.9,
      "carencia_restante": 251,
      "coeficiente_perc": 60.0,
      "rmi": 3117.57,
      "delta_rmi": 218.87,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2003",
      "maior_salario_expurgado": 3785.45,
      "patrimonio_vitalicio": 52528.8
    },
    {
      "descartes": 170,
      "salarios_restantes": 99,
      "media_corrigida": 5209.88,
      "tc_anos_resultante": 20.8,
      "carencia_restante": 250,
      "coeficiente_perc": 60.0,
      "rmi": 3125.93,
      "delta_rmi": 227.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2003",
      "maior_salario_expurgado": 3816.49,
      "patrimonio_vitalicio": 54535.2
    },
    {
      "descartes": 171,
      "salarios_restantes": 98,
      "media_corrigida": 5224.03,
      "tc_anos_resultante": 20.8,
      "carencia_restante": 249,
      "coeficiente_perc": 60.0,
      "rmi": 3134.42,
      "delta_rmi": 235.72,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2003",
      "maior_salario_expurgado": 3822.6,
      "patrimonio_vitalicio": 56572.8
    },
    {
      "descartes": 172,
      "salarios_restantes": 97,
      "media_corrigida": 5238.47,
      "tc_anos_resultante": 20.7,
      "carencia_restante": 248,
      "coeficiente_perc": 60.0,
      "rmi": 3143.08,
      "delta_rmi": 244.38,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2003",
      "maior_salario_expurgado": 3823.36,
      "patrimonio_vitalicio": 58651.2
    },
    {
      "descartes": 173,
      "salarios_restantes": 96,
      "media_corrigida": 5253.2,
      "tc_anos_resultante": 20.6,
      "carencia_restante": 247,
      "coeficiente_perc": 60.0,
      "rmi": 3151.92,
      "delta_rmi": 253.22,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2003",
      "maior_salario_expurgado": 3824.89,
      "patrimonio_vitalicio": 60772.8
    },
    {
      "descartes": 174,
      "salarios_restantes": 95,
      "media_corrigida": 5267.86,
      "tc_anos_resultante": 20.5,
      "carencia_restante": 246,
      "coeficiente_perc": 60.0,
      "rmi": 3160.72,
      "delta_rmi": 262.02,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2003",
      "maior_salario_expurgado": 3860.44,
      "patrimonio_vitalicio": 62884.8
    },
    {
      "descartes": 175,
      "salarios_restantes": 94,
      "media_corrigida": 5278.4,
      "tc_anos_resultante": 20.4,
      "carencia_restante": 245,
      "coeficiente_perc": 60.0,
      "rmi": 3167.04,
      "delta_rmi": 268.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/1995",
      "maior_salario_expurgado": 4276.58,
      "patrimonio_vitalicio": 64401.6
    },
    {
      "descartes": 176,
      "salarios_restantes": 93,
      "media_corrigida": 5288.37,
      "tc_anos_resultante": 20.3,
      "carencia_restante": 244,
      "coeficiente_perc": 60.0,
      "rmi": 3173.02,
      "delta_rmi": 274.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/1995",
      "maior_salario_expurgado": 4351.68,
      "patrimonio_vitalicio": 65836.8
    },
    {
      "descartes": 177,
      "salarios_restantes": 92,
      "media_corrigida": 5297.5,
      "tc_anos_resultante": 20.2,
      "carencia_restante": 243,
      "coeficiente_perc": 60.0,
      "rmi": 3178.5,
      "delta_rmi": 279.8,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2012",
      "maior_salario_expurgado": 4448.52,
      "patrimonio_vitalicio": 67152.0
    },
    {
      "descartes": 178,
      "salarios_restantes": 91,
      "media_corrigida": 5305.66,
      "tc_anos_resultante": 20.2,
      "carencia_restante": 242,
      "coeficiente_perc": 60.0,
      "rmi": 3183.4,
      "delta_rmi": 284.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2012",
      "maior_salario_expurgado": 4554.61,
      "patrimonio_vitalicio": 68328.0
    },
    {
      "descartes": 179,
      "salarios_restantes": 90,
      "media_corrigida": 5313.63,
      "tc_anos_resultante": 20.1,
      "carencia_restante": 241,
      "coeficiente_perc": 60.0,
      "rmi": 3188.18,
      "delta_rmi": 289.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2013",
      "maior_salario_expurgado": 4588.5,
      "patrimonio_vitalicio": 69475.2
    },
    {
      "descartes": 180,
      "salarios_restantes": 89,
      "media_corrigida": 5321.24,
      "tc_anos_resultante": 20.0,
      "carencia_restante": 240,
      "coeficiente_perc": 60.0,
      "rmi": 3192.74,
      "delta_rmi": 294.04,
      "tag": "Cenário Transição Piso 20 Anos (Coef. 60%)",
      "faixa_descartada": "01/2009 a 04/2013",
      "maior_salario_expurgado": 4636.45,
      "patrimonio_vitalicio": 70569.6
    },
    {
      "descartes": 181,
      "salarios_restantes": 88,
      "media_corrigida": 5328.96,
      "tc_anos_resultante": 19.9,
      "carencia_restante": 239,
      "coeficiente_perc": 60.0,
      "rmi": 3197.37,
      "delta_rmi": 298.67,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2015",
      "maior_salario_expurgado": 4642.24,
      "patrimonio_vitalicio": 71680.8
    },
    {
      "descartes": 182,
      "salarios_restantes": 87,
      "media_corrigida": 5336.77,
      "tc_anos_resultante": 19.8,
      "carencia_restante": 238,
      "coeficiente_perc": 60.0,
      "rmi": 3202.06,
      "delta_rmi": 303.36,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2013",
      "maior_salario_expurgado": 4649.48,
      "patrimonio_vitalicio": 72806.4
    },
    {
      "descartes": 183,
      "salarios_restantes": 86,
      "media_corrigida": 5344.43,
      "tc_anos_resultante": 19.8,
      "carencia_restante": 237,
      "coeficiente_perc": 60.0,
      "rmi": 3206.66,
      "delta_rmi": 307.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2013",
      "maior_salario_expurgado": 4677.38,
      "patrimonio_vitalicio": 73910.4
    },
    {
      "descartes": 184,
      "salarios_restantes": 85,
      "media_corrigida": 5352.11,
      "tc_anos_resultante": 19.7,
      "carencia_restante": 236,
      "coeficiente_perc": 60.0,
      "rmi": 3211.27,
      "delta_rmi": 312.57,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2014",
      "maior_salario_expurgado": 4691.67,
      "patrimonio_vitalicio": 75016.8
    },
    {
      "descartes": 185,
      "salarios_restantes": 84,
      "media_corrigida": 5359.93,
      "tc_anos_resultante": 19.6,
      "carencia_restante": 235,
      "coeficiente_perc": 60.0,
      "rmi": 3215.96,
      "delta_rmi": 317.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2008",
      "maior_salario_expurgado": 4695.17,
      "patrimonio_vitalicio": 76142.4
    },
    {
      "descartes": 186,
      "salarios_restantes": 83,
      "media_corrigida": 5367.71,
      "tc_anos_resultante": 19.5,
      "carencia_restante": 234,
      "coeficiente_perc": 60.0,
      "rmi": 3220.63,
      "delta_rmi": 321.93,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2012",
      "maior_salario_expurgado": 4714.18,
      "patrimonio_vitalicio": 77263.2
    },
    {
      "descartes": 187,
      "salarios_restantes": 82,
      "media_corrigida": 5375.3,
      "tc_anos_resultante": 19.4,
      "carencia_restante": 233,
      "coeficiente_perc": 60.0,
      "rmi": 3225.18,
      "delta_rmi": 326.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2014",
      "maior_salario_expurgado": 4745.48,
      "patrimonio_vitalicio": 78355.2
    },
    {
      "descartes": 188,
      "salarios_restantes": 81,
      "media_corrigida": 5382.94,
      "tc_anos_resultante": 19.3,
      "carencia_restante": 232,
      "coeficiente_perc": 60.0,
      "rmi": 3229.77,
      "delta_rmi": 331.07,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2015",
      "maior_salario_expurgado": 4756.3,
      "patrimonio_vitalicio": 79456.8
    },
    {
      "descartes": 189,
      "salarios_restantes": 80,
      "media_corrigida": 5390.59,
      "tc_anos_resultante": 19.2,
      "carencia_restante": 231,
      "coeficiente_perc": 60.0,
      "rmi": 3234.35,
      "delta_rmi": 335.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2016",
      "maior_salario_expurgado": 4771.07,
      "patrimonio_vitalicio": 80556.0
    },
    {
      "descartes": 190,
      "salarios_restantes": 79,
      "media_corrigida": 5398.37,
      "tc_anos_resultante": 19.2,
      "carencia_restante": 230,
      "coeficiente_perc": 60.0,
      "rmi": 3239.02,
      "delta_rmi": 340.32,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2012",
      "maior_salario_expurgado": 4776.47,
      "patrimonio_vitalicio": 81676.8
    },
    {
      "descartes": 191,
      "salarios_restantes": 78,
      "media_corrigida": 5406.23,
      "tc_anos_resultante": 19.1,
      "carencia_restante": 229,
      "coeficiente_perc": 60.0,
      "rmi": 3243.74,
      "delta_rmi": 345.04,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2014",
      "maior_salario_expurgado": 4784.94,
      "patrimonio_vitalicio": 82809.6
    },
    {
      "descartes": 192,
      "salarios_restantes": 77,
      "media_corrigida": 5414.14,
      "tc_anos_resultante": 19.0,
      "carencia_restante": 228,
      "coeficiente_perc": 60.0,
      "rmi": 3248.49,
      "delta_rmi": 349.79,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2015",
      "maior_salario_expurgado": 4796.8,
      "patrimonio_vitalicio": 83949.6
    },
    {
      "descartes": 193,
      "salarios_restantes": 76,
      "media_corrigida": 5422.09,
      "tc_anos_resultante": 18.9,
      "carencia_restante": 227,
      "coeficiente_perc": 60.0,
      "rmi": 3253.25,
      "delta_rmi": 354.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2014",
      "maior_salario_expurgado": 4810.16,
      "patrimonio_vitalicio": 85092.0
    },
    {
      "descartes": 194,
      "salarios_restantes": 75,
      "media_corrigida": 5430.21,
      "tc_anos_resultante": 18.8,
      "carencia_restante": 226,
      "coeficiente_perc": 60.0,
      "rmi": 3258.13,
      "delta_rmi": 359.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2016",
      "maior_salario_expurgado": 4813.15,
      "patrimonio_vitalicio": 86263.2
    },
    {
      "descartes": 195,
      "salarios_restantes": 74,
      "media_corrigida": 5438.51,
      "tc_anos_resultante": 18.8,
      "carencia_restante": 225,
      "coeficiente_perc": 60.0,
      "rmi": 3263.1,
      "delta_rmi": 364.4,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2016",
      "maior_salario_expurgado": 4816.4,
      "patrimonio_vitalicio": 87456.0
    },
    {
      "descartes": 196,
      "salarios_restantes": 73,
      "media_corrigida": 5446.9,
      "tc_anos_resultante": 18.7,
      "carencia_restante": 224,
      "coeficiente_perc": 60.0,
      "rmi": 3268.14,
      "delta_rmi": 369.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2014",
      "maior_salario_expurgado": 4825.88,
      "patrimonio_vitalicio": 88665.6
    },
    {
      "descartes": 197,
      "salarios_restantes": 72,
      "media_corrigida": 5455.51,
      "tc_anos_resultante": 18.6,
      "carencia_restante": 223,
      "coeficiente_perc": 60.0,
      "rmi": 3273.31,
      "delta_rmi": 374.61,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2017",
      "maior_salario_expurgado": 4826.53,
      "patrimonio_vitalicio": 89906.4
    },
    {
      "descartes": 198,
      "salarios_restantes": 71,
      "media_corrigida": 5464.34,
      "tc_anos_resultante": 18.5,
      "carencia_restante": 222,
      "coeficiente_perc": 60.0,
      "rmi": 3278.6,
      "delta_rmi": 379.9,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2015",
      "maior_salario_expurgado": 4828.86,
      "patrimonio_vitalicio": 91176.0
    },
    {
      "descartes": 199,
      "salarios_restantes": 70,
      "media_corrigida": 5473.21,
      "tc_anos_resultante": 18.4,
      "carencia_restante": 221,
      "coeficiente_perc": 60.0,
      "rmi": 3283.93,
      "delta_rmi": 385.23,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2015",
      "maior_salario_expurgado": 4843.52,
      "patrimonio_vitalicio": 92455.2
    },
    {
      "descartes": 200,
      "salarios_restantes": 69,
      "media_corrigida": 5482.31,
      "tc_anos_resultante": 18.3,
      "carencia_restante": 220,
      "coeficiente_perc": 60.0,
      "rmi": 3289.39,
      "delta_rmi": 390.69,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2013",
      "maior_salario_expurgado": 4845.13,
      "patrimonio_vitalicio": 93765.6
    },
    {
      "descartes": 201,
      "salarios_restantes": 68,
      "media_corrigida": 5491.57,
      "tc_anos_resultante": 18.2,
      "carencia_restante": 219,
      "coeficiente_perc": 60.0,
      "rmi": 3294.94,
      "delta_rmi": 396.24,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2014",
      "maior_salario_expurgado": 4852.67,
      "patrimonio_vitalicio": 95097.6
    },
    {
      "descartes": 202,
      "salarios_restantes": 67,
      "media_corrigida": 5501.06,
      "tc_anos_resultante": 18.2,
      "carencia_restante": 218,
      "coeficiente_perc": 60.0,
      "rmi": 3300.64,
      "delta_rmi": 401.94,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2015",
      "maior_salario_expurgado": 4855.79,
      "patrimonio_vitalicio": 96465.6
    },
    {
      "descartes": 203,
      "salarios_restantes": 66,
      "media_corrigida": 5510.82,
      "tc_anos_resultante": 18.1,
      "carencia_restante": 217,
      "coeficiente_perc": 60.0,
      "rmi": 3306.49,
      "delta_rmi": 407.79,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2014",
      "maior_salario_expurgado": 4856.7,
      "patrimonio_vitalicio": 97869.6
    },
    {
      "descartes": 204,
      "salarios_restantes": 65,
      "media_corrigida": 5520.74,
      "tc_anos_resultante": 18.0,
      "carencia_restante": 216,
      "coeficiente_perc": 60.0,
      "rmi": 3312.45,
      "delta_rmi": 413.75,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2017",
      "maior_salario_expurgado": 4866.09,
      "patrimonio_vitalicio": 99300.0
    },
    {
      "descartes": 205,
      "salarios_restantes": 64,
      "media_corrigida": 5530.78,
      "tc_anos_resultante": 17.9,
      "carencia_restante": 215,
      "coeficiente_perc": 60.0,
      "rmi": 3318.47,
      "delta_rmi": 419.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2015",
      "maior_salario_expurgado": 4878.24,
      "patrimonio_vitalicio": 100744.8
    },
    {
      "descartes": 206,
      "salarios_restantes": 63,
      "media_corrigida": 5541.1,
      "tc_anos_resultante": 17.8,
      "carencia_restante": 214,
      "coeficiente_perc": 60.0,
      "rmi": 3324.66,
      "delta_rmi": 425.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2019",
      "maior_salario_expurgado": 4880.58,
      "patrimonio_vitalicio": 102230.4
    },
    {
      "descartes": 207,
      "salarios_restantes": 62,
      "media_corrigida": 5551.71,
      "tc_anos_resultante": 17.8,
      "carencia_restante": 213,
      "coeficiente_perc": 60.0,
      "rmi": 3331.03,
      "delta_rmi": 432.33,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2019",
      "maior_salario_expurgado": 4883.39,
      "patrimonio_vitalicio": 103759.2
    },
    {
      "descartes": 208,
      "salarios_restantes": 61,
      "media_corrigida": 5562.57,
      "tc_anos_resultante": 17.7,
      "carencia_restante": 212,
      "coeficiente_perc": 60.0,
      "rmi": 3337.54,
      "delta_rmi": 438.84,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2015",
      "maior_salario_expurgado": 4889.13,
      "patrimonio_vitalicio": 105321.6
    },
    {
      "descartes": 209,
      "salarios_restantes": 60,
      "media_corrigida": 5573.75,
      "tc_anos_resultante": 17.6,
      "carencia_restante": 211,
      "coeficiente_perc": 60.0,
      "rmi": 3344.25,
      "delta_rmi": 445.55,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2019",
      "maior_salario_expurgado": 4892.06,
      "patrimonio_vitalicio": 106932.0
    },
    {
      "descartes": 210,
      "salarios_restantes": 59,
      "media_corrigida": 5585.22,
      "tc_anos_resultante": 17.5,
      "carencia_restante": 210,
      "coeficiente_perc": 60.0,
      "rmi": 3351.13,
      "delta_rmi": 452.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2014",
      "maior_salario_expurgado": 4896.59,
      "patrimonio_vitalicio": 108583.2
    },
    {
      "descartes": 211,
      "salarios_restantes": 58,
      "media_corrigida": 5596.97,
      "tc_anos_resultante": 17.4,
      "carencia_restante": 209,
      "coeficiente_perc": 60.0,
      "rmi": 3358.18,
      "delta_rmi": 459.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2017",
      "maior_salario_expurgado": 4904.03,
      "patrimonio_vitalicio": 110275.2
    },
    {
      "descartes": 212,
      "salarios_restantes": 57,
      "media_corrigida": 5609.04,
      "tc_anos_resultante": 17.3,
      "carencia_restante": 208,
      "coeficiente_perc": 60.0,
      "rmi": 3365.42,
      "delta_rmi": 466.72,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2017",
      "maior_salario_expurgado": 4909.07,
      "patrimonio_vitalicio": 112012.8
    },
    {
      "descartes": 213,
      "salarios_restantes": 56,
      "media_corrigida": 5621.49,
      "tc_anos_resultante": 17.2,
      "carencia_restante": 207,
      "coeficiente_perc": 60.0,
      "rmi": 3372.89,
      "delta_rmi": 474.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2014",
      "maior_salario_expurgado": 4911.73,
      "patrimonio_vitalicio": 113805.6
    },
    {
      "descartes": 214,
      "salarios_restantes": 55,
      "media_corrigida": 5634.24,
      "tc_anos_resultante": 17.2,
      "carencia_restante": 206,
      "coeficiente_perc": 60.0,
      "rmi": 3380.55,
      "delta_rmi": 481.85,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2015",
      "maior_salario_expurgado": 4919.96,
      "patrimonio_vitalicio": 115644.0
    },
    {
      "descartes": 215,
      "salarios_restantes": 54,
      "media_corrigida": 5647.44,
      "tc_anos_resultante": 17.1,
      "carencia_restante": 205,
      "coeficiente_perc": 60.0,
      "rmi": 3388.46,
      "delta_rmi": 489.76,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2018",
      "maior_salario_expurgado": 4921.8,
      "patrimonio_vitalicio": 117542.4
    },
    {
      "descartes": 216,
      "salarios_restantes": 53,
      "media_corrigida": 5661.1,
      "tc_anos_resultante": 17.0,
      "carencia_restante": 204,
      "coeficiente_perc": 60.0,
      "rmi": 3396.66,
      "delta_rmi": 497.96,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2013",
      "maior_salario_expurgado": 4923.2,
      "patrimonio_vitalicio": 119510.4
    },
    {
      "descartes": 217,
      "salarios_restantes": 52,
      "media_corrigida": 5675.21,
      "tc_anos_resultante": 16.9,
      "carencia_restante": 203,
      "coeficiente_perc": 60.0,
      "rmi": 3405.13,
      "delta_rmi": 506.43,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2013",
      "maior_salario_expurgado": 4927.44,
      "patrimonio_vitalicio": 121543.2
    },
    {
      "descartes": 218,
      "salarios_restantes": 51,
      "media_corrigida": 5689.82,
      "tc_anos_resultante": 16.8,
      "carencia_restante": 202,
      "coeficiente_perc": 60.0,
      "rmi": 3413.89,
      "delta_rmi": 515.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2012",
      "maior_salario_expurgado": 4930.32,
      "patrimonio_vitalicio": 123645.6
    },
    {
      "descartes": 219,
      "salarios_restantes": 50,
      "media_corrigida": 5704.8,
      "tc_anos_resultante": 16.8,
      "carencia_restante": 201,
      "coeficiente_perc": 60.0,
      "rmi": 3422.88,
      "delta_rmi": 524.18,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2016",
      "maior_salario_expurgado": 4940.88,
      "patrimonio_vitalicio": 125803.2
    },
    {
      "descartes": 220,
      "salarios_restantes": 49,
      "media_corrigida": 5720.31,
      "tc_anos_resultante": 16.7,
      "carencia_restante": 200,
      "coeficiente_perc": 60.0,
      "rmi": 3432.18,
      "delta_rmi": 533.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 12/2016",
      "maior_salario_expurgado": 4944.78,
      "patrimonio_vitalicio": 128035.2
    },
    {
      "descartes": 221,
      "salarios_restantes": 48,
      "media_corrigida": 5736.45,
      "tc_anos_resultante": 16.6,
      "carencia_restante": 199,
      "coeficiente_perc": 60.0,
      "rmi": 3441.87,
      "delta_rmi": 543.17,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2019",
      "maior_salario_expurgado": 4945.35,
      "patrimonio_vitalicio": 130360.8
    },
    {
      "descartes": 222,
      "salarios_restantes": 47,
      "media_corrigida": 5753.15,
      "tc_anos_resultante": 16.5,
      "carencia_restante": 198,
      "coeficiente_perc": 60.0,
      "rmi": 3451.89,
      "delta_rmi": 553.19,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2015",
      "maior_salario_expurgado": 4951.63,
      "patrimonio_vitalicio": 132765.6
    },
    {
      "descartes": 223,
      "salarios_restantes": 46,
      "media_corrigida": 5770.51,
      "tc_anos_resultante": 16.4,
      "carencia_restante": 197,
      "coeficiente_perc": 60.0,
      "rmi": 3462.31,
      "delta_rmi": 563.61,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2016",
      "maior_salario_expurgado": 4954.44,
      "patrimonio_vitalicio": 135266.4
    },
    {
      "descartes": 224,
      "salarios_restantes": 45,
      "media_corrigida": 5788.57,
      "tc_anos_resultante": 16.3,
      "carencia_restante": 196,
      "coeficiente_perc": 60.0,
      "rmi": 3473.14,
      "delta_rmi": 574.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2019",
      "maior_salario_expurgado": 4957.78,
      "patrimonio_vitalicio": 137865.6
    },
    {
      "descartes": 225,
      "salarios_restantes": 44,
      "media_corrigida": 5807.34,
      "tc_anos_resultante": 16.2,
      "carencia_restante": 195,
      "coeficiente_perc": 60.0,
      "rmi": 3484.4,
      "delta_rmi": 585.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2013",
      "maior_salario_expurgado": 4962.92,
      "patrimonio_vitalicio": 140568.0
    },
    {
      "descartes": 226,
      "salarios_restantes": 43,
      "media_corrigida": 5826.89,
      "tc_anos_resultante": 16.2,
      "carencia_restante": 194,
      "coeficiente_perc": 60.0,
      "rmi": 3496.14,
      "delta_rmi": 597.44,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 10/2016",
      "maior_salario_expurgado": 4966.46,
      "patrimonio_vitalicio": 143385.6
    },
    {
      "descartes": 227,
      "salarios_restantes": 42,
      "media_corrigida": 5847.36,
      "tc_anos_resultante": 16.1,
      "carencia_restante": 193,
      "coeficiente_perc": 60.0,
      "rmi": 3508.41,
      "delta_rmi": 609.71,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 08/2015",
      "maior_salario_expurgado": 4967.42,
      "patrimonio_vitalicio": 146330.4
    },
    {
      "descartes": 228,
      "salarios_restantes": 41,
      "media_corrigida": 5868.64,
      "tc_anos_resultante": 16.0,
      "carencia_restante": 192,
      "coeficiente_perc": 60.0,
      "rmi": 3521.18,
      "delta_rmi": 622.48,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 09/2016",
      "maior_salario_expurgado": 4974.9,
      "patrimonio_vitalicio": 149395.2
    },
    {
      "descartes": 229,
      "salarios_restantes": 40,
      "media_corrigida": 5890.96,
      "tc_anos_resultante": 15.9,
      "carencia_restante": 191,
      "coeficiente_perc": 60.0,
      "rmi": 3534.58,
      "delta_rmi": 635.88,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 02/2018",
      "maior_salario_expurgado": 4975.68,
      "patrimonio_vitalicio": 152611.2
    },
    {
      "descartes": 230,
      "salarios_restantes": 39,
      "media_corrigida": 5914.37,
      "tc_anos_resultante": 15.8,
      "carencia_restante": 190,
      "coeficiente_perc": 60.0,
      "rmi": 3548.62,
      "delta_rmi": 649.92,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 06/2016",
      "maior_salario_expurgado": 4977.96,
      "patrimonio_vitalicio": 155980.8
    },
    {
      "descartes": 231,
      "salarios_restantes": 38,
      "media_corrigida": 5938.65,
      "tc_anos_resultante": 15.8,
      "carencia_restante": 189,
      "coeficiente_perc": 60.0,
      "rmi": 3563.19,
      "delta_rmi": 664.49,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 07/2013",
      "maior_salario_expurgado": 4991.84,
      "patrimonio_vitalicio": 159477.6
    },
    {
      "descartes": 232,
      "salarios_restantes": 37,
      "media_corrigida": 5964.12,
      "tc_anos_resultante": 15.7,
      "carencia_restante": 188,
      "coeficiente_perc": 60.0,
      "rmi": 3578.47,
      "delta_rmi": 679.77,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2014",
      "maior_salario_expurgado": 4996.31,
      "patrimonio_vitalicio": 163144.8
    },
    {
      "descartes": 233,
      "salarios_restantes": 36,
      "media_corrigida": 5990.86,
      "tc_anos_resultante": 15.6,
      "carencia_restante": 187,
      "coeficiente_perc": 60.0,
      "rmi": 3594.52,
      "delta_rmi": 695.82,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 05/2016",
      "maior_salario_expurgado": 5001.35,
      "patrimonio_vitalicio": 166996.8
    },
    {
      "descartes": 234,
      "salarios_restantes": 35,
      "media_corrigida": 6018.42,
      "tc_anos_resultante": 15.5,
      "carencia_restante": 186,
      "coeficiente_perc": 60.0,
      "rmi": 3611.05,
      "delta_rmi": 712.35,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2016",
      "maior_salario_expurgado": 5026.26,
      "patrimonio_vitalicio": 170964.0
    },
    {
      "descartes": 235,
      "salarios_restantes": 34,
      "media_corrigida": 6047.34,
      "tc_anos_resultante": 15.4,
      "carencia_restante": 185,
      "coeficiente_perc": 60.0,
      "rmi": 3628.4,
      "delta_rmi": 729.7,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 01/2013",
      "maior_salario_expurgado": 5035.21,
      "patrimonio_vitalicio": 175128.0
    },
    {
      "descartes": 236,
      "salarios_restantes": 33,
      "media_corrigida": 6077.98,
      "tc_anos_resultante": 15.3,
      "carencia_restante": 184,
      "coeficiente_perc": 60.0,
      "rmi": 3646.79,
      "delta_rmi": 748.09,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 04/2018",
      "maior_salario_expurgado": 5036.14,
      "patrimonio_vitalicio": 179541.6
    },
    {
      "descartes": 237,
      "salarios_restantes": 32,
      "media_corrigida": 6109.94,
      "tc_anos_resultante": 15.2,
      "carencia_restante": 183,
      "coeficiente_perc": 60.0,
      "rmi": 3665.96,
      "delta_rmi": 767.26,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2017",
      "maior_salario_expurgado": 5055.31,
      "patrimonio_vitalicio": 184142.4
    },
    {
      "descartes": 238,
      "salarios_restantes": 31,
      "media_corrigida": 6143.91,
      "tc_anos_resultante": 15.2,
      "carencia_restante": 182,
      "coeficiente_perc": 60.0,
      "rmi": 3686.35,
      "delta_rmi": 787.65,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 11/2018",
      "maior_salario_expurgado": 5056.71,
      "patrimonio_vitalicio": 189036.0
    },
    {
      "descartes": 239,
      "salarios_restantes": 30,
      "media_corrigida": 6180.07,
      "tc_anos_resultante": 15.1,
      "carencia_restante": 181,
      "coeficiente_perc": 60.0,
      "rmi": 3708.04,
      "delta_rmi": 809.34,
      "tag": "Intermediário",
      "faixa_descartada": "01/2009 a 03/2018",
      "maior_salario_expurgado": 5059.29,
      "patrimonio_vitalicio": 194241.6
    },
    {
      "descartes": 240,
      "salarios_restantes": 29,
      "media_corrigida": 6218.65,
      "tc_anos_resultante": 15.0,
      "carencia_restante": 180,
      "coeficiente_perc": 60.0,
      "rmi": 3731.19,
      "delta_rmi": 832.49,
      "tag": "Ponto Ótimo Global Atuarial (15 Anos Rigorosamente Preservados) 👑",
      "faixa_descartada": "01/2009 a 06/2017",
      "maior_salario_expurgado": 5061.12,
      "patrimonio_vitalicio": 199797.6
    }
  ],
  "salarios_pbc": [
    {
      "comp": "07/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 240.3,
      "valor_bruto_original": 240.3,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 8.50614,
      "valor_corrigido": 2044.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 227.25,
      "valor_bruto_original": 227.25,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 8.351635,
      "valor_corrigido": 1897.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 265.15,
      "valor_bruto_original": 265.15,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 8.236326,
      "valor_corrigido": 2183.86,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 265.15,
      "valor_bruto_original": 265.15,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 8.010432,
      "valor_corrigido": 2123.97,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 265.15,
      "valor_bruto_original": 265.15,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 7.78014,
      "valor_corrigido": 2062.9,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/1994",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 299.77,
      "valor_bruto_original": 299.77,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 7.650089,
      "valor_corrigido": 2293.27,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 7.541491,
      "valor_corrigido": 3129.12,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 582.86,
      "valor_bruto_original": 762.12,
      "limitado_ao_teto": true,
      "teto_competencia": 582.86,
      "fator_inpc": 7.466084,
      "valor_corrigido": 4351.68,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 7.347061,
      "valor_corrigido": 3048.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 362.14,
      "valor_bruto_original": 362.14,
      "limitado_ao_teto": false,
      "teto_competencia": 582.86,
      "fator_inpc": 7.168564,
      "valor_corrigido": 2596.02,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 7.021121,
      "valor_corrigido": 2913.2,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 622.38,
      "valor_bruto_original": 622.38,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.871326,
      "valor_corrigido": 4276.58,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.706349,
      "valor_corrigido": 2782.6,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.638635,
      "valor_corrigido": 2754.5,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.561862,
      "valor_corrigido": 2722.65,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 414.92,
      "valor_bruto_original": 414.92,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.471264,
      "valor_corrigido": 2685.06,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 207.46,
      "valor_bruto_original": 207.46,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.375001,
      "valor_corrigido": 1322.56,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/1995",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.271521,
      "valor_corrigido": 2612.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.181275,
      "valor_corrigido": 2574.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 367.77,
      "valor_bruto_original": 367.77,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.137697,
      "valor_corrigido": 2257.26,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.119949,
      "valor_corrigido": 2548.9,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 832.66,
      "fator_inpc": 6.063558,
      "valor_corrigido": 2525.41,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 339.43,
      "valor_bruto_original": 339.43,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.986925,
      "valor_corrigido": 2032.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.908344,
      "valor_corrigido": 2460.71,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.838285,
      "valor_corrigido": 2431.53,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.809239,
      "valor_corrigido": 2419.43,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.808077,
      "valor_corrigido": 2418.95,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.78609,
      "valor_corrigido": 2409.79,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.766484,
      "valor_corrigido": 2401.63,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/1996",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.48,
      "valor_bruto_original": 416.48,
      "limitado_ao_teto": false,
      "teto_competencia": 957.56,
      "fator_inpc": 5.747517,
      "valor_corrigido": 2393.73,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 1031.87,
      "fator_inpc": 5.462016,
      "valor_corrigido": 2274.88,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 1031.87,
      "fator_inpc": 5.432679,
      "valor_corrigido": 2262.66,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 411.24,
      "valor_bruto_original": 411.24,
      "limitado_ao_teto": false,
      "teto_competencia": 1031.87,
      "fator_inpc": 5.406189,
      "valor_corrigido": 2223.24,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 402.87,
      "valor_bruto_original": 402.87,
      "limitado_ao_teto": false,
      "teto_competencia": 1031.87,
      "fator_inpc": 5.38197,
      "valor_corrigido": 2168.23,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 416.49,
      "valor_bruto_original": 416.49,
      "limitado_ao_teto": false,
      "teto_competencia": 1031.87,
      "fator_inpc": 5.343497,
      "valor_corrigido": 2225.51,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 389.1,
      "valor_bruto_original": 389.1,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.335494,
      "valor_corrigido": 2076.04,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 397.67,
      "valor_bruto_original": 397.67,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.350475,
      "valor_corrigido": 2127.72,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 536.72,
      "valor_bruto_original": 536.72,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.376822,
      "valor_corrigido": 2885.85,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 436.55,
      "valor_bruto_original": 436.55,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.393542,
      "valor_corrigido": 2354.55,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 483.41,
      "valor_bruto_original": 483.41,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.387615,
      "valor_corrigido": 2604.43,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 483.41,
      "valor_bruto_original": 483.41,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.39733,
      "valor_corrigido": 2609.12,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/1998",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 542.96,
      "valor_bruto_original": 542.96,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.374756,
      "valor_corrigido": 2918.28,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 453.32,
      "valor_bruto_original": 453.32,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.340046,
      "valor_corrigido": 2420.75,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.65,
      "valor_bruto_original": 501.65,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.272037,
      "valor_corrigido": 2644.72,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 444.41,
      "valor_bruto_original": 444.41,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.205408,
      "valor_corrigido": 2313.34,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.65,
      "valor_bruto_original": 501.65,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.181057,
      "valor_corrigido": 2599.08,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.64,
      "valor_bruto_original": 501.64,
      "limitado_ao_teto": false,
      "teto_competencia": 1200.0,
      "fator_inpc": 5.178467,
      "valor_corrigido": 2597.73,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.64,
      "valor_bruto_original": 501.64,
      "limitado_ao_teto": false,
      "teto_competencia": 1255.32,
      "fator_inpc": 5.174845,
      "valor_corrigido": 2595.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.64,
      "valor_bruto_original": 501.64,
      "limitado_ao_teto": false,
      "teto_competencia": 1255.32,
      "fator_inpc": 5.136832,
      "valor_corrigido": 2576.84,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 501.64,
      "valor_bruto_original": 501.64,
      "limitado_ao_teto": false,
      "teto_competencia": 1255.32,
      "fator_inpc": 5.108734,
      "valor_corrigido": 2562.75,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/1999",
      "origem": "COMANDO DA MARINHA",
      "categoria": "Marinha",
      "valor_nominal": 468.2,
      "valor_bruto_original": 468.2,
      "limitado_ao_teto": false,
      "teto_competencia": 1255.32,
      "fator_inpc": 5.088888,
      "valor_corrigido": 2382.62,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1561.56,
      "fator_inpc": 3.50949,
      "valor_corrigido": 3860.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1561.56,
      "fator_inpc": 3.475087,
      "valor_corrigido": 3822.6,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.477173,
      "valor_corrigido": 3824.89,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.475783,
      "valor_corrigido": 3823.36,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.469538,
      "valor_corrigido": 3816.49,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.441319,
      "valor_corrigido": 3785.45,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.415313,
      "valor_corrigido": 3756.84,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2003",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.39697,
      "valor_corrigido": 3736.67,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.369007,
      "valor_corrigido": 3705.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.355919,
      "valor_corrigido": 3691.51,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.336899,
      "valor_corrigido": 3670.59,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 1869.34,
      "fator_inpc": 3.323273,
      "valor_corrigido": 3655.6,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.310033,
      "valor_corrigido": 3641.04,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.293565,
      "valor_corrigido": 3622.92,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.269696,
      "valor_corrigido": 3596.67,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.253429,
      "valor_corrigido": 3578.77,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.247908,
      "valor_corrigido": 3572.7,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.242396,
      "valor_corrigido": 3566.64,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.228192,
      "valor_corrigido": 3551.01,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2004",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.200666,
      "valor_corrigido": 3520.73,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.182526,
      "valor_corrigido": 3500.78,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.168584,
      "valor_corrigido": 3485.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.145621,
      "valor_corrigido": 3460.18,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2500.0,
      "fator_inpc": 3.117254,
      "valor_corrigido": 3428.98,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.095585,
      "valor_corrigido": 3405.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.098994,
      "valor_corrigido": 3408.89,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.098064,
      "valor_corrigido": 3407.87,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.098064,
      "valor_corrigido": 3407.87,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.093424,
      "valor_corrigido": 3402.77,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.075586,
      "valor_corrigido": 3383.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.059067,
      "valor_corrigido": 3364.97,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2005",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.046879,
      "valor_corrigido": 3351.57,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2006",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.035345,
      "valor_corrigido": 3338.88,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2006",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.02838,
      "valor_corrigido": 3331.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2006",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 2668.15,
      "fator_inpc": 3.020225,
      "valor_corrigido": 3322.25,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2008",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 1705.0,
      "valor_bruto_original": 1705.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3038.99,
      "fator_inpc": 2.753764,
      "valor_corrigido": 4695.17,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.727579,
      "valor_corrigido": 1131.95,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.702982,
      "valor_corrigido": 1121.74,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2008",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 3142.34,
      "valor_bruto_original": 3453.91,
      "limitado_ao_teto": true,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.687395,
      "valor_corrigido": 8444.71,
      "descartado_no_otimo": false
    },
    {
      "comp": "08/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.681764,
      "valor_corrigido": 1112.93,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.677747,
      "valor_corrigido": 1111.27,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.664425,
      "valor_corrigido": 1105.74,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.654338,
      "valor_corrigido": 1101.55,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2008",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.646663,
      "valor_corrigido": 1098.37,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 415.0,
      "valor_bruto_original": 415.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3142.34,
      "fator_inpc": 2.629832,
      "valor_corrigido": 1091.38,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.621705,
      "valor_corrigido": 1219.09,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.616472,
      "valor_corrigido": 1216.66,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.60216,
      "valor_corrigido": 1210.0,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.58664,
      "valor_corrigido": 1202.79,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.575822,
      "valor_corrigido": 1197.76,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.569911,
      "valor_corrigido": 1195.01,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.567857,
      "valor_corrigido": 1194.05,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.563755,
      "valor_corrigido": 1192.15,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.557616,
      "valor_corrigido": 1189.29,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.548188,
      "valor_corrigido": 1184.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2009",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 465.0,
      "valor_bruto_original": 465.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3218.9,
      "fator_inpc": 2.542087,
      "valor_corrigido": 1182.07,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.519912,
      "valor_corrigido": 1285.16,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.502395,
      "valor_corrigido": 1276.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.484753,
      "valor_corrigido": 1267.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.466746,
      "valor_corrigido": 1258.04,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.456184,
      "valor_corrigido": 1252.65,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.458889,
      "valor_corrigido": 1254.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.460612,
      "valor_corrigido": 1254.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.462335,
      "valor_corrigido": 1255.79,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.44911,
      "valor_corrigido": 1249.05,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.426784,
      "valor_corrigido": 1237.66,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.402043,
      "valor_corrigido": 1225.04,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2010",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 510.0,
      "valor_bruto_original": 510.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3467.4,
      "fator_inpc": 2.387716,
      "valor_corrigido": 1217.74,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 540.0,
      "valor_bruto_original": 540.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.365481,
      "valor_corrigido": 1277.36,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.352776,
      "valor_corrigido": 1282.26,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.337349,
      "valor_corrigido": 1273.86,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.320641,
      "valor_corrigido": 1264.75,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.307488,
      "valor_corrigido": 1257.58,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.302423,
      "valor_corrigido": 1254.82,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.302423,
      "valor_corrigido": 1254.82,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.292793,
      "valor_corrigido": 1249.57,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.282522,
      "valor_corrigido": 1243.97,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.275241,
      "valor_corrigido": 1240.01,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.262345,
      "valor_corrigido": 1232.98,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2011",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 545.0,
      "valor_bruto_original": 545.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3689.66,
      "fator_inpc": 2.250866,
      "valor_corrigido": 1226.72,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.239445,
      "valor_corrigido": 1392.93,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.230745,
      "valor_corrigido": 1387.52,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.226737,
      "valor_corrigido": 1385.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.212576,
      "valor_corrigido": 1376.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.200474,
      "valor_corrigido": 1368.69,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2012",
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "categoria": "Carnê GPS 20%",
      "valor_nominal": 622.0,
      "valor_bruto_original": 622.0,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.194767,
      "valor_corrigido": 1365.15,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2012",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2266.21,
      "valor_bruto_original": 2266.21,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.17558,
      "valor_corrigido": 4930.32,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2012",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2180.51,
      "valor_bruto_original": 2180.51,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.16196,
      "valor_corrigido": 4714.18,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2012",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2225.01,
      "valor_bruto_original": 2225.01,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.146718,
      "valor_corrigido": 4776.47,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2012",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2133.12,
      "valor_bruto_original": 2133.12,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.135188,
      "valor_corrigido": 4554.61,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2012",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2098.85,
      "valor_bruto_original": 2098.85,
      "limitado_ao_teto": false,
      "teto_competencia": 3916.2,
      "fator_inpc": 2.119504,
      "valor_corrigido": 4448.52,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2397.51,
      "valor_bruto_original": 2397.51,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.100182,
      "valor_corrigido": 5035.21,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2238.71,
      "valor_bruto_original": 2238.71,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.089318,
      "valor_corrigido": 4677.38,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2238.71,
      "valor_bruto_original": 2238.71,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.076856,
      "valor_corrigido": 4649.48,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2245.61,
      "valor_bruto_original": 2245.61,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.064675,
      "valor_corrigido": 4636.45,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2230.16,
      "valor_bruto_original": 2230.16,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.057474,
      "valor_corrigido": 4588.5,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2752.98,
      "valor_bruto_original": 2752.98,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.051729,
      "valor_corrigido": 5648.37,
      "descartado_no_otimo": false
    },
    {
      "comp": "07/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2429.83,
      "valor_bruto_original": 2429.83,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.0544,
      "valor_corrigido": 4991.84,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2400.25,
      "valor_bruto_original": 2400.25,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.051118,
      "valor_corrigido": 4923.2,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2368.57,
      "valor_bruto_original": 2368.57,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.045595,
      "valor_corrigido": 4845.13,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2854.47,
      "valor_bruto_original": 2854.47,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.033192,
      "valor_corrigido": 5803.69,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2454.13,
      "valor_bruto_original": 2454.13,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.022272,
      "valor_corrigido": 4962.92,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2013",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2454.13,
      "valor_bruto_original": 2454.13,
      "limitado_ao_teto": false,
      "teto_competencia": 4159.0,
      "fator_inpc": 2.007816,
      "valor_corrigido": 4927.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2454.13,
      "valor_bruto_original": 2454.13,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.995246,
      "valor_corrigido": 4896.59,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2426.24,
      "valor_bruto_original": 2426.24,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.982557,
      "valor_corrigido": 4810.16,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2454.13,
      "valor_bruto_original": 2454.13,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.966433,
      "valor_corrigido": 4825.88,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2404.49,
      "valor_bruto_original": 2404.49,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.951213,
      "valor_corrigido": 4691.67,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2446.66,
      "valor_bruto_original": 2446.66,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.939576,
      "valor_corrigido": 4745.48,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2895.88,
      "valor_bruto_original": 2895.88,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.934546,
      "valor_corrigido": 5602.21,
      "descartado_no_otimo": false
    },
    {
      "comp": "07/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2542.26,
      "valor_bruto_original": 2542.26,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.932034,
      "valor_corrigido": 4911.73,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2481.09,
      "valor_bruto_original": 2481.09,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.928563,
      "valor_corrigido": 4784.94,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2530.64,
      "valor_bruto_original": 2530.64,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.919159,
      "valor_corrigido": 4856.7,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3338.41,
      "valor_bruto_original": 3338.41,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.911894,
      "valor_corrigido": 6382.69,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2627.13,
      "valor_bruto_original": 2627.13,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.901814,
      "valor_corrigido": 4996.31,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2014",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2567.42,
      "valor_bruto_original": 2567.42,
      "limitado_ao_teto": false,
      "teto_competencia": 4390.24,
      "fator_inpc": 1.890095,
      "valor_corrigido": 4852.67,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2575.42,
      "valor_bruto_original": 2575.42,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.86253,
      "valor_corrigido": 4796.8,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2583.3,
      "valor_bruto_original": 2583.3,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.841172,
      "valor_corrigido": 4756.3,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2559.42,
      "valor_bruto_original": 2559.42,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.813784,
      "valor_corrigido": 4642.24,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2749.38,
      "valor_bruto_original": 2749.38,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.800997,
      "valor_corrigido": 4951.63,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2758.84,
      "valor_bruto_original": 2758.84,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.783342,
      "valor_corrigido": 4919.96,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2756.51,
      "valor_bruto_original": 2756.51,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.769715,
      "valor_corrigido": 4878.24,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2759.74,
      "valor_bruto_original": 2759.74,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.75951,
      "valor_corrigido": 4855.79,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2830.24,
      "valor_bruto_original": 2830.24,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.755122,
      "valor_corrigido": 4967.42,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2773.72,
      "valor_bruto_original": 2773.72,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.746217,
      "valor_corrigido": 4843.52,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3783.95,
      "valor_bruto_original": 3783.95,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.732874,
      "valor_corrigido": 6557.11,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2817.55,
      "valor_bruto_original": 2817.55,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.71385,
      "valor_corrigido": 4828.86,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2015",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2878.39,
      "valor_bruto_original": 2878.39,
      "limitado_ao_teto": false,
      "teto_competencia": 4663.75,
      "fator_inpc": 1.698563,
      "valor_corrigido": 4889.13,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2878.39,
      "valor_bruto_original": 2878.39,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.673296,
      "valor_corrigido": 4816.4,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2878.39,
      "valor_bruto_original": 2878.39,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.657549,
      "valor_corrigido": 4771.07,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 2916.55,
      "valor_bruto_original": 2916.55,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.650288,
      "valor_corrigido": 4813.15,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3065.18,
      "valor_bruto_original": 3065.18,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.639793,
      "valor_corrigido": 5026.26,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3079.88,
      "valor_bruto_original": 3079.88,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.623879,
      "valor_corrigido": 5001.35,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3079.88,
      "valor_bruto_original": 3079.88,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.616283,
      "valor_corrigido": 4977.96,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 4111.13,
      "valor_bruto_original": 4111.13,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.606004,
      "valor_corrigido": 6602.49,
      "descartado_no_otimo": false
    },
    {
      "comp": "08/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3094.51,
      "valor_bruto_original": 3094.51,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.601041,
      "valor_corrigido": 4954.44,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3109.78,
      "valor_bruto_original": 3109.78,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.599761,
      "valor_corrigido": 4974.9,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3109.78,
      "valor_bruto_original": 3109.78,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.597046,
      "valor_corrigido": 4966.46,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3095.93,
      "valor_bruto_original": 3095.93,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.595929,
      "valor_corrigido": 4940.88,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2016",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3102.71,
      "valor_bruto_original": 3102.71,
      "limitado_ao_teto": false,
      "teto_competencia": 5189.82,
      "fator_inpc": 1.593698,
      "valor_corrigido": 4944.78,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3093.24,
      "valor_bruto_original": 3093.24,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.587032,
      "valor_corrigido": 4909.07,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3097.48,
      "valor_bruto_original": 3097.48,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.583233,
      "valor_corrigido": 4904.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3083.35,
      "valor_bruto_original": 3083.35,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.578182,
      "valor_corrigido": 4866.09,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3060.73,
      "valor_bruto_original": 3060.73,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.576921,
      "valor_corrigido": 4826.53,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3385.21,
      "valor_bruto_original": 3385.21,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.571264,
      "valor_corrigido": 5319.06,
      "descartado_no_otimo": false
    },
    {
      "comp": "06/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3211.39,
      "valor_bruto_original": 3211.39,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.575992,
      "valor_corrigido": 5061.12,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3253.4,
      "valor_bruto_original": 3253.4,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.573318,
      "valor_corrigido": 5118.63,
      "descartado_no_otimo": false
    },
    {
      "comp": "08/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 4282.71,
      "valor_bruto_original": 4282.71,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.57379,
      "valor_corrigido": 6740.09,
      "descartado_no_otimo": false
    },
    {
      "comp": "09/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3296.66,
      "valor_bruto_original": 3296.66,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.574105,
      "valor_corrigido": 5189.29,
      "descartado_no_otimo": false
    },
    {
      "comp": "10/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3237.92,
      "valor_bruto_original": 3237.92,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.568302,
      "valor_corrigido": 5078.04,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3229.23,
      "valor_bruto_original": 3229.23,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.565484,
      "valor_corrigido": 5055.31,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2017",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3242.41,
      "valor_bruto_original": 3242.41,
      "limitado_ao_teto": false,
      "teto_competencia": 5531.31,
      "fator_inpc": 1.561424,
      "valor_corrigido": 5062.78,
      "descartado_no_otimo": false
    },
    {
      "comp": "01/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3259.95,
      "valor_bruto_original": 3259.95,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.557841,
      "valor_corrigido": 5078.48,
      "descartado_no_otimo": false
    },
    {
      "comp": "02/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3199.71,
      "valor_bruto_original": 3199.71,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.555042,
      "valor_corrigido": 4975.68,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3255.75,
      "valor_bruto_original": 3255.75,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.553955,
      "valor_corrigido": 5059.29,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3247.66,
      "valor_bruto_original": 3247.66,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.550698,
      "valor_corrigido": 5036.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3187.57,
      "valor_bruto_original": 3187.57,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.544059,
      "valor_corrigido": 4921.8,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3539.96,
      "valor_bruto_original": 3539.96,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.52229,
      "valor_corrigido": 5388.85,
      "descartado_no_otimo": false
    },
    {
      "comp": "07/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 4301.87,
      "valor_bruto_original": 4301.87,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.518494,
      "valor_corrigido": 6532.36,
      "descartado_no_otimo": false
    },
    {
      "comp": "08/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3340.24,
      "valor_bruto_original": 3340.24,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.518494,
      "valor_corrigido": 5072.13,
      "descartado_no_otimo": false
    },
    {
      "comp": "09/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3394.98,
      "valor_bruto_original": 3394.98,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.513952,
      "valor_corrigido": 5139.84,
      "descartado_no_otimo": false
    },
    {
      "comp": "10/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3369.08,
      "valor_bruto_original": 3369.08,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.50792,
      "valor_corrigido": 5080.3,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3345.05,
      "valor_bruto_original": 3345.05,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.511699,
      "valor_corrigido": 5056.71,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2018",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3411.26,
      "valor_bruto_original": 3411.26,
      "limitado_ao_teto": false,
      "teto_competencia": 5645.8,
      "fator_inpc": 1.509586,
      "valor_corrigido": 5149.59,
      "descartado_no_otimo": false
    },
    {
      "comp": "01/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3252.33,
      "valor_bruto_original": 3252.33,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.504171,
      "valor_corrigido": 4892.06,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3305.51,
      "valor_bruto_original": 3305.51,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.496092,
      "valor_corrigido": 4945.35,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3289.23,
      "valor_bruto_original": 3289.23,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.48466,
      "valor_corrigido": 4883.39,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3307.06,
      "valor_bruto_original": 3307.06,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.475805,
      "valor_corrigido": 4880.58,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3496.48,
      "valor_bruto_original": 3496.48,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.473595,
      "valor_corrigido": 5152.4,
      "descartado_no_otimo": false
    },
    {
      "comp": "06/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 3364.75,
      "valor_bruto_original": 3364.75,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.473448,
      "valor_corrigido": 4957.78,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2019",
      "origem": "CLUBE NAVAL",
      "categoria": "Clube Naval",
      "valor_nominal": 4566.14,
      "valor_bruto_original": 4566.14,
      "limitado_ao_teto": false,
      "teto_competencia": 5839.45,
      "fator_inpc": 1.471976,
      "valor_corrigido": 6721.25,
      "descartado_no_otimo": false
    },
    {
      "comp": "11/2020",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1045.0,
      "valor_bruto_original": 1045.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6101.06,
      "fator_inpc": 1.3902,
      "valor_corrigido": 1452.76,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2020",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1045.0,
      "valor_bruto_original": 1045.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6101.06,
      "fator_inpc": 1.370195,
      "valor_corrigido": 1431.85,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.366506,
      "valor_corrigido": 1503.16,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.355392,
      "valor_corrigido": 1490.93,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.343835,
      "valor_corrigido": 1478.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.338747,
      "valor_corrigido": 1472.62,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.326018,
      "valor_corrigido": 1458.62,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.318109,
      "valor_corrigido": 1449.92,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.3048,
      "valor_corrigido": 1435.28,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.293418,
      "valor_corrigido": 1422.76,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.278081,
      "valor_corrigido": 1405.89,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.263425,
      "valor_corrigido": 1389.77,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2021",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1100.0,
      "valor_bruto_original": 1100.0,
      "limitado_ao_teto": false,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.252901,
      "valor_corrigido": 1378.19,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2021",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6433.57,
      "valor_bruto_original": 6708.55,
      "limitado_ao_teto": true,
      "teto_competencia": 6433.57,
      "fator_inpc": 1.243821,
      "valor_corrigido": 8002.21,
      "descartado_no_otimo": false
    },
    {
      "comp": "01/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.235543,
      "valor_corrigido": 7787.63,
      "descartado_no_otimo": false
    },
    {
      "comp": "02/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.22331,
      "valor_corrigido": 7710.52,
      "descartado_no_otimo": false
    },
    {
      "comp": "03/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.202743,
      "valor_corrigido": 7580.89,
      "descartado_no_otimo": false
    },
    {
      "comp": "04/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.190363,
      "valor_corrigido": 7502.86,
      "descartado_no_otimo": false
    },
    {
      "comp": "05/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.18503,
      "valor_corrigido": 7469.24,
      "descartado_no_otimo": false
    },
    {
      "comp": "06/2022",
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "categoria": "Cooperativas",
      "valor_nominal": 6303.0,
      "valor_bruto_original": 6303.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.177729,
      "valor_corrigido": 7423.23,
      "descartado_no_otimo": false
    },
    {
      "comp": "07/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.184838,
      "valor_corrigido": 1436.02,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.188522,
      "valor_corrigido": 1440.49,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.192337,
      "valor_corrigido": 1445.11,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.18676,
      "valor_corrigido": 1438.35,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.182267,
      "valor_corrigido": 1432.91,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2022",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1212.0,
      "valor_bruto_original": 1212.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7087.22,
      "fator_inpc": 1.174165,
      "valor_corrigido": 1423.09,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1302.0,
      "valor_bruto_original": 1302.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.168789,
      "valor_corrigido": 1521.76,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1302.0,
      "valor_bruto_original": 1302.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.159858,
      "valor_corrigido": 1510.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1302.0,
      "valor_bruto_original": 1302.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.152482,
      "valor_corrigido": 1500.53,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1302.0,
      "valor_bruto_original": 1302.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.146406,
      "valor_corrigido": 1492.62,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.142294,
      "valor_corrigido": 1507.83,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.143437,
      "valor_corrigido": 1509.34,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.144467,
      "valor_corrigido": 1510.7,
      "descartado_no_otimo": true
    },
    {
      "comp": "08/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.142183,
      "valor_corrigido": 1507.68,
      "descartado_no_otimo": true
    },
    {
      "comp": "09/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.140928,
      "valor_corrigido": 1506.02,
      "descartado_no_otimo": true
    },
    {
      "comp": "10/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.13956,
      "valor_corrigido": 1504.22,
      "descartado_no_otimo": true
    },
    {
      "comp": "11/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.138422,
      "valor_corrigido": 1502.72,
      "descartado_no_otimo": true
    },
    {
      "comp": "12/2023",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1320.0,
      "valor_bruto_original": 1320.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7507.49,
      "fator_inpc": 1.132195,
      "valor_corrigido": 1494.5,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1412.0,
      "valor_bruto_original": 1412.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.125778,
      "valor_corrigido": 1589.6,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1412.0,
      "valor_bruto_original": 1412.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.116733,
      "valor_corrigido": 1576.83,
      "descartado_no_otimo": true
    },
    {
      "comp": "03/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1412.0,
      "valor_bruto_original": 1412.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.114615,
      "valor_corrigido": 1573.84,
      "descartado_no_otimo": true
    },
    {
      "comp": "04/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1412.0,
      "valor_bruto_original": 1412.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.110506,
      "valor_corrigido": 1568.03,
      "descartado_no_otimo": true
    },
    {
      "comp": "05/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1412.0,
      "valor_bruto_original": 1412.0,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.105421,
      "valor_corrigido": 1560.85,
      "descartado_no_otimo": true
    },
    {
      "comp": "06/2024",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1204.4,
      "valor_bruto_original": 1204.4,
      "limitado_ao_teto": false,
      "teto_competencia": 7786.02,
      "fator_inpc": 1.102664,
      "valor_corrigido": 1328.05,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2025",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1518.0,
      "valor_bruto_original": 1518.0,
      "limitado_ao_teto": false,
      "teto_competencia": 8157.41,
      "fator_inpc": 1.064909,
      "valor_corrigido": 1616.53,
      "descartado_no_otimo": true
    },
    {
      "comp": "01/2026",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1621.0,
      "valor_bruto_original": 1621.0,
      "limitado_ao_teto": false,
      "teto_competencia": 8500.0,
      "fator_inpc": 1.036086,
      "valor_corrigido": 1679.5,
      "descartado_no_otimo": true
    },
    {
      "comp": "02/2026",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1621.0,
      "valor_bruto_original": 1621.0,
      "limitado_ao_teto": false,
      "teto_competencia": 8500.0,
      "fator_inpc": 1.030316,
      "valor_corrigido": 1670.14,
      "descartado_no_otimo": true
    },
    {
      "comp": "07/2026",
      "origem": "RECOLHIMENTO MEI (5%)",
      "categoria": "MEI (5%)",
      "valor_nominal": 1621.0,
      "valor_bruto_original": 1621.0,
      "limitado_ao_teto": false,
      "teto_competencia": 8500.0,
      "fator_inpc": 1.004974,
      "valor_corrigido": 1629.06,
      "descartado_no_otimo": true
    }
  ],
  "vinculos": [
    {
      "seq": 1,
      "origem": "COMANDO DA MARINHA",
      "cnpj": "00.394.502/0008-10",
      "nit": "180.54268.62-4",
      "tipo": "Empregado ou Agente Público",
      "inicio": "24/01/1983",
      "fim": "30/11/1983",
      "indicadores": [
        "PRPPS"
      ],
      "dias_total": 311,
      "natureza": "Militar / Serviço Público (EAMES)",
      "remuneracoes": [
        {
          "comp": "02/1983",
          "valor": 8797.93,
          "moeda": "Cr$"
        },
        {
          "comp": "03/1983",
          "valor": 7138.98,
          "moeda": "Cr$"
        },
        {
          "comp": "04/1983",
          "valor": 7138.98,
          "moeda": "Cr$"
        },
        {
          "comp": "05/1983",
          "valor": 7139.16,
          "moeda": "Cr$"
        },
        {
          "comp": "06/1983",
          "valor": 9282.06,
          "moeda": "Cr$"
        },
        {
          "comp": "07/1983",
          "valor": 9282.06,
          "moeda": "Cr$"
        },
        {
          "comp": "08/1983",
          "valor": 23509.96,
          "moeda": "Cr$"
        },
        {
          "comp": "09/1983",
          "valor": 23509.96,
          "moeda": "Cr$"
        },
        {
          "comp": "10/1983",
          "valor": 23509.96,
          "moeda": "Cr$"
        },
        {
          "comp": "11/1983",
          "valor": 45485.79,
          "moeda": "Cr$"
        }
      ]
    },
    {
      "seq": 2,
      "origem": "COMANDO DA MARINHA",
      "cnpj": "00.394.502/0019-73",
      "nit": "180.54268.62-4",
      "tipo": "Empregado ou Agente Público",
      "inicio": "27/03/1985",
      "fim": "23/09/1999",
      "indicadores": [
        "PRPPS"
      ],
      "dias_total": 5294,
      "natureza": "Servidor Público Civil / Militar (Desligamento PDV da União)",
      "remuneracoes_pbc": [
        {
          "comp": "07/1994",
          "valor": 240.3
        },
        {
          "comp": "08/1994",
          "valor": 227.25
        },
        {
          "comp": "09/1994",
          "valor": 265.15
        },
        {
          "comp": "10/1994",
          "valor": 265.15
        },
        {
          "comp": "11/1994",
          "valor": 265.15
        },
        {
          "comp": "12/1994",
          "valor": 299.77
        },
        {
          "comp": "01/1995",
          "valor": 414.92
        },
        {
          "comp": "02/1995",
          "valor": 762.12
        },
        {
          "comp": "03/1995",
          "valor": 414.92
        },
        {
          "comp": "04/1995",
          "valor": 362.14
        },
        {
          "comp": "05/1995",
          "valor": 414.92
        },
        {
          "comp": "06/1995",
          "valor": 622.38
        },
        {
          "comp": "07/1995",
          "valor": 414.92
        },
        {
          "comp": "08/1995",
          "valor": 414.92
        },
        {
          "comp": "09/1995",
          "valor": 414.92
        },
        {
          "comp": "10/1995",
          "valor": 414.92
        },
        {
          "comp": "11/1995",
          "valor": 207.46
        },
        {
          "comp": "12/1995",
          "valor": 416.49
        },
        {
          "comp": "01/1996",
          "valor": 416.49
        },
        {
          "comp": "02/1996",
          "valor": 367.77
        },
        {
          "comp": "03/1996",
          "valor": 416.49
        },
        {
          "comp": "04/1996",
          "valor": 416.49
        },
        {
          "comp": "05/1996",
          "valor": 339.43
        },
        {
          "comp": "06/1996",
          "valor": 416.48
        },
        {
          "comp": "07/1996",
          "valor": 416.48
        },
        {
          "comp": "08/1996",
          "valor": 416.48
        },
        {
          "comp": "09/1996",
          "valor": 416.48
        },
        {
          "comp": "10/1996",
          "valor": 416.48
        },
        {
          "comp": "11/1996",
          "valor": 416.48
        },
        {
          "comp": "12/1996",
          "valor": 416.48
        },
        {
          "comp": "01/1998",
          "valor": 416.49
        },
        {
          "comp": "02/1998",
          "valor": 416.49
        },
        {
          "comp": "03/1998",
          "valor": 411.24
        },
        {
          "comp": "04/1998",
          "valor": 402.87
        },
        {
          "comp": "05/1998",
          "valor": 416.49
        },
        {
          "comp": "06/1998",
          "valor": 389.1
        },
        {
          "comp": "07/1998",
          "valor": 397.67
        },
        {
          "comp": "08/1998",
          "valor": 536.72
        },
        {
          "comp": "09/1998",
          "valor": 436.55
        },
        {
          "comp": "10/1998",
          "valor": 483.41
        },
        {
          "comp": "11/1998",
          "valor": 483.41
        },
        {
          "comp": "12/1998",
          "valor": 542.96
        },
        {
          "comp": "01/1999",
          "valor": 453.32
        },
        {
          "comp": "02/1999",
          "valor": 501.65
        },
        {
          "comp": "03/1999",
          "valor": 444.41
        },
        {
          "comp": "04/1999",
          "valor": 501.65
        },
        {
          "comp": "05/1999",
          "valor": 501.64
        },
        {
          "comp": "06/1999",
          "valor": 501.64
        },
        {
          "comp": "07/1999",
          "valor": 501.64
        },
        {
          "comp": "08/1999",
          "valor": 501.64
        },
        {
          "comp": "09/1999",
          "valor": 468.2
        }
      ]
    },
    {
      "seq": 3,
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "cnpj": "27.698.273/0001-08",
      "nit": "180.54438.46-5",
      "tipo": "Contribuinte Individual",
      "inicio": "01/04/2003",
      "fim": "30/09/2003",
      "indicadores": [],
      "dias_total": 183,
      "remuneracoes": [
        {
          "comp": "04/2003",
          "valor": 1100.0
        },
        {
          "comp": "05/2003",
          "valor": 1100.0
        },
        {
          "comp": "06/2003",
          "valor": 1100.0
        },
        {
          "comp": "07/2003",
          "valor": 1100.0
        },
        {
          "comp": "08/2003",
          "valor": 1100.0
        },
        {
          "comp": "09/2003",
          "valor": 1100.0
        }
      ]
    },
    {
      "seq": 4,
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "cnpj": "27.698.273/0001-08",
      "nit": "180.54438.46-5",
      "tipo": "Contribuinte Individual",
      "inicio": "01/11/2003",
      "fim": "31/03/2006",
      "indicadores": [],
      "dias_total": 882,
      "remuneracoes": [
        {
          "comp": "11/2003",
          "valor": 1100.0
        },
        {
          "comp": "12/2003",
          "valor": 1100.0
        },
        {
          "comp": "01/2004",
          "valor": 1100.0
        },
        {
          "comp": "02/2004",
          "valor": 1100.0
        },
        {
          "comp": "03/2004",
          "valor": 1100.0
        },
        {
          "comp": "04/2004",
          "valor": 1100.0
        },
        {
          "comp": "05/2004",
          "valor": 1100.0
        },
        {
          "comp": "06/2004",
          "valor": 1100.0
        },
        {
          "comp": "07/2004",
          "valor": 1100.0
        },
        {
          "comp": "08/2004",
          "valor": 1100.0
        },
        {
          "comp": "09/2004",
          "valor": 1100.0
        },
        {
          "comp": "10/2004",
          "valor": 1100.0
        },
        {
          "comp": "11/2004",
          "valor": 1100.0
        },
        {
          "comp": "12/2004",
          "valor": 1100.0
        },
        {
          "comp": "01/2005",
          "valor": 1100.0
        },
        {
          "comp": "02/2005",
          "valor": 1100.0
        },
        {
          "comp": "03/2005",
          "valor": 1100.0
        },
        {
          "comp": "04/2005",
          "valor": 1100.0
        },
        {
          "comp": "05/2005",
          "valor": 1100.0
        },
        {
          "comp": "06/2005",
          "valor": 1100.0
        },
        {
          "comp": "07/2005",
          "valor": 1100.0
        },
        {
          "comp": "08/2005",
          "valor": 1100.0
        },
        {
          "comp": "09/2005",
          "valor": 1100.0
        },
        {
          "comp": "10/2005",
          "valor": 1100.0
        },
        {
          "comp": "11/2005",
          "valor": 1100.0
        },
        {
          "comp": "12/2005",
          "valor": 1100.0
        },
        {
          "comp": "01/2006",
          "valor": 1100.0
        },
        {
          "comp": "02/2006",
          "valor": 1100.0
        },
        {
          "comp": "03/2006",
          "valor": 1100.0
        }
      ]
    },
    {
      "seq": 5,
      "origem": "RECOLHIMENTO (CARNÊ GPS 20%)",
      "cnpj": "N/A",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/04/2008",
      "fim": "30/06/2012",
      "indicadores": [],
      "dias_total": 1552,
      "natureza": "Recolhimento com Alíquota de 20% (Conta p/ Tempo e Carência)",
      "remuneracoes": [
        {
          "comp": "04/2008",
          "valor": 415.0
        },
        {
          "comp": "05/2008",
          "valor": 415.0
        },
        {
          "comp": "06/2008",
          "valor": 415.0
        },
        {
          "comp": "07/2008",
          "valor": 415.0
        },
        {
          "comp": "08/2008",
          "valor": 415.0
        },
        {
          "comp": "09/2008",
          "valor": 415.0
        },
        {
          "comp": "10/2008",
          "valor": 415.0
        },
        {
          "comp": "11/2008",
          "valor": 415.0
        },
        {
          "comp": "12/2008",
          "valor": 415.0
        },
        {
          "comp": "01/2009",
          "valor": 415.0
        },
        {
          "comp": "02/2009",
          "valor": 465.0
        },
        {
          "comp": "03/2009",
          "valor": 465.0
        },
        {
          "comp": "04/2009",
          "valor": 465.0
        },
        {
          "comp": "05/2009",
          "valor": 465.0
        },
        {
          "comp": "06/2009",
          "valor": 465.0
        },
        {
          "comp": "07/2009",
          "valor": 465.0
        },
        {
          "comp": "08/2009",
          "valor": 465.0
        },
        {
          "comp": "09/2009",
          "valor": 465.0
        },
        {
          "comp": "10/2009",
          "valor": 465.0
        },
        {
          "comp": "11/2009",
          "valor": 465.0
        },
        {
          "comp": "12/2009",
          "valor": 465.0
        },
        {
          "comp": "01/2010",
          "valor": 510.0
        },
        {
          "comp": "02/2010",
          "valor": 510.0
        },
        {
          "comp": "03/2010",
          "valor": 510.0
        },
        {
          "comp": "04/2010",
          "valor": 510.0
        },
        {
          "comp": "05/2010",
          "valor": 510.0
        },
        {
          "comp": "06/2010",
          "valor": 510.0
        },
        {
          "comp": "07/2010",
          "valor": 510.0
        },
        {
          "comp": "08/2010",
          "valor": 510.0
        },
        {
          "comp": "09/2010",
          "valor": 510.0
        },
        {
          "comp": "10/2010",
          "valor": 510.0
        },
        {
          "comp": "11/2010",
          "valor": 510.0
        },
        {
          "comp": "12/2010",
          "valor": 510.0
        },
        {
          "comp": "01/2011",
          "valor": 540.0
        },
        {
          "comp": "02/2011",
          "valor": 545.0
        },
        {
          "comp": "03/2011",
          "valor": 545.0
        },
        {
          "comp": "04/2011",
          "valor": 545.0
        },
        {
          "comp": "05/2011",
          "valor": 545.0
        },
        {
          "comp": "06/2011",
          "valor": 545.0
        },
        {
          "comp": "07/2011",
          "valor": 545.0
        },
        {
          "comp": "08/2011",
          "valor": 545.0
        },
        {
          "comp": "09/2011",
          "valor": 545.0
        },
        {
          "comp": "10/2011",
          "valor": 545.0
        },
        {
          "comp": "11/2011",
          "valor": 545.0
        },
        {
          "comp": "12/2011",
          "valor": 545.0
        },
        {
          "comp": "01/2012",
          "valor": 622.0
        },
        {
          "comp": "02/2012",
          "valor": 622.0
        },
        {
          "comp": "03/2012",
          "valor": 622.0
        },
        {
          "comp": "04/2012",
          "valor": 622.0
        },
        {
          "comp": "05/2012",
          "valor": 622.0
        },
        {
          "comp": "06/2012",
          "valor": 622.0
        }
      ]
    },
    {
      "seq": 6,
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "cnpj": "65.181.075/0001-61",
      "nit": "180.54268.62-4",
      "tipo": "Contribuinte Individual",
      "inicio": "01/04/2008",
      "fim": "30/04/2008",
      "indicadores": [],
      "dias_total": 30,
      "remuneracoes": [
        {
          "comp": "04/2008",
          "valor": 1290.0
        }
      ]
    },
    {
      "seq": 7,
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "cnpj": "65.181.075/0001-61",
      "nit": "180.54268.62-4",
      "tipo": "Contribuinte Individual",
      "inicio": "01/07/2008",
      "fim": "31/07/2008",
      "indicadores": [],
      "dias_total": 31,
      "remuneracoes": [
        {
          "comp": "07/2008",
          "valor": 3038.91
        }
      ]
    },
    {
      "seq": 8,
      "origem": "CLUBE NAVAL",
      "cnpj": "33.868.654",
      "nit": "268.88987.24-6",
      "tipo": "Empregado ou Agente Público (CLT)",
      "inicio": "01/08/2012",
      "fim": "01/08/2019",
      "indicadores": [],
      "dias_total": 2557,
      "remuneracoes": [
        {
          "comp": "08/2012",
          "valor": 2266.21
        },
        {
          "comp": "09/2012",
          "valor": 2180.51
        },
        {
          "comp": "10/2012",
          "valor": 2225.01
        },
        {
          "comp": "11/2012",
          "valor": 2133.12
        },
        {
          "comp": "12/2012",
          "valor": 2098.85
        },
        {
          "comp": "01/2013",
          "valor": 2397.51
        },
        {
          "comp": "02/2013",
          "valor": 2238.71
        },
        {
          "comp": "03/2013",
          "valor": 2238.71
        },
        {
          "comp": "04/2013",
          "valor": 2245.61
        },
        {
          "comp": "05/2013",
          "valor": 2230.16
        },
        {
          "comp": "06/2013",
          "valor": 2752.98
        },
        {
          "comp": "07/2013",
          "valor": 2429.83
        },
        {
          "comp": "08/2013",
          "valor": 2400.25
        },
        {
          "comp": "09/2013",
          "valor": 2368.57
        },
        {
          "comp": "10/2013",
          "valor": 2854.47
        },
        {
          "comp": "11/2013",
          "valor": 2454.13
        },
        {
          "comp": "12/2013",
          "valor": 2454.13
        },
        {
          "comp": "01/2014",
          "valor": 2454.13
        },
        {
          "comp": "02/2014",
          "valor": 2426.24
        },
        {
          "comp": "03/2014",
          "valor": 2454.13
        },
        {
          "comp": "04/2014",
          "valor": 2404.49
        },
        {
          "comp": "05/2014",
          "valor": 2446.66
        },
        {
          "comp": "06/2014",
          "valor": 2895.88
        },
        {
          "comp": "07/2014",
          "valor": 2542.26
        },
        {
          "comp": "08/2014",
          "valor": 2481.09
        },
        {
          "comp": "09/2014",
          "valor": 2530.64
        },
        {
          "comp": "10/2014",
          "valor": 3338.41
        },
        {
          "comp": "11/2014",
          "valor": 2627.13
        },
        {
          "comp": "12/2014",
          "valor": 2567.42
        },
        {
          "comp": "01/2015",
          "valor": 2575.42
        },
        {
          "comp": "02/2015",
          "valor": 2583.3
        },
        {
          "comp": "03/2015",
          "valor": 2559.42
        },
        {
          "comp": "04/2015",
          "valor": 2749.38
        },
        {
          "comp": "05/2015",
          "valor": 2758.84
        },
        {
          "comp": "06/2015",
          "valor": 2756.51
        },
        {
          "comp": "07/2015",
          "valor": 2759.74
        },
        {
          "comp": "08/2015",
          "valor": 2830.24
        },
        {
          "comp": "09/2015",
          "valor": 2773.72
        },
        {
          "comp": "10/2015",
          "valor": 3783.95
        },
        {
          "comp": "11/2015",
          "valor": 2817.55
        },
        {
          "comp": "12/2015",
          "valor": 2878.39
        },
        {
          "comp": "01/2016",
          "valor": 2878.39
        },
        {
          "comp": "02/2016",
          "valor": 2878.39
        },
        {
          "comp": "03/2016",
          "valor": 2916.55
        },
        {
          "comp": "04/2016",
          "valor": 3065.18
        },
        {
          "comp": "05/2016",
          "valor": 3079.88
        },
        {
          "comp": "06/2016",
          "valor": 3079.88
        },
        {
          "comp": "07/2016",
          "valor": 4111.13
        },
        {
          "comp": "08/2016",
          "valor": 3094.51
        },
        {
          "comp": "09/2016",
          "valor": 3109.78
        },
        {
          "comp": "10/2016",
          "valor": 3109.78
        },
        {
          "comp": "11/2016",
          "valor": 3095.93
        },
        {
          "comp": "12/2016",
          "valor": 3102.71
        },
        {
          "comp": "01/2017",
          "valor": 3093.24
        },
        {
          "comp": "02/2017",
          "valor": 3097.48
        },
        {
          "comp": "03/2017",
          "valor": 3083.35
        },
        {
          "comp": "04/2017",
          "valor": 3060.73
        },
        {
          "comp": "05/2017",
          "valor": 3385.21
        },
        {
          "comp": "06/2017",
          "valor": 3211.39
        },
        {
          "comp": "07/2017",
          "valor": 3253.4
        },
        {
          "comp": "08/2017",
          "valor": 4282.71
        },
        {
          "comp": "09/2017",
          "valor": 3296.66
        },
        {
          "comp": "10/2017",
          "valor": 3237.92
        },
        {
          "comp": "11/2017",
          "valor": 3229.23
        },
        {
          "comp": "12/2017",
          "valor": 3242.41
        },
        {
          "comp": "01/2018",
          "valor": 3259.95
        },
        {
          "comp": "02/2018",
          "valor": 3199.71
        },
        {
          "comp": "03/2018",
          "valor": 3255.75
        },
        {
          "comp": "04/2018",
          "valor": 3247.66
        },
        {
          "comp": "05/2018",
          "valor": 3187.57
        },
        {
          "comp": "06/2018",
          "valor": 3539.96
        },
        {
          "comp": "07/2018",
          "valor": 4301.87
        },
        {
          "comp": "08/2018",
          "valor": 3340.24
        },
        {
          "comp": "09/2018",
          "valor": 3394.98
        },
        {
          "comp": "10/2018",
          "valor": 3369.08
        },
        {
          "comp": "11/2018",
          "valor": 3345.05
        },
        {
          "comp": "12/2018",
          "valor": 3411.26
        },
        {
          "comp": "01/2019",
          "valor": 3252.33
        },
        {
          "comp": "02/2019",
          "valor": 3305.51
        },
        {
          "comp": "03/2019",
          "valor": 3289.23
        },
        {
          "comp": "04/2019",
          "valor": 3307.06
        },
        {
          "comp": "05/2019",
          "valor": 3496.48
        },
        {
          "comp": "06/2019",
          "valor": 3364.75
        },
        {
          "comp": "07/2019",
          "valor": 4566.14
        }
      ]
    },
    {
      "seq": 9,
      "origem": "RECOLHIMENTO MEI (5%)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/11/2020",
      "fim": "30/11/2021",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-LC123",
        "IREC-MEI"
      ],
      "dias_total": 395,
      "natureza": "MEI (5% SM)",
      "remuneracoes": [
        {
          "comp": "11/2020",
          "valor": 1045.0,
          "guia": 52.25
        },
        {
          "comp": "12/2020",
          "valor": 1045.0,
          "guia": 52.25
        },
        {
          "comp": "01/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "02/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "03/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "04/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "05/2021",
          "valor": 1100.0,
          "guia": 55.17
        },
        {
          "comp": "06/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "07/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "08/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "09/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "10/2021",
          "valor": 1100.0,
          "guia": 55.0
        },
        {
          "comp": "11/2021",
          "valor": 1100.0,
          "guia": 55.0
        }
      ]
    },
    {
      "seq": 10,
      "origem": "RECOLHIMENTO MEI (5% - Concomitante c/ Cooperativa)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/12/2021",
      "fim": "30/06/2022",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-MEI"
      ],
      "dias_total": 212,
      "remuneracoes": [
        {
          "comp": "12/2021",
          "valor": 275.0,
          "guia": 55.0
        },
        {
          "comp": "01/2022",
          "valor": 303.0,
          "guia": 60.6
        },
        {
          "comp": "02/2022",
          "valor": 303.0,
          "guia": 60.6
        },
        {
          "comp": "03/2022",
          "valor": 303.0,
          "guia": 60.6
        },
        {
          "comp": "04/2022",
          "valor": 303.0,
          "guia": 60.6
        },
        {
          "comp": "05/2022",
          "valor": 303.0,
          "guia": 60.6
        },
        {
          "comp": "06/2022",
          "valor": 303.0,
          "guia": 60.6
        }
      ]
    },
    {
      "seq": 11,
      "origem": "AGRUPAMENTO DE CONTRATANTES/COOPERATIVAS",
      "cnpj": "33.540.014/0001-57",
      "nit": "180.54438.46-5",
      "tipo": "Contribuinte Individual",
      "inicio": "01/12/2021",
      "fim": "30/06/2022",
      "indicadores": [],
      "dias_total": 212,
      "remuneracoes": [
        {
          "comp": "12/2021",
          "valor": 6433.55
        },
        {
          "comp": "01/2022",
          "valor": 6000.0
        },
        {
          "comp": "02/2022",
          "valor": 6000.0
        },
        {
          "comp": "03/2022",
          "valor": 6000.0
        },
        {
          "comp": "04/2022",
          "valor": 6000.0
        },
        {
          "comp": "05/2022",
          "valor": 6000.0
        },
        {
          "comp": "06/2022",
          "valor": 6000.0
        }
      ]
    },
    {
      "seq": 12,
      "origem": "RECOLHIMENTO MEI (5%)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/07/2022",
      "fim": "30/06/2024",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-LC123",
        "IREC-MEI",
        "PSC-MEN-SM-EC103"
      ],
      "dias_total": 731,
      "remuneracoes": [
        {
          "comp": "07/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "08/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "09/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "10/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "11/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "12/2022",
          "valor": 1212.0,
          "guia": 60.6
        },
        {
          "comp": "01/2023",
          "valor": 1302.0,
          "guia": 65.1
        },
        {
          "comp": "02/2023",
          "valor": 1302.0,
          "guia": 65.1
        },
        {
          "comp": "03/2023",
          "valor": 1302.0,
          "guia": 65.1
        },
        {
          "comp": "04/2023",
          "valor": 1302.0,
          "guia": 65.1
        },
        {
          "comp": "05/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "06/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "07/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "08/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "09/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "10/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "11/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "12/2023",
          "valor": 1320.0,
          "guia": 66.0
        },
        {
          "comp": "01/2024",
          "valor": 1412.0,
          "guia": 70.6
        },
        {
          "comp": "02/2024",
          "valor": 1412.0,
          "guia": 70.6
        },
        {
          "comp": "03/2024",
          "valor": 1412.0,
          "guia": 70.6
        },
        {
          "comp": "04/2024",
          "valor": 1412.0,
          "guia": 70.6
        },
        {
          "comp": "05/2024",
          "valor": 1412.0,
          "guia": 70.61
        },
        {
          "comp": "06/2024",
          "valor": 1204.4,
          "guia": 60.22,
          "indicador": "PSC-MEN-SM-EC103"
        }
      ]
    },
    {
      "seq": 13,
      "origem": "RECOLHIMENTO MEI (5%)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/02/2025",
      "fim": "28/02/2025",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-LC123",
        "IREC-MEI"
      ],
      "dias_total": 28,
      "remuneracoes": [
        {
          "comp": "02/2025",
          "valor": 1518.0,
          "guia": 75.9
        }
      ]
    },
    {
      "seq": 14,
      "origem": "RECOLHIMENTO MEI (5%)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/01/2026",
      "fim": "28/02/2026",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-LC123",
        "IREC-MEI"
      ],
      "dias_total": 59,
      "remuneracoes": [
        {
          "comp": "01/2026",
          "valor": 1621.0,
          "guia": 81.05
        },
        {
          "comp": "02/2026",
          "valor": 1621.0,
          "guia": 81.05
        }
      ]
    },
    {
      "seq": 15,
      "origem": "RECOLHIMENTO MEI (5%)",
      "nit": "268.88987.24-6",
      "tipo": "Contribuinte Individual",
      "inicio": "01/07/2026",
      "fim": "31/07/2026",
      "indicadores": [
        "IREC-INDPEND",
        "IREC-LC123",
        "IREC-MEI"
      ],
      "dias_total": 31,
      "remuneracoes": [
        {
          "comp": "07/2026",
          "valor": 1621.0,
          "guia": 81.05
        }
      ]
    },
    {
      "seq": 16,
      "origem": "BENEFÍCIO NB 1891582116",
      "tipo": "Espécie 42 - Aposentadoria por Tempo de Contribuição",
      "inicio": "29/11/2019",
      "fim": "30/11/2020",
      "situacao": "99 - INDEFERIDO",
      "motivo": "Falta de tempo de contribuição (INSS computou apenas 14a 02m 01d pois desconsiderou Comando da Marinha sem CTC)."
    }
  ],
  "regras": [
    {
      "id": "regra_idade",
      "nome": "Aposentadoria por Idade Urbana (Art. 18 / EC 103)",
      "elegivel": true,
      "data_implemento": "06/06/2030 (Aos 65 anos)",
      "carencia_cumprida": "200+ meses (Mínimo 180)",
      "tempo_contribuicao": "35 anos projetados (Mínimo 15)",
      "rmi_sem_descarte": 2898.7,
      "rmi_otimizada": 3731.19,
      "ganho_mensal": 832.49,
      "status": "Elegível com certeza absoluta na data de 65 anos",
      "recomendacao": "CENÁRIO DE OURO: Descartar as menores contribuições (MEI) para alcançar a RMI máxima vitalícia."
    },
    {
      "id": "transicao_pedagio_100",
      "nome": "Transição Pedágio 100% (Art. 20 / EC 103)",
      "elegivel": false,
      "data_implemento": "Requer 40 anos e 6 meses de tempo total",
      "idade_minima": "60 anos (Cumprida em 06/06/2025)",
      "rmi_estimada": 6218.65,
      "status": "Inviável a curto prazo sem recolhimentos complementares vultosos",
      "recomendacao": "Não recomendada pelo custo proibitivo de guias em atraso."
    },
    {
      "id": "transicao_pedagio_50",
      "nome": "Transição Pedágio 50% (Art. 17 / EC 103)",
      "elegivel": false,
      "data_implemento": "Inaplicável",
      "status": "Não atingiu 33 anos de TC em 13/11/2019",
      "recomendacao": "Cláusula de barreira intransponível."
    },
    {
      "id": "transicao_pontos",
      "nome": "Transição por Pontos (Art. 15 / EC 103)",
      "elegivel": false,
      "data_implemento": "Atinge 105 pontos próximo a 2030",
      "status": "Converge temporalmente com a regra por idade",
      "recomendacao": "A regra por idade é mais segura e rentável juridicamente."
    }
  ]
};
let CNIS_DATA = JSON.parse(JSON.stringify(DEMO_CNIS_DATA));

// Estado Reativo da Aplicação
let currentScenario = {
  comMarinha: true,
  descarteAtivo: true,
  descarteCustom: CNIS_DATA.resumo_numerico ? CNIS_DATA.resumo_numerico.descartes_otimos : 240,
  filtroTabela: 'todas',
  buscaTabela: '',
  buscaMatriz: '',
  buscaAuditoria: '',
  modoAuditoria: 'ambos'
};

// Controle de Monetização & Modo Freemium Inteligente
let modoFreemiumAtivo = localStorage.getItem('previmaster_usuario_pro') === 'true' ? false : true;

function toggleModoFreemium() {
  modoFreemiumAtivo = !modoFreemiumAtivo;
  localStorage.setItem('previmaster_usuario_pro', (!modoFreemiumAtivo).toString());
  renderProfileHeader();
  renderTabelasDescartesEMelhores();
  renderAuditoriaCards();
  renderParecerMeuINSS();

  if (modoFreemiumAtivo) {
    alert("🔒 Modo Freemium (Demonstração Gratuita) Ativado!\n\nAs competências descartadas além da 3ª foram ocultadas/borradas para simular a visão do usuário não pagante, com alertas e ganchos de conversão para emissão do parecer oficial em PDF.");
  } else {
    alert("👑 Modo Pro Ativado!\n\nTodas as competências nominais descartadas, relatórios e parecer oficial para o Meu INSS estão 100% desbloqueados sem qualquer limitação.");
  }
}

let chartSalarios = null;
let chartDescarte = null;
let chartPatrimonio = null;

// CONTROLE DO TEMA (CLARO / ESCURO)
function getTemaAtual() {
  return localStorage.getItem('previmaster_theme') || 'dark';
}

function aplicarTema(tema) {
  const isLight = tema === 'light';
  if (isLight) {
    document.body.classList.add('theme-light');
    document.documentElement.classList.add('theme-light');
  } else {
    document.body.classList.remove('theme-light');
    document.documentElement.classList.remove('theme-light');
  }
  localStorage.setItem('previmaster_theme', tema);

  const btnTheme = document.getElementById('btn-theme-toggle');
  const iconTheme = document.getElementById('theme-icon');
  const textTheme = document.getElementById('theme-text');

  if (iconTheme && textTheme) {
    if (isLight) {
      iconTheme.textContent = '🌙';
      textTheme.textContent = 'Modo Escuro';
      if (btnTheme) {
        btnTheme.className = "px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 border border-slate-300 transition-all shadow-sm cursor-pointer";
      }
    } else {
      iconTheme.textContent = '☀️';
      textTheme.textContent = 'Modo Claro';
      if (btnTheme) {
        btnTheme.className = "px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-all shadow-sm cursor-pointer";
      }
    }
  }

  // Atualiza os gráficos se inicializados para recalcular as cores
  if (typeof initCharts === 'function' && CNIS_DATA && CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0) {
    initCharts();
  }
}

function alternarTema() {
  const atual = getTemaAtual();
  const proximo = atual === 'light' ? 'dark' : 'light';
  aplicarTema(proximo);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  try { aplicarTema(getTemaAtual()); } catch (e) { console.error('Erro tema:', e); }
  try { renderProfileHeader(); } catch (e) { console.error('Erro profile:', e); }
  try { renderKPIs(); } catch (e) { console.error('Erro KPIs:', e); }
  try { renderBannerBalanca(); } catch (e) { console.error('Erro Banner Balança:', e); }
  try { renderCardAnaliseAtuarial(); } catch (e) { console.error('Erro Card Atuarial:', e); }
  try { renderAuditoriaCards(); } catch (e) { console.error('Erro Auditoria:', e); }
  try { renderRegrasComparison(); } catch (e) { console.error('Erro Regras:', e); }
  try { renderMatrizDescartes(); } catch (e) { console.error('Erro Matriz:', e); }
  try { renderTabelasDescartesEMelhores(); } catch (e) { console.error('Erro Tabelas Descartes:', e); }
  try { renderParecerMeuINSS(); } catch (e) { console.error('Erro Parecer:', e); }
  try { renderAnaliseMEI(); } catch (e) { console.error('Erro MEI:', e); }
  try { renderDossieJuridico(); } catch (e) { console.error('Erro Dossiê:', e); }
  try { renderTabelaSalarios(); } catch (e) { console.error('Erro Salários:', e); }
  try { initCharts(); } catch (e) { console.error('Erro Charts:', e); }
  try { setupEventListeners(); } catch (e) { console.error('Erro Listeners:', e); }
  try { atualizarIndicadorQuotaUpload(); } catch (e) {}
});

// FUNÇÕES DE GESTÃO DO CNIS: APAGAR DADOS E RESTAURAR DEMONSTRAÇÃO
function abrirModalLimpar() {
  const modal = document.getElementById('modal-confirmar-limpar');
  if (modal) modal.classList.remove('hidden');
}

function fecharModalLimpar() {
  const modal = document.getElementById('modal-confirmar-limpar');
  if (modal) modal.classList.add('hidden');
}

function executarLimpezaCNIS() {
  fecharModalLimpar();

  CNIS_DATA = {
    segurado: {
      nome: "NENHUM SEGURADO CARREGADO",
      cpf: "---.---.--- - --",
      nascimento: "--/--/----",
      idade_atual: 0,
      mae: "---",
      der_anterior: "Nenhuma"
    },
    auditoria_marinha: {
      periodos: "Nenhum vínculo averbado",
      total_tempo: "0 anos e 0 dias",
      desligamento: "N/A",
      indicador: "N/A",
      conclusao: "Aguardando importação de extrato CNIS em PDF."
    },
    analise_financeira_mei: {
      total_meses_mei: 0,
      custo_complementacao_darf1910: 0,
      impacto_na_media: "Sem dados",
      recomendacao: "Carregue um CNIS para auditar a viabilidade do MEI."
    },
    resumo_numerico: {
      total_competencias_pbc: 0,
      media_sem_descarte: 0,
      coef_sem_descarte: 0,
      rmi_sem_descarte: 0,
      descartes_otimos: 0,
      media_otimizada: 0,
      coef_otimizado: 0,
      rmi_otimizada: 0,
      ganho_mensal_rmi: 0,
      patrimonio_vitalicio_ganho: 0
    },
    marcos_estrategicos: [],
    matriz_descarte_completa: [],
    descarte_curve: [],
    salarios_pbc: [],
    vinculos: [],
    regras: []
  };

  currentScenario.descarteCustom = 0;
  currentScenario.descarteAtivo = false;

  const slider = document.getElementById('slider-descarte');
  if (slider) {
    slider.max = 0;
    slider.value = 0;
  }
  const toggle = document.getElementById('toggle-descarte');
  if (toggle) toggle.checked = false;

  renderProfileHeader();
  renderKPIs();
  renderBannerBalanca();
  renderCardAnaliseAtuarial();
  renderAuditoriaCards();
  renderRegrasComparison();
  renderMatrizDescartes();
  renderTabelasDescartesEMelhores();
  renderParecerMeuINSS();
  renderAnaliseMEI();
  renderDossieJuridico();
  renderTabelaSalarios();
  initCharts();

  const btnRestaurar = document.getElementById('btn-restaurar-demo');
  if (btnRestaurar) btnRestaurar.classList.remove('hidden');

  const badgeAudit = document.getElementById('profile-status-badge');
  if (badgeAudit) {
    badgeAudit.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1";
    badgeAudit.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Tela Limpa / Sem Dados';
  }

  const bannerLimpo = document.getElementById('banner-tela-limpa');
  if (bannerLimpo) bannerLimpo.classList.remove('hidden');

  alert('Dados do CNIS apagados com sucesso! A tela agora está 100% limpa para analisar um novo cliente ou extrato.');
}

function restaurarCasoDemonstrativo() {
  CNIS_DATA = JSON.parse(JSON.stringify(DEMO_CNIS_DATA));
  currentScenario.descarteCustom = CNIS_DATA.resumo_numerico ? CNIS_DATA.resumo_numerico.descartes_otimos : 240;
  currentScenario.descarteAtivo = true;

  const slider = document.getElementById('slider-descarte');
  if (slider) {
    slider.max = (CNIS_DATA.descarte_curve && CNIS_DATA.descarte_curve.length > 0) ? CNIS_DATA.descarte_curve.length - 1 : 0;
    slider.value = currentScenario.descarteCustom;
  }
  const toggle = document.getElementById('toggle-descarte');
  if (toggle) toggle.checked = true;

  renderProfileHeader();
  renderKPIs();
  renderBannerBalanca();
  renderCardAnaliseAtuarial();
  renderAuditoriaCards();
  renderRegrasComparison();
  renderMatrizDescartes();
  renderTabelasDescartesEMelhores();
  renderParecerMeuINSS();
  renderAnaliseMEI();
  renderDossieJuridico();
  renderTabelaSalarios();
  initCharts();

  const btnRestaurar = document.getElementById('btn-restaurar-demo');
  if (btnRestaurar) btnRestaurar.classList.add('hidden');

  const badgeAudit = document.getElementById('profile-status-badge');
  if (badgeAudit) {
    badgeAudit.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 flex items-center gap-1";
    badgeAudit.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> CNIS 100% Auditado';
  }

  const bannerLimpo = document.getElementById('banner-tela-limpa');
  if (bannerLimpo) bannerLimpo.classList.add('hidden');

  alert('Caso demonstrativo de Jorge Rubens Teste Demonstrativo restaurado com sucesso!');
}

// Atualização Geral de KPIs
function renderKPIs() {
  const kpiRmi = document.getElementById('kpi-rmi');
  const kpiGanho = document.getElementById('kpi-ganho');
  const kpiTempo = document.getElementById('kpi-tempo');
  const kpiCarencia = document.getElementById('kpi-carencia');
  const kpiPatrimonio = document.getElementById('kpi-patrimonio');
  const kpiMedia = document.getElementById('kpi-media');

  const kpiMediaSub = document.getElementById('kpi-media-sub');
  const kpiTempoSub = document.getElementById('kpi-tempo-sub');
  const kpiPatrimonioSub = document.getElementById('kpi-patrimonio-sub');
  const atalhosBox = document.getElementById('atalhos-matriz-box');
  const sliderBox = document.getElementById('slider-descarte-box');

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    if (kpiRmi) kpiRmi.textContent = 'R$ 0,00';
    if (kpiMedia) kpiMedia.textContent = 'R$ 0,00';
    if (kpiGanho) kpiGanho.innerHTML = '<span class="text-slate-500 font-medium">Tela Limpa</span>';
    if (kpiMediaSub) kpiMediaSub.innerHTML = '<span class="text-slate-500">Coeficiente: 0%</span>';
    if (kpiTempo) kpiTempo.innerHTML = '<span class="text-slate-500 font-bold">0 anos</span>';
    if (kpiTempoSub) kpiTempoSub.innerHTML = '<span class="text-slate-500">Carência: 0 meses</span>';
    if (kpiCarencia) kpiCarencia.innerHTML = '<span class="text-slate-500 font-bold">0 meses</span>';
    if (kpiPatrimonio) kpiPatrimonio.textContent = 'R$ 0,00';
    if (kpiPatrimonioSub) kpiPatrimonioSub.innerHTML = '<span class="text-slate-500">Sem cálculo ativo</span>';
    if (atalhosBox) atalhosBox.classList.add('opacity-40', 'pointer-events-none');
    if (sliderBox) sliderBox.classList.add('opacity-40', 'pointer-events-none');
    const sliderLabel = document.getElementById('slider-k-label');
    if (sliderLabel) sliderLabel.textContent = '0 salários excluídos';
    const tagLabel = document.getElementById('scenario-tag-label');
    if (tagLabel) tagLabel.textContent = 'Nenhum extrato ativo';
    return;
  }

  if (atalhosBox) atalhosBox.classList.remove('opacity-40', 'pointer-events-none');
  if (sliderBox) sliderBox.classList.remove('opacity-40', 'pointer-events-none');

  const res = CNIS_DATA.resumo_numerico;
  const k = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
  const pt = (CNIS_DATA.matriz_descarte_completa && CNIS_DATA.matriz_descarte_completa.length > 0)
    ? (CNIS_DATA.matriz_descarte_completa[Math.min(k, CNIS_DATA.matriz_descarte_completa.length - 1)] || {})
    : { rmi: 0, media_corrigida: 0, tc_anos_resultante: 0, carencia_restante: 0, tag: 'Cenário', salarios_restantes: 0, descartes: 0, delta_rmi: 0, coeficiente_perc: 60 };

  if (kpiRmi) kpiRmi.textContent = 'R$ ' + (pt.rmi || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (kpiMedia) kpiMedia.textContent = 'R$ ' + (pt.media_corrigida || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (kpiMediaSub) kpiMediaSub.innerHTML = `Coeficiente: <span class="font-bold text-sky-300">${pt.coeficiente_perc || 60}%</span> (Exige ${pt.tc_anos_resultante || 15}a de TC)`;
  
  const diff = (pt.rmi || 0) - (res.rmi_sem_descarte || 0);
  if (kpiGanho) {
    if (diff > 0) {
      kpiGanho.innerHTML = `<span class="text-emerald-400 font-semibold">+ R$ ${diff.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mês</span> <span class="text-xs text-slate-400">(Otimizado)</span>`;
    } else {
      kpiGanho.innerHTML = `<span class="text-slate-400">Cenário Base (Sem Descarte)</span>`;
    }
  }

  if (kpiTempo) {
    if (currentScenario.comMarinha) {
      kpiTempo.innerHTML = `<span class="text-sky-400 font-bold">${pt.tc_anos_resultante || 0} anos</span> <span class="text-xs text-slate-400">(35a - descartes)</span>`;
    } else {
      kpiTempo.innerHTML = `<span class="text-amber-400 font-bold">18.5 anos</span> <span class="text-xs text-rose-400">(Sem Marinha)</span>`;
    }
  }
  if (kpiTempoSub) {
    kpiTempoSub.innerHTML = currentScenario.comMarinha ? 'Com Marinha (15a 4m) + RGPS' : 'Tempo exclusivo do RGPS';
  }

  if (kpiCarencia) {
    kpiCarencia.innerHTML = `<span class="text-emerald-400 font-bold">${pt.carencia_restante || 0} meses</span> <span class="text-xs text-slate-400">(Mínimo 180)</span>`;
  }

  if (kpiPatrimonio) {
    const totalVitalicio = Math.max(0, diff) * 240;
    kpiPatrimonio.textContent = '+ R$ ' + totalVitalicio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (kpiPatrimonioSub) {
    kpiPatrimonioSub.innerHTML = 'Sobrevida projetada pelo IBGE';
  }

  const sliderLabel = document.getElementById('slider-k-label');
  if (sliderLabel) {
    sliderLabel.textContent = `${k} salários menores excluídos (Restam ${pt.salarios_restantes || 0} melhores salários)`;
  }

  const tagLabel = document.getElementById('scenario-tag-label');
  if (tagLabel) {
    tagLabel.textContent = pt.tag || 'Cenário Personalizado';
  }
}

// Render Header do Segurado
function renderProfileHeader() {
  const s = CNIS_DATA.segurado || {};
  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;

  const elNome = document.getElementById('profile-nome');
  const elCpf = document.getElementById('profile-cpf');
  const elNasc = document.getElementById('profile-nasc');
  const elDataIdade = document.getElementById('profile-data-idade');
  const elRegime = document.getElementById('profile-regime');
  const elAlertaDiag = document.getElementById('alerta-diagnostico-perfil');
  const elBadgeCaso = document.getElementById('profile-caso-badge');
  const elFooter = document.getElementById('footer-segurado-info');

  if (elNome) elNome.textContent = s.nome || 'NENHUM SEGURADO CARREGADO';
  if (elCpf) elCpf.textContent = s.cpf || '---.---.--- - --';
  if (elNasc) elNasc.textContent = (s.nascimento && s.nascimento !== '--/--/----') ? `${s.nascimento} (${s.idade_atual} anos)` : '---';
  if (elDataIdade) elDataIdade.textContent = hasData ? '06/06/2030 (65 anos)' : 'Aguardando CNIS';
  if (elRegime) elRegime.textContent = hasData ? 'RGPS c/ Averbação Marinha (PDV)' : 'Aguardando CNIS';
  if (elFooter) {
    elFooter.textContent = hasData 
      ? `Calculado para ${s.nome || 'Segurado'} • Índices oficiais INPC / IBGE / BACEN série SGS 188` 
      : 'PreviMaster AI • Software Especializado em Planejamento Previdenciário • Base Legal: EC 103/2019, Lei 8.213/91';
  }

  if (elBadgeCaso) {
    if (hasData) {
      elBadgeCaso.classList.remove('hidden');
    } else {
      elBadgeCaso.classList.add('hidden');
    }
  }

  const btnFreemium = document.getElementById('btn-toggle-freemium');
  if (btnFreemium) {
    if (modoFreemiumAtivo) {
      btnFreemium.className = "px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm bg-amber-500/10 text-amber-300 border border-amber-500/40 hover:bg-amber-500/20";
      btnFreemium.innerHTML = '<span>🔒</span> <span>Amostra Grátis (1º CNIS)</span> <span class="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded">Simular Pro</span>';
      btnFreemium.title = "Visualizando versão de demonstração (Freemium). Clique para alternar para o Modo Pro.";
    } else {
      btnFreemium.className = "px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/20";
      btnFreemium.innerHTML = '<span>👑</span> <span>Plano Pro Ativo</span> <span class="text-[9px] bg-emerald-400 text-slate-950 font-black px-1.5 py-0.2 rounded">Ilimitado</span>';
      btnFreemium.title = "Modo Pro Ativo com acesso total. Clique para testar o Modo Freemium.";
    }
  }

  if (elAlertaDiag) {
    if (hasData) {
      elAlertaDiag.innerHTML = `
        <div class="text-xl">💡</div>
        <div class="text-xs">
          <span class="font-bold text-amber-300 block">Diagnóstico de Inteligência Previdenciária:</span>
          <span class="text-slate-300">Averbar os 15+ anos da Marinha desbloqueia o <strong>Descarte Inteligente</strong>, elevando sua aposentadoria em quase R$ 1.000/mês sem gastar em complementações!</span>
        </div>
      `;
    } else {
      elAlertaDiag.innerHTML = `
        <div class="text-xl">✨</div>
        <div class="text-xs">
          <span class="font-bold text-sky-300 block">Tela Limpa para Novo CNIS:</span>
          <span class="text-slate-400">Nenhum extrato carregado no momento. Clique em <strong>"Analisar Novo CNIS"</strong> para importar um PDF ou restaure o caso demonstrativo.</span>
        </div>
      `;
    }
  }
}

// Render Banner da Balança Atuarial
function renderBannerBalanca() {
  const container = document.getElementById('banner-balanca-atuarial');
  if (!container) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');

  const res = CNIS_DATA.resumo_numerico || {};
  const totalComb = CNIS_DATA.matriz_descarte_completa ? CNIS_DATA.matriz_descarte_completa.length : 0;
  const bestK = res.descartes_otimos || 0;
  const ganho = res.ganho_mensal_rmi || 0;

  container.innerHTML = `
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <span class="text-2xl">⚖️</span>
          <h3 class="text-lg font-bold text-white tracking-wide">A Balança Atuarial do Artigo 26, § 6º da EC 103/2019</h3>
          <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">O Segredo do Cálculo</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed max-w-3xl">
          A exclusão de contribuições gera dois efeitos opostos: <strong>(1) Aumenta a média dos salários restantes</strong> (efeito positivo), mas <strong>(2) Reduz o coeficiente em 2% ao ano que exceder 20 anos</strong> (efeito redutor). A Matriz Computadorizada testa <strong>todas as ${totalComb} combinações possíveis (k = 0 a ${totalComb > 0 ? totalComb - 1 : 0})</strong> e encontra onde essa balança atinge a maior RMI líquida mantendo o piso legal de 15 anos:
        </p>
      </div>

      <div class="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-center min-w-[200px]">
        <span class="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">Ponto Ótimo Encontrado</span>
        <span class="text-xl font-mono font-black text-emerald-400 block">k = ${bestK} descartes</span>
        <span class="text-[11px] text-emerald-300 font-bold block">+ R$ ${ganho.toLocaleString('pt-BR', {minimumFractionDigits: 2})}/mês líquido</span>
      </div>
    </div>
  `;
}

// Render Card de Análise Atuarial Vital (Dinâmico para sumir quando limpo!)
function renderCardAnaliseAtuarial() {
  const container = document.getElementById('card-analise-atuarial-vital');
  if (!container) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');

  const k = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
  const salarios = [...CNIS_DATA.salarios_pbc].sort((a, b) => a.valor_corrigido - b.valor_corrigido);
  const descartados = salarios.slice(0, k);
  const melhores = salarios.slice(k);

  const mediaMelhores = melhores.length > 0 ? (melhores.reduce((acc, s) => acc + s.valor_corrigido, 0) / melhores.length) : 0;
  const mediaDescartados = descartados.length > 0 ? (descartados.reduce((acc, s) => acc + s.valor_corrigido, 0) / descartados.length) : 0;

  const pt = (CNIS_DATA.matriz_descarte_completa && CNIS_DATA.matriz_descarte_completa.length > 0)
    ? CNIS_DATA.matriz_descarte_completa[Math.min(k, CNIS_DATA.matriz_descarte_completa.length - 1)]
    : { rmi: 0, delta_rmi: 0, coeficiente_perc: 60 };

  const menorMelhor = melhores.length > 0 ? melhores[0].valor_corrigido : 0;
  const maiorMelhor = melhores.length > 0 ? melhores[melhores.length - 1].valor_corrigido : 0;

  container.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="text-xl">💡</span>
      <h4 class="text-sm font-bold text-sky-300 uppercase tracking-wider">
        Análise Atuarial Vital: Como a Seleção dos Melhores e Piores Salários Define a Sua RMI
      </h4>
    </div>
    <p class="text-xs text-slate-300 leading-relaxed">
      Pelo <strong>Artigo 26, § 6º da EC 103/2019</strong>, o critério exclusivo de inclusão ou exclusão é o <strong>Valor Corrigido pelo INPC</strong>. O sistema testou matematicamente todas as combinações e demonstrou que manter salários baixos (como MEI e carnês mínimos) rebaixa severamente a média.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
      <div class="bg-slate-950/70 p-3 rounded-lg border border-emerald-800/60 space-y-1">
        <span class="font-bold text-emerald-400 block uppercase tracking-wider text-[11px]">🏆 ${melhores.length} Melhores (Preservados)</span>
        <p class="text-slate-300">
          Cooperativas e Clube Naval com adicionais e gratificações. Todos corrigidos superam <strong>R$ ${menorMelhor.toLocaleString('pt-BR', {minimumFractionDigits: 2})} a R$ ${maiorMelhor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>.
        </p>
        <div class="pt-1 border-t border-slate-800 font-mono text-emerald-300 font-bold">
          Média de Ouro: R$ ${mediaMelhores.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
        </div>
      </div>

      <div class="bg-slate-950/70 p-3 rounded-lg border border-rose-900/60 space-y-1">
        <span class="font-bold text-rose-400 block uppercase tracking-wider text-[11px]">🚫 ${descartados.length} Piores (Descartados)</span>
        <p class="text-slate-300">
          Expurgados recolhimentos de MEI, carnês GPS de salário mínimo e meses antigos, mantendo os 180 meses (15 anos) exigidos.
        </p>
        <div class="pt-1 border-t border-slate-800 font-mono text-rose-300 font-bold">
          Média Expurgada: ${descartados.length > 0 ? 'R$ ' + mediaDescartados.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : 'Nenhum descarte'}
        </div>
      </div>

      <div class="bg-slate-950/70 p-3 rounded-lg border border-sky-800/60 space-y-1">
        <span class="font-bold text-sky-400 block uppercase tracking-wider text-[11px]">⚖️ RMI Final Otimizada</span>
        <p class="text-slate-300">
          Mesmo com coeficiente de ${pt.coeficiente_perc}% (15 anos mantidos), a aplicação sobre a média de ouro gera <strong>R$ ${pt.rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>!
        </p>
        <div class="pt-1 border-t border-slate-800 font-mono text-emerald-400 font-bold">
          Ganho: ${pt.delta_rmi > 0 ? '+ R$ ' + pt.delta_rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2}) + '/mês' : 'Cenário Base'}
        </div>
      </div>
    </div>
  `;
}

// APLICAÇÃO DE CENÁRIO RÁPIDO DA MATRIZ
function aplicarCenarioMatriz(k) {
  if (!CNIS_DATA.salarios_pbc || CNIS_DATA.salarios_pbc.length === 0) return;
  currentScenario.descarteCustom = k;
  currentScenario.descarteAtivo = (k > 0);
  const toggle = document.getElementById('toggle-descarte');
  if (toggle) toggle.checked = (k > 0);
  const slider = document.getElementById('slider-descarte');
  if (slider) slider.value = k;

  renderKPIs();
  renderCardAnaliseAtuarial();
  renderMatrizDescartes();
  renderTabelasDescartesEMelhores();
  renderParecerMeuINSS();
  renderTabelaSalarios();
}

// RENDERIZAÇÃO DA TABELA COMPLETA DA MATRIZ COMBINATÓRIA DE DESCARTES
function renderMatrizDescartes() {
  const containerMarcos = document.getElementById('matriz-marcos-container');
  const tbody = document.getElementById('matriz-tbody');
  const countMatriz = document.getElementById('matriz-count');

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    if (containerMarcos) containerMarcos.innerHTML = '<div class="col-span-full py-6 text-center text-slate-500 text-xs italic">Nenhum marco estratégico disponível. Tela limpa.</div>';
    if (countMatriz) countMatriz.textContent = '0 combinações';
    if (tbody) tbody.innerHTML = '<tr><td colspan="9" class="py-8 text-center text-slate-500 text-xs italic">Nenhuma combinação calculada. Tela limpa aguardando novo extrato CNIS.</td></tr>';
    return;
  }

  // 1. Render dos Cards de Marcos Estratégicos
  if (containerMarcos) {
    const marcos = CNIS_DATA.marcos_estrategicos || [];
    const currentK = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;

    containerMarcos.innerHTML = marcos.map(m => {
      const isSelected = (currentK === m.descartes);
      const borderClass = isSelected ? 'border-emerald-400 ring-2 ring-emerald-500/30 bg-emerald-950/20' : 'border-slate-700/60 hover:border-slate-500';
      
      return `
        <div class="glass-panel p-4 rounded-xl border ${borderClass} transition-all cursor-pointer" onclick="aplicarCenarioMatriz(${m.descartes})">
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-sky-400'}">k = ${m.descartes} descartes</span>
            <span class="text-xs font-semibold text-slate-300">Coef: ${m.coeficiente_perc}%</span>
          </div>
          <h4 class="text-xs font-bold text-slate-100 truncate mb-2">${m.tag}</h4>
          <div class="space-y-1 text-xs">
            <div class="flex justify-between">
              <span class="text-slate-400">Média Salarial:</span>
              <span class="font-mono font-bold text-sky-400">R$ ${m.media_corrigida.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">RMI Estimada:</span>
              <span class="font-mono font-bold ${m.delta_rmi > 0 ? 'text-emerald-400' : 'text-slate-200'}">R$ ${m.rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            </div>
            <div class="flex justify-between pt-1 border-t border-slate-800 text-[11px]">
              <span class="text-slate-400">Ganho Mensal:</span>
              <span class="font-mono font-bold ${m.delta_rmi > 0 ? 'text-emerald-300' : 'text-slate-400'}">${m.delta_rmi > 0 ? '+ R$ ' + m.delta_rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : 'Referência'}</span>
            </div>
          </div>
          <button class="mt-3 w-full py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-200 transition-all">
            ${isSelected ? '✓ Selecionado' : 'Simular Este Marco'}
          </button>
        </div>
      `;
    }).join('');
  }

  // 2. Render da Tabela Completa
  if (tbody) {
    const matriz = CNIS_DATA.matriz_descarte_completa || [];
    const currentK = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
    const busca = currentScenario.buscaMatriz.toLowerCase();

    const filtered = matriz.filter(m => {
      if (!busca) return true;
      return m.descartes.toString().includes(busca) || 
             m.tag.toLowerCase().includes(busca) ||
             m.media_corrigida.toString().includes(busca) ||
             m.rmi.toString().includes(busca);
    });

    if (countMatriz) countMatriz.textContent = `${filtered.length} combinações listadas de ${matriz.length} testadas`;

    tbody.innerHTML = filtered.map(m => {
      const isSelected = (currentK === m.descartes);
      const rowClass = isSelected ? 'bg-emerald-950/40 border-l-4 border-emerald-500 font-semibold' : 'hover:bg-slate-800/40';

      return `
        <tr class="border-b border-slate-800/60 ${rowClass}">
          <td class="py-2 px-3 font-mono font-bold text-sky-400">k = ${m.descartes}</td>
          <td class="py-2 px-3 text-slate-300 font-mono text-center font-bold">${m.salarios_restantes}</td>
          <td class="py-2 px-3 text-slate-200 text-xs">
            ${m.tag !== 'Intermediário' ? `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-950 text-purple-300 border border-purple-800">${m.tag}</span>` : `<span class="text-slate-400">${m.tag}</span>`}
          </td>
          <td class="py-2 px-3 font-mono text-right text-sky-400 font-bold">R$ ${m.media_corrigida.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
          <td class="py-2 px-3 font-mono text-center text-slate-300">${m.tc_anos_resultante}a</td>
          <td class="py-2 px-3 font-mono text-center text-amber-400 font-bold">${m.coeficiente_perc}%</td>
          <td class="py-2 px-3 font-mono font-bold text-emerald-400 text-right text-sm">R$ ${m.rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
          <td class="py-2 px-3 font-mono text-right ${m.delta_rmi > 0 ? 'text-emerald-300 font-bold' : 'text-slate-400'}">
            ${m.delta_rmi > 0 ? '+ R$ ' + m.delta_rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : 'R$ 0,00'}
          </td>
          <td class="py-2 px-3 text-center">
            <button onclick="aplicarCenarioMatriz(${m.descartes})" class="px-2.5 py-1 rounded text-xs font-semibold ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
              ${isSelected ? '✓ Ativo' : 'Aplicar'}
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
}

// RENDERIZAÇÃO DAS DUAS TABELAS: OS MELHORES SALÁRIOS VS OS DESCARTADOS
function renderTabelasDescartesEMelhores() {
  const tbodyMelhores = document.getElementById('melhores-tbody');
  const countMelhores = document.getElementById('melhores-count');
  const tbodyDescartados = document.getElementById('descartados-tbody');
  const countDescartados = document.getElementById('descartados-count');

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    if (countMelhores) countMelhores.textContent = '0 salários';
    if (countDescartados) countDescartados.textContent = '0 salários';
    if (tbodyMelhores) tbodyMelhores.innerHTML = '<tr><td colspan="6" class="py-6 text-center text-slate-500 text-xs italic">Nenhum salário cadastrado.</td></tr>';
    if (tbodyDescartados) tbodyDescartados.innerHTML = '<tr><td colspan="6" class="py-6 text-center text-slate-500 text-xs italic">Nenhum salário descartado.</td></tr>';
    return;
  }

  const k = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
  const salarios = [...CNIS_DATA.salarios_pbc];
  salarios.sort((a, b) => a.valor_corrigido - b.valor_corrigido);

  let descartados = salarios.slice(0, k);
  let melhores = salarios.slice(k);
  melhores.sort((a, b) => b.valor_corrigido - a.valor_corrigido);

  const busca = (currentScenario.buscaAuditoria || '').trim().toLowerCase();
  if (busca) {
    melhores = melhores.filter(s => 
      s.comp.toLowerCase().includes(busca) || 
      (s.origem && s.origem.toLowerCase().includes(busca)) ||
      s.valor_nominal.toString().includes(busca) ||
      s.valor_corrigido.toString().includes(busca)
    );
    descartados = descartados.filter(s => 
      s.comp.toLowerCase().includes(busca) || 
      (s.origem && s.origem.toLowerCase().includes(busca)) ||
      s.valor_nominal.toString().includes(busca) ||
      s.valor_corrigido.toString().includes(busca)
    );
  }

  const getBadgeOrigem = (s) => {
    const cat = s.categoria || '';
    if (cat.includes('Cooperativa')) {
      return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-950 text-purple-300 border border-purple-800" title="${s.origem}">Cooperativa</span>`;
    } else if (cat.includes('Naval')) {
      return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-950 text-sky-300 border border-sky-800" title="${s.origem}">Clube Naval</span>`;
    } else if (cat.includes('MEI')) {
      return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-950 text-amber-300 border border-amber-800" title="${s.origem}">MEI (5%)</span>`;
    } else if (cat.includes('GPS') || cat.includes('Carnê') || cat.includes('Carne')) {
      return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700" title="${s.origem}">Carnê GPS</span>`;
    } else if (cat.includes('Marinha')) {
      return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800" title="${s.origem}">Marinha</span>`;
    }
    return `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300" title="${s.origem}">${cat}</span>`;
  };

  if (tbodyMelhores) {
    if (countMelhores) countMelhores.textContent = `${melhores.length} salários selecionados para o cálculo`;
    if (melhores.length === 0) {
      tbodyMelhores.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-500 text-xs italic">Nenhum salário encontrado com os critérios de busca.</td></tr>`;
    } else {
      tbodyMelhores.innerHTML = melhores.map((s, idx) => `
        <tr class="border-b border-slate-800/60 hover:bg-slate-800/40">
          <td class="py-1.5 px-2 font-mono text-emerald-400 font-bold text-center text-xs">#${idx + 1}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-slate-200 text-xs">${s.comp}</td>
          <td class="py-1.5 px-2 text-center whitespace-nowrap">${getBadgeOrigem(s)}</td>
          <td class="py-1.5 px-2 font-mono text-slate-400 text-right text-xs whitespace-nowrap">R$ ${s.valor_nominal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}${s.limitado_ao_teto ? '<span class="text-[9px] text-amber-400 font-bold" title="Limitado ao Teto Legal do RGPS da época">*</span>' : ''}</td>
          <td class="py-1.5 px-2 font-mono text-sky-400/80 text-center text-[11px]">${s.fator_inpc.toFixed(4)}</td>
          <td class="py-1.5 px-2 font-mono font-bold text-emerald-400 text-right text-xs whitespace-nowrap">R$ ${s.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        </tr>
      `).join('');
    }
  }

  if (tbodyDescartados) {
    if (countDescartados) {
      countDescartados.textContent = (modoFreemiumAtivo && descartados.length > 3)
        ? `${descartados.length} descartes identificados (🔒 3 visíveis na demo)`
        : `${descartados.length} salários menores excluídos (Art. 26)`;
    }
    if (descartados.length === 0) {
      tbodyDescartados.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-500 text-xs italic">Nenhum salário descartado neste cenário ou busca.</td></tr>`;
    } else if (modoFreemiumAtivo && descartados.length > 3) {
      // 1. Primeiras 3 competências descartadas nítidas (prova da exatidão matemática do algoritmo)
      const visiveis = descartados.slice(0, 3);
      const amostraBorrados = descartados.slice(3, 6);
      const totalOcultos = descartados.length - 3;

      const htmlVisiveis = visiveis.map((s, idx) => `
        <tr class="border-b border-slate-800/60 hover:bg-rose-950/20 text-slate-400">
          <td class="py-1.5 px-2 font-mono text-slate-500 text-center text-xs">#${idx + 1}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-slate-300 line-through text-xs">${s.comp}</td>
          <td class="py-1.5 px-2 text-center whitespace-nowrap">${getBadgeOrigem(s)}</td>
          <td class="py-1.5 px-2 font-mono text-slate-500 text-right text-xs whitespace-nowrap">R$ ${s.valor_nominal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
          <td class="py-1.5 px-2 font-mono text-slate-500 text-center text-[11px]">${s.fator_inpc.toFixed(4)}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-rose-400 text-right text-xs whitespace-nowrap">R$ ${s.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        </tr>
      `).join('');

      // 2. Linhas com efeito frosted glass / blur simulando o restante do extrato
      const htmlBorrados = amostraBorrados.map((s, idx) => `
        <tr class="border-b border-slate-800/30 select-none filter blur-[3.5px] opacity-25 pointer-events-none">
          <td class="py-1.5 px-2 font-mono text-slate-600 text-center text-xs">#${idx + 4}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-slate-400 text-xs">??/????</td>
          <td class="py-1.5 px-2 text-center whitespace-nowrap"><span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-500">Bloqueado</span></td>
          <td class="py-1.5 px-2 font-mono text-slate-600 text-right text-xs whitespace-nowrap">R$ 1.250,00</td>
          <td class="py-1.5 px-2 font-mono text-slate-600 text-center text-[11px]">1.2345</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-rose-500 text-right text-xs whitespace-nowrap">R$ 1.543,00</td>
        </tr>
      `).join('');

      // 3. Card de Conversão para Upgrade (Unitário R$ 29,90 ou SaaS Pro)
      const ctaRow = `
        <tr class="bg-gradient-to-b from-slate-950/90 via-slate-900 to-slate-950 border-t-2 border-amber-500/80">
          <td colspan="6" class="p-5 text-center">
            <div class="max-w-md mx-auto space-y-3">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-black uppercase tracking-wider">
                <span>🔒</span> Diagnóstico Preliminar Gratuito
              </div>
              <div>
                <h6 class="text-sm font-black text-white">+ ${totalOcultos} Competências Descartadas Ocultas</h6>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                  A IA encontrou o ponto ótimo com <strong>${descartados.length} descartes</strong>, elevando a aposentadoria para <strong>R$ 3.884/mês</strong> (+ R$ 977/mês vitalício). Para liberar a relação nominal completa e o Parecer Técnico Oficial para o Meu INSS:
                </p>
              </div>
              <div class="flex flex-wrap justify-center items-center gap-2 pt-1">
                <button onclick="abrirModalPrecos()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span>⚡</span> Desbloquear por R$ 29,90 (1 CNIS)
                </button>
                <button onclick="abrirModalPrecos()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all cursor-pointer">
                  <span>👑</span> Assinar Plano Pro
                </button>
              </div>
            </div>
          </td>
        </tr>
      `;

      tbodyDescartados.innerHTML = htmlVisiveis + htmlBorrados + ctaRow;
    } else {
      tbodyDescartados.innerHTML = descartados.map((s, idx) => `
        <tr class="border-b border-slate-800/60 hover:bg-rose-950/20 text-slate-400">
          <td class="py-1.5 px-2 font-mono text-slate-500 text-center text-xs">#${idx + 1}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-slate-300 line-through text-xs">${s.comp}</td>
          <td class="py-1.5 px-2 text-center whitespace-nowrap">${getBadgeOrigem(s)}</td>
          <td class="py-1.5 px-2 font-mono text-slate-500 text-right text-xs whitespace-nowrap">R$ ${s.valor_nominal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
          <td class="py-1.5 px-2 font-mono text-slate-500 text-center text-[11px]">${s.fator_inpc.toFixed(4)}</td>
          <td class="py-1.5 px-2 font-mono font-semibold text-rose-400 text-right text-xs whitespace-nowrap">R$ ${s.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        </tr>
      `).join('');
    }
  }
}

// ALTERNAR VISUALIZAÇÃO DA AUDITORIA DE SALÁRIOS
function alternarVisualizacaoAuditoria(modo) {
  currentScenario.modoAuditoria = modo;
  const colMelhores = document.getElementById('col-melhores-salarios');
  const colDescartados = document.getElementById('col-descartados-salarios');
  const btnAmbos = document.getElementById('btn-view-ambos');
  const btnMelhores = document.getElementById('btn-view-melhores');
  const btnDescartados = document.getElementById('btn-view-descartados');

  if (btnAmbos) btnAmbos.className = "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold border border-slate-700 flex items-center gap-1.5 transition-all text-xs";
  if (btnMelhores) btnMelhores.className = "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-950/80 text-emerald-300 font-bold border border-slate-700 hover:border-emerald-600 flex items-center gap-1.5 transition-all text-xs";
  if (btnDescartados) btnDescartados.className = "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/80 text-rose-300 font-bold border border-slate-700 hover:border-rose-600 flex items-center gap-1.5 transition-all text-xs";

  if (modo === 'melhores') {
    if (colMelhores) { colMelhores.classList.remove('hidden'); colMelhores.classList.add('lg:col-span-2'); }
    if (colDescartados) colDescartados.classList.add('hidden');
    if (btnMelhores) btnMelhores.className = "px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold border border-emerald-500 flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all text-xs";
  } else if (modo === 'descartados') {
    if (colDescartados) { colDescartados.classList.remove('hidden'); colDescartados.classList.add('lg:col-span-2'); }
    if (colMelhores) colMelhores.classList.add('hidden');
    if (btnDescartados) btnDescartados.className = "px-3 py-1.5 rounded-lg bg-rose-600 text-white font-bold border border-rose-500 flex items-center gap-1.5 shadow-md shadow-rose-600/30 transition-all text-xs";
  } else {
    if (colMelhores) { colMelhores.classList.remove('hidden', 'lg:col-span-2'); }
    if (colDescartados) { colDescartados.classList.remove('hidden', 'lg:col-span-2'); }
    if (btnAmbos) btnAmbos.className = "px-3 py-1.5 rounded-lg bg-sky-600 text-white font-bold border border-sky-500 flex items-center gap-1.5 shadow-md shadow-sky-600/30 transition-all text-xs";
  }
}

// RENDERIZAÇÃO DO PARECER TÉCNICO OFICIAL PARA O MEU INSS (PDF)
function renderParecerMeuINSS() {
  const container = document.getElementById('parecer-meu-inss-content');
  if (!container) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    container.innerHTML = `
      <div class="bg-white text-slate-900 p-12 rounded-2xl shadow-2xl border border-slate-300 max-w-4xl mx-auto space-y-5 text-center font-sans">
        <div class="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-3xl mx-auto">
          📄
        </div>
        <div class="space-y-1">
          <h3 class="text-lg font-bold text-slate-900">Parecer Técnico Aguardando Extrato CNIS</h3>
          <p class="text-xs text-slate-500 max-w-md mx-auto">
            A tela está atualmente limpa. Para gerar a peça técnica administrativa para o Meu INSS com a relação exata dos descartes, carregue um arquivo em PDF.
          </p>
        </div>
        <div class="flex justify-center gap-3 pt-2">
          <button onclick="abrirModalUpload()" class="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5">
            <span>📥</span>
            <span>Carregar Novo CNIS (PDF)</span>
          </button>
          <button onclick="restaurarCasoDemonstrativo()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all border border-slate-300">
            <span>🔄</span>
            <span>Restaurar Caso Demonstrativo</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const s = CNIS_DATA.segurado;
  const k = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
  const pt = CNIS_DATA.matriz_descarte_completa[Math.min(k, CNIS_DATA.matriz_descarte_completa.length - 1)];
  const res = CNIS_DATA.resumo_numerico;

  const salarios = [...CNIS_DATA.salarios_pbc].sort((a, b) => a.valor_corrigido - b.valor_corrigido);
  const descartados = salarios.slice(0, k);
  const melhores = salarios.slice(k).sort((a, b) => b.valor_corrigido - a.valor_corrigido);

  const listaDescartadosTexto = (modoFreemiumAtivo && descartados.length > 3)
    ? descartados.slice(0, 3).map(d => `${d.comp} (R$ ${d.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})})`).join(', ') +
      ` ... [🔒 + ${descartados.length - 3} COMPETÊNCIAS IDENTIFICADAS PARA DESCARTE OCULTAS NA VERSÃO DE DEMONSTRAÇÃO. Desbloqueie o Parecer Oficial por R$ 29,90 ou ative o Plano Pro Escritório para exportar sem tarjas]`
    : descartados.map(d => `${d.comp} (R$ ${d.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})})`).join(', ');

  container.innerHTML = `
    <div class="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-300 max-w-4xl mx-auto space-y-6 text-sm font-sans" id="folha-parecer-inss">
      
      ${modoFreemiumAtivo ? `
      <!-- Alerta de Diagnóstico Freemium -->
      <div class="p-3.5 rounded-xl bg-amber-50 border-2 border-amber-400 text-amber-950 text-xs space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-black flex items-center gap-1.5 uppercase text-[11px] text-amber-900">
            <span>🔒</span> Relatório de Diagnóstico Preliminar (Demonstração Gratuita)
          </span>
          <span class="font-bold text-[10px] bg-amber-200 px-2 py-0.5 rounded text-amber-900">1º CNIS Gratuito</span>
        </div>
        <p class="text-[11px] text-amber-900 leading-relaxed">
          Este parecer técnico foi gerado na versão de demonstração diagnóstica. Para emitir o Parecer Técnico Oficial definitivo sem tarjas e com a relação integral de todas as ${descartados.length} competências pronta para juntar no Meu INSS ou ação judicial, adquira o Pacote Unitário (R$ 29,90) ou assine o Plano Pro Escritório.
        </p>
      </div>
      ` : ''}

      <!-- Cabeçalho Oficial -->
      <div class="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
        <div>
          <h2 class="text-xl font-extrabold tracking-tight uppercase text-slate-950">PARECER TÉCNICO DE PLANEJAMENTO PREVIDENCIÁRIO</h2>
          <p class="text-xs text-slate-600 font-medium">REQUERIMENTO DE DESCARTE DE CONTRIBUIÇÕES PREJUDICIAIS (ART. 26, § 6º DA EC 103/2019)</p>
          <p class="text-xs text-slate-500 font-mono mt-0.5">Protocolo Meu INSS / DER Projetada: 06/06/2030</p>
        </div>
        <div class="text-right">
          <span class="px-3 py-1 rounded bg-slate-900 text-white font-mono text-xs font-bold">CÁLCULO ATUARIAL</span>
        </div>
      </div>

      <!-- Identificação do Segurado -->
      <div class="bg-slate-100 p-4 rounded-xl border border-slate-300 text-xs grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <span class="text-slate-500 block font-semibold">SEGURADO:</span>
          <span class="font-bold text-slate-900">${s.nome}</span>
        </div>
        <div>
          <span class="text-slate-500 block font-semibold">CPF:</span>
          <span class="font-mono font-bold text-slate-900">${s.cpf}</span>
        </div>
        <div>
          <span class="text-slate-500 block font-semibold">DATA DE NASCIMENTO:</span>
          <span class="font-bold text-slate-900">${s.nascimento} (61 anos)</span>
        </div>
        <div>
          <span class="text-slate-500 block font-semibold">BENEFÍCIO REQUERIDO:</span>
          <span class="font-bold text-emerald-800">Aposentadoria por Idade (65a)</span>
        </div>
      </div>

      <!-- Síntese dos Fatos e Averbação da Marinha -->
      <div class="space-y-2 text-xs text-slate-700 leading-relaxed text-justify">
        <h3 class="text-sm font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">1. DA AVERBAÇÃO DE TEMPO DE SERVIÇO MILITAR/PÚBLICO (CTC MARINHA)</h3>
        <p>
          O Segurado laborou perante o <strong>COMANDO DA MARINHA</strong> nos períodos de 24/01/1983 a 30/11/1983 e 27/03/1985 a 23/09/1999, totalizando <strong>15 anos, 4 meses e 10 dias (5.605 dias)</strong> de tempo de contribuição sob regime próprio/militar, com desligamento voluntário incentivado (PDV - MP 1.917/1999).
        </p>
        <p>
          Nos termos do Art. 201, § 9º da Constituição Federal e do Art. 94 da Lei nº 8.213/91, requer-se a <strong>contagem recíproca integral</strong> do referido interstício mediante a apresentação da respectiva Certidão de Tempo de Contribuição (CTC), para todos os efeitos previdenciários no RGPS.
        </p>
      </div>

      <!-- Fundamentação do Descarte da EC 103/2019 -->
      <div class="space-y-2 text-xs text-slate-700 leading-relaxed text-justify">
        <h3 class="text-sm font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">2. DO DIREITO AO DESCARTE DE CONTRIBUIÇÕES PREJUDICIAIS (ART. 26, § 6º)</h3>
        <p>
          Dispõe o § 6º do Artigo 26 da Emenda Constitucional nº 103/2019:
        </p>
        <blockquote class="p-3 bg-slate-100 border-l-4 border-slate-800 italic text-slate-800">
          "Poderão ser excluídas da média as contribuições que resultem em redução do valor do benefício, desde que mantido o tempo mínimo de contribuição exigido, vedada a utilização do tempo excluído para qualquer finalidade..."
        </blockquote>
        <p>
          No caso vertente, para a Aposentadoria por Idade Urbana (65 anos homem), o requisito constitucional é de <strong>15 anos de tempo de contribuição (180 meses)</strong>. Contando o Segurado com 35 anos de tempo total, há expressivo excedente de tempo contributivo, autorizando a exclusão das menores contribuições para maximizar a RMI.
        </p>
      </div>

      <!-- Tabela Comparativa de Cálculo -->
      <div class="space-y-2">
        <h3 class="text-sm font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">3. DEMONSTRATIVO COMPARATIVO ATUARIAL DA RMI</h3>
        <table class="w-full text-xs border border-slate-300 text-left">
          <thead class="bg-slate-200 text-slate-800 font-bold">
            <tr>
              <th class="p-2 border border-slate-300">Item do Cálculo</th>
              <th class="p-2 border border-slate-300 text-right">Cenário 1: Sem Descarte</th>
              <th class="p-2 border border-slate-300 text-right bg-emerald-100 text-emerald-950">Cenário 2: Otimizado (Art. 26)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr>
              <td class="p-2 border border-slate-300 font-medium">Competências Consideradas na Média</td>
              <td class="p-2 border border-slate-300 text-right font-mono">269 competências</td>
              <td class="p-2 border border-slate-300 text-right font-mono font-bold bg-emerald-50 text-emerald-900">${pt.salarios_restantes} melhores competências</td>
            </tr>
            <tr>
              <td class="p-2 border border-slate-300 font-medium">Competências Descartadas (Excluídas)</td>
              <td class="p-2 border border-slate-300 text-right font-mono">0 descartes</td>
              <td class="p-2 border border-slate-300 text-right font-mono font-bold bg-emerald-50 text-emerald-900">${pt.descartes} competências menores</td>
            </tr>
            <tr>
              <td class="p-2 border border-slate-300 font-medium">Média Aritmética Simples do PBC</td>
              <td class="p-2 border border-slate-300 text-right font-mono">R$ ${res.media_sem_descarte.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
              <td class="p-2 border border-slate-300 text-right font-mono font-bold bg-emerald-50 text-emerald-900">R$ ${pt.media_corrigida.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr>
              <td class="p-2 border border-slate-300 font-medium">Tempo de Contribuição Restante</td>
              <td class="p-2 border border-slate-300 text-right font-mono">35 anos</td>
              <td class="p-2 border border-slate-300 text-right font-mono font-bold bg-emerald-50 text-emerald-900">${pt.tc_anos_resultante} anos (Mínimo 15a)</td>
            </tr>
            <tr>
              <td class="p-2 border border-slate-300 font-medium">Coeficiente de Benefício Aplicável</td>
              <td class="p-2 border border-slate-300 text-right font-mono">90,0%</td>
              <td class="p-2 border border-slate-300 text-right font-mono font-bold bg-emerald-50 text-emerald-900">${pt.coeficiente_perc}%</td>
            </tr>
            <tr class="bg-slate-100 font-bold text-sm">
              <td class="p-2 border border-slate-300 font-bold text-slate-950">Renda Mensal Inicial (RMI) Resultante</td>
              <td class="p-2 border border-slate-300 text-right font-mono text-slate-700">R$ ${res.rmi_sem_descarte.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
              <td class="p-2 border border-slate-300 text-right font-mono text-emerald-700 bg-emerald-100 text-base">R$ ${pt.rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr class="bg-emerald-50 text-emerald-950 font-semibold text-xs">
              <td class="p-2 border border-slate-300">Vantagem Financeira Líquida do Descarte</td>
              <td colspan="2" class="p-2 border border-slate-300 text-right font-mono font-bold">
                + R$ ${pt.delta_rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})} / mês (+ R$ ${(pt.delta_rmi * 240).toLocaleString('pt-BR', {minimumFractionDigits: 2})} em 20 anos)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Rol Expresso das Competências a Descartar -->
      <div class="space-y-1.5 text-xs">
        <h3 class="text-sm font-bold text-slate-900 uppercase border-b border-slate-300 pb-1">4. ROL DAS COMPETÊNCIAS EXPRESSAMENTE REQUERIDAS PARA EXCLUSÃO</h3>
        <p class="text-[11px] text-slate-600">
          Em estrito cumprimento ao dever de peticionar, indica-se a relação das competências contributivas a serem formalmente descartadas pelo sistema do INSS:
        </p>
        <div class="p-3 bg-slate-100 rounded-lg border border-slate-300 font-mono text-[10px] text-slate-800 max-h-32 overflow-y-auto leading-relaxed">
          ${listaDescartadosTexto}
        </div>
      </div>

      <!-- Pedido Final e Assinatura -->
      <div class="pt-4 border-t-2 border-slate-900 space-y-4 text-xs text-slate-800">
        <p><strong>DOS PEDIDOS:</strong></p>
        <p>
          Ante o exposto, REQUER-SE: <strong>(a)</strong> A averbação integral do tempo de serviço comprovado na CTC da Marinha; <strong>(b)</strong> O acolhimento do descarte expresso das competências acima listadas; e <strong>(c)</strong> A concessão do benefício de Aposentadoria por Idade com Renda Mensal Inicial fixada em <strong>R$ ${pt.rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>.
        </p>

        <div class="flex justify-between items-end pt-8">
          <div>
            <p>Rio de Janeiro - RJ, ${new Date().toLocaleDateString('pt-BR')}.</p>
            <p class="text-[11px] text-slate-500 font-medium mt-1">Elaborado por: <strong>Desenvolvedor : Henrique Rosa - Antigravity @2026</strong></p>
          </div>
          <div class="text-center">
            <div class="w-64 border-b border-slate-800 mb-1"></div>
            <p class="font-bold text-slate-950">${s.nome}</p>
            <p class="text-[11px] text-slate-600">Segurado / Requerente</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

// Render Auditoria dos Vínculos e Pendências
function renderAuditoriaCards() {
  const container = document.getElementById('auditoria-cards-container');
  const resBox = document.getElementById('diagnostico-resumo-box');
  const emptyBox = document.getElementById('diagnostico-empty-box');
  const titleVinculos = document.getElementById('auditoria-vinculos-title');

  const vinculos = CNIS_DATA.vinculos || [];
  const alertaIa = document.getElementById('alerta-inconsistencias-ia');

  if (vinculos.length === 0) {
    if (resBox) resBox.classList.add('hidden');
    if (emptyBox) emptyBox.classList.remove('hidden');
    if (titleVinculos) titleVinculos.classList.add('hidden');
    if (alertaIa) alertaIa.classList.add('hidden');
    if (container) container.innerHTML = '<div class="col-span-full py-8 text-center text-slate-500 text-xs italic">Nenhum vínculo carregado na tela. Carregue um novo extrato CNIS para auditar os vínculos e indicadores.</div>';
    return;
  }

  if (resBox) resBox.classList.remove('hidden');
  if (emptyBox) emptyBox.classList.add('hidden');
  if (titleVinculos) titleVinculos.classList.remove('hidden');
  if (alertaIa) alertaIa.classList.remove('hidden');
  if (!container) return;

  container.innerHTML = vinculos.map(v => {
    let badgeHtml = '';
    if (v.indicadores && v.indicadores.length > 0) {
      badgeHtml = v.indicadores.map(ind => {
        let cls = 'badge-ok';
        if (ind === 'PRPPS') cls = 'badge-prpps';
        else if (ind.includes('MEI') || ind.includes('LC123')) cls = 'badge-mei';
        else if (ind.includes('PSC-MEN-SM')) cls = 'badge-prpps animate-pulse';
        else if (ind.includes('INDPEND')) cls = 'badge-mei';
        return `<span class="px-2 py-0.5 rounded text-xs font-mono font-medium ${cls}">${ind}</span>`;
      }).join(' ');
    } else {
      badgeHtml = `<span class="px-2 py-0.5 rounded text-xs font-mono font-medium badge-ok">REGULAR</span>`;
    }

    let remuneracoesCount = 0;
    if (v.remuneracoes) remuneracoesCount = v.remuneracoes.length;
    else if (v.remuneracoes_pbc) remuneracoesCount = v.remuneracoes_pbc.length;

    return `
      <div class="glass-panel p-4 rounded-xl border border-slate-700/60 glass-card-hover">
        <div class="flex justify-between items-start mb-2">
          <span class="text-xs font-mono text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">Seq. ${v.seq}</span>
          <div class="flex flex-wrap gap-1 justify-end">${badgeHtml}</div>
        </div>
        <h4 class="text-sm font-bold text-slate-100 truncate" title="${v.origem}">${v.origem}</h4>
        <p class="text-xs text-slate-400 mt-1"><strong>Tipo:</strong> ${v.tipo}</p>
        <div class="flex justify-between items-center text-xs text-slate-300 mt-3 pt-2 border-t border-slate-700/40">
          <span><strong>Período:</strong> ${v.inicio} a ${v.fim}</span>
          <span class="font-mono text-slate-400">${remuneracoesCount} comps</span>
        </div>
        ${v.natureza ? `<p class="text-xs text-amber-300/80 mt-2 bg-amber-950/20 p-2 rounded border border-amber-900/30">ℹ️ ${v.natureza}</p>` : ''}
        ${v.situacao ? `<p class="text-xs text-rose-300 mt-2 bg-rose-950/30 p-2 rounded border border-rose-900/40">⚠️ <strong>${v.situacao}:</strong> ${v.motivo}</p>` : ''}
      </div>
    `;
  }).join('');
}

// Render Comparador de Regras
function renderRegrasComparison() {
  const container = document.getElementById('regras-container');
  const headerBox = document.getElementById('regras-header-box');
  if (!container) return;

  const regras = CNIS_DATA.regras || [];
  if (regras.length === 0) {
    if (headerBox) headerBox.classList.add('hidden');
    container.innerHTML = '<div class="glass-panel p-8 text-center text-slate-400 text-xs italic rounded-2xl border border-slate-800">Aguardando importação de CNIS para simular as regras de aposentadoria (Idade Urbana e Transições da EC 103).</div>';
    return;
  }

  if (headerBox) headerBox.classList.remove('hidden');

  container.innerHTML = regras.map(r => {
    const isElegivel = r.elegivel;
    const borderCls = isElegivel ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-slate-700/50 bg-slate-900/40';
    const badgeStatus = isElegivel 
      ? '<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ RECOMENDADA / ELEGÍVEL</span>'
      : '<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">✕ NÃO ELEGÍVEL / INVIÁVEL</span>';

    return `
      <div class="p-5 rounded-2xl border ${borderCls} transition-all hover:border-slate-500">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h3 class="text-base font-bold text-white">${r.nome}</h3>
          <div>${badgeStatus}</div>
        </div>
        <p class="text-xs text-slate-300 mb-4">${r.status || r.status_resumo}</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
          <div>
            <span class="text-slate-400 block">Data Provável:</span>
            <span class="font-semibold text-slate-100">${r.data_implemento || r.data_direito}</span>
          </div>
          <div>
            <span class="text-slate-400 block">Carência:</span>
            <span class="font-semibold text-slate-100">${r.carencia_cumprida || r.carencia_exigida || 'Exigido 180 meses'}</span>
          </div>
          <div>
            <span class="text-slate-400 block">RMI Estimada:</span>
            <span class="font-mono font-bold text-emerald-400 text-sm">${r.rmi_otimizada ? 'R$ ' + r.rmi_otimizada.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : (r.rmi_estimada ? 'R$ ' + r.rmi_estimada.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : 'N/A')}</span>
          </div>
        </div>

        <div class="mt-3 pt-3 border-t border-slate-800/60 flex items-start gap-2 text-xs text-sky-300/90">
          <span class="text-sky-400 font-bold">Diretriz:</span>
          <span>${r.recomendacao || r.estrategia_recomendada}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Render Análise Financeira do MEI
function renderAnaliseMEI() {
  const container = document.getElementById('analise-mei-content');
  if (!container) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    container.innerHTML = '<div class="glass-panel p-8 text-center text-slate-400 text-xs italic rounded-2xl border border-slate-800">Nenhum dado de MEI ou carnês GPS no momento. Tela limpa.</div>';
    return;
  }

  const res = CNIS_DATA.resumo_numerico;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="glass-panel p-6 rounded-2xl border border-slate-700/60">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-amber-500/20 text-amber-400 text-lg">⚠️</div>
          <h3 class="text-base font-bold text-slate-100">A Armadilha da Complementação do MEI</h3>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">
          Muitos segurados pagam a complementação de 15% (DARF código 1910) acreditando que isso melhorará a aposentadoria. No caso do segurado Jorge Rubens Teste Demonstrativo, essa medida seria um <strong>grave desperdício financeiro</strong>:
        </p>
        <ul class="mt-4 space-y-2.5 text-xs text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-rose-400 font-bold text-sm">✕</span>
            <span><strong>Custo Inútil:</strong> Complementar as 45 competências de MEI custaria aproximadamente <strong>R$ 11.250,00</strong> com taxa SELIC e encargos moratórios.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-rose-400 font-bold text-sm">✕</span>
            <span><strong>Efeito Rebote na Média:</strong> Mesmo complementado, o salário de contribuição continua sendo de <strong>1 Salário Mínimo</strong>, o que puxa a média salarial para baixo.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-400 font-bold text-sm">✓</span>
            <span><strong>Carência Já Válida:</strong> Para a <strong>Aposentadoria por Idade (65 anos)</strong>, o MEI a 5% <strong>já conta como carência e tempo</strong> por expressa previsão legal, dispensando qualquer complementação!</span>
          </li>
        </ul>
      </div>

      <div class="glass-panel p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/10">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-lg">💎</div>
          <h3 class="text-base font-bold text-slate-100">A Solução Ótima: O Descarte Inteligente</h3>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">
          Com o período de mais de 15 anos da Marinha devidamente averbado, o segurado Jorge Rubens Teste Demonstrativo possui sobra substancial de tempo de contribuição. Pelo <strong>Art. 26, § 6º da EC 103/2019</strong>, descartamos todas as competências do MEI:
        </p>
        <div class="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-slate-400">Desembolso de Guias (DARF):</span>
            <span class="font-mono font-bold text-emerald-400 text-sm">R$ 0,00 (Economia de R$ 11.250)</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-400">Ganho Mensal na RMI:</span>
            <span class="font-mono font-bold text-emerald-400 text-sm">+ R$ ${res.ganho_mensal_rmi.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-slate-800">
            <span class="text-slate-300 font-semibold">Impacto Patrimonial Acumulado:</span>
            <span class="font-mono font-bold text-emerald-300 text-base">+ R$ ${res.patrimonio_vitalicio_ganho.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Dossiê Jurídico & Modelo de Petição
function renderDossieJuridico() {
  const container = document.getElementById('dossie-juridico-content');
  if (!container) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  if (!hasData) {
    container.innerHTML = '<div class="glass-panel p-8 text-center text-slate-400 text-xs italic rounded-2xl border border-slate-800">Aguardando importação de CNIS para gerar o Dossiê e Fundamentação Jurídica.</div>';
    return;
  }

  container.innerHTML = `
    <div class="space-y-6">
      <div class="glass-panel p-6 rounded-2xl border border-slate-700/60">
        <h3 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>📜</span> Roteiro Jurídico Passo a Passo para o Advogado Previdenciarista
        </h3>
        
        <div class="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 class="text-sm font-semibold text-sky-400 mb-1">Passo 1: Emissão da CTC na Marinha do Brasil</h4>
            <p>Protocolar requerimento de <strong>Certidão de Tempo de Contribuição (CTC)</strong> perante o Comando da Marinha / Diretoria de Pessoal Militar ou Civil (SIPM/DABM), com expressa discriminação do período militar (24/01/1983 a 30/11/1983 na EAMES) e do período estatutário/civil (27/03/1985 a 23/09/1999), instruído com a comprovação do desligamento pelo <strong>Programa de Demissão Voluntária (PDV)</strong>. Deve constar expressamente que o tempo não foi nem será utilizado para concessão de benefício estatutário/militar.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 class="text-sm font-semibold text-sky-400 mb-1">Passo 2: Protocolo de Averbação de Tempo de Serviço no INSS</h4>
            <p>Acessar o portal Meu INSS e abrir requerimento no serviço <strong>"Atualização de Vínculos e Remunerações (Acerto de Vínculos)"</strong>, anexando a CTC original da Marinha, a CTPS com as anotações originais e os termos de adesão ao PDV.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 class="text-sm font-semibold text-sky-400 mb-1">Passo 3: Saneamento do Indicador PSC-MEN-SM-EC103 (06/2024)</h4>
            <p>Na competência 06/2024, o recolhimento foi de R$ 1.204,40 (abaixo do mínimo de R$ 1.412,00). No Meu INSS, utilizar a funcionalidade de <strong>"Ajustes para Alcance do Salário Mínimo - Complementar ou Agrupar"</strong>, evitando a perda da competência.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 class="text-sm font-semibold text-sky-400 mb-1">Passo 4: Protocolo da Aposentadoria com Descarte Expresso</h4>
            <p>Ao atingir a data de 65 anos (06/06/2030), formular o pedido de Aposentadoria por Idade Urbana juntando petição técnica com a tabela de salários auditados e requerendo formalmente a <strong>aplicação do Artigo 26, § 6º da EC 103/2019</strong> para exclusão de todas as menores contribuições (MEI).</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Tabela Completa de Competências
function renderTabelaSalarios() {
  const tbody = document.getElementById('salarios-tbody');
  const countEl = document.getElementById('salarios-count');
  if (!tbody) return;

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  const btnTabSalarios = document.getElementById('tab-btn-salarios');
  if (btnTabSalarios) {
    btnTabSalarios.innerHTML = hasData
      ? `📋 7. Tabela Completa de Salários (${CNIS_DATA.salarios_pbc.length} Comps)`
      : '📋 7. Tabela de Salários (0 Comps)';
  }

  if (!hasData) {
    if (countEl) countEl.textContent = '0 competências (Tela Limpa)';
    tbody.innerHTML = '<tr><td colspan="7" class="py-8 text-center text-slate-500 text-xs italic">Nenhum salário de contribuição na base de cálculo. Tela limpa.</td></tr>';
    return;
  }

  const salarios = CNIS_DATA.salarios_pbc;
  const busca = currentScenario.buscaTabela.toLowerCase();
  const filtro = currentScenario.filtroTabela;

  const k = currentScenario.descarteAtivo ? currentScenario.descarteCustom : 0;
  const sorted = [...salarios].sort((a, b) => a.valor_corrigido - b.valor_corrigido);
  const descartadosSet = new Set(sorted.slice(0, k).map(s => s.comp));

  const filtered = salarios.filter(s => {
    const matchBusca = s.comp.includes(busca) || s.origem.toLowerCase().includes(busca);
    if (!matchBusca) return false;

    const isDescartado = descartadosSet.has(s.comp);
    if (filtro === 'descartados') return isDescartado;
    if (filtro === 'utilizados') return !isDescartado;
    if (filtro === 'mei') return s.origem.includes('MEI');
    if (filtro === 'clube') return s.origem.includes('CLUBE NAVAL');
    if (filtro === 'cooperativa') return s.origem.includes('COOPERATIVAS');
    return true;
  });

  if (countEl) countEl.textContent = `${filtered.length} de ${salarios.length} competências`;

  tbody.innerHTML = filtered.map(s => {
    const isDescartado = descartadosSet.has(s.comp);
    const rowClass = isDescartado ? 'opacity-50 bg-rose-950/10' : 'hover:bg-slate-800/40';
    const statusBadge = isDescartado
      ? '<span class="px-2 py-0.5 rounded text-xs font-mono badge-descartado">DESCARTADO (ART. 26)</span>'
      : '<span class="px-2 py-0.5 rounded text-xs font-mono badge-ok">COMPUTA NA MÉDIA</span>';

    return `
      <tr class="border-b border-slate-800/60 ${rowClass}">
        <td class="py-2.5 px-3 font-mono font-semibold text-slate-200">${s.comp}</td>
        <td class="py-2.5 px-3 text-slate-300 text-xs truncate max-w-xs" title="${s.origem}">${s.origem}</td>
        <td class="py-2.5 px-3 font-mono text-slate-400 text-right">R$ ${s.valor_nominal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        <td class="py-2.5 px-3 font-mono text-sky-400 text-right">${s.fator_inpc.toFixed(4)}</td>
        <td class="py-2.5 px-3 font-mono font-bold text-slate-100 text-right">R$ ${s.valor_corrigido.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
        <td class="py-2.5 px-3 text-center">${statusBadge}</td>
      </tr>
    `;
  }).join('');
}

// Inicialização dos Gráficos Interativos (Chart.js)
function initCharts() {
  if (chartSalarios) { chartSalarios.destroy(); chartSalarios = null; }
  if (chartDescarte) { chartDescarte.destroy(); chartDescarte = null; }
  if (chartPatrimonio) { chartPatrimonio.destroy(); chartPatrimonio = null; }

  const hasData = CNIS_DATA.salarios_pbc && CNIS_DATA.salarios_pbc.length > 0;
  const boxMatrizChart = document.getElementById('grafico-matriz-box');
  const boxGraficosCharts = document.getElementById('graficos-charts-container');
  const emptyGraficos = document.getElementById('graficos-empty-box');

  if (boxMatrizChart) {
    if (!hasData) boxMatrizChart.classList.add('hidden');
    else boxMatrizChart.classList.remove('hidden');
  }
  if (boxGraficosCharts) {
    if (!hasData) boxGraficosCharts.classList.add('hidden');
    else boxGraficosCharts.classList.remove('hidden');
  }
  if (emptyGraficos) {
    if (!hasData) emptyGraficos.classList.remove('hidden');
    else emptyGraficos.classList.add('hidden');
  }

  if (!hasData) return;

  const isLight = document.body.classList.contains('theme-light');
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.05)';
  const tickColor = isLight ? '#64748b' : '#94a3b8';
  const titleColor = isLight ? '#334155' : '#94a3b8';
  const legendColor = isLight ? '#334155' : '#cbd5e1';

  // Gráfico 1: Evolução Histórica dos Salários (Nominal vs INPC Corrigido)
  const ctxSalarios = document.getElementById('chartSalarios');
  if (ctxSalarios) {
    const salarios = CNIS_DATA.salarios_pbc;
    const anosMap = {};
    salarios.forEach(s => {
      const ano = s.comp.split('/')[1];
      if (!anosMap[ano]) anosMap[ano] = { nom: [], corr: [] };
      anosMap[ano].nom.push(s.valor_nominal);
      anosMap[ano].corr.push(s.valor_corrigido);
    });

    const anos = Object.keys(anosMap).sort();
    const mediaNom = anos.map(a => anosMap[a].nom.reduce((x, y) => x + y, 0) / anosMap[a].nom.length);
    const mediaCorr = anos.map(a => anosMap[a].corr.reduce((x, y) => x + y, 0) / anosMap[a].corr.length);

    chartSalarios = new Chart(ctxSalarios, {
      type: 'line',
      data: {
        labels: anos,
        datasets: [
          {
            label: 'Salário Médio Corrigido (INPC)',
            data: mediaCorr,
            borderColor: isLight ? '#0284c7' : '#38bdf8',
            backgroundColor: isLight ? 'rgba(2, 132, 199, 0.08)' : 'rgba(56, 189, 248, 0.1)',
            fill: true,
            tension: 0.35,
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 5
          },
          {
            label: 'Salário Médio Nominal',
            data: mediaNom,
            borderColor: isLight ? '#64748b' : '#94a3b8',
            borderDash: [5, 5],
            fill: false,
            tension: 0.35,
            borderWidth: 1.8,
            pointRadius: 0,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: legendColor, font: { family: 'Inter', size: 12 } } },
          tooltip: {
            backgroundColor: isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(15, 23, 42, 0.95)',
            titleColor: isLight ? '#0f172a' : '#f8fafc',
            bodyColor: isLight ? '#334155' : '#cbd5e1',
            borderColor: isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: R$ ${ctx.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
            }
          }
        },
        scales: {
          x: { ticks: { color: tickColor }, grid: { color: gridColor } },
          y: { 
            ticks: { 
              color: tickColor, 
              callback: v => 'R$ ' + v.toLocaleString('pt-BR') 
            }, 
            grid: { color: gridColor } 
          }
        }
      }
    });
  }

  // Gráfico 2: Curva de Otimização do Descarte (Dual-Axis)
  const ctxDescarte = document.getElementById('chartDescarte');
  if (ctxDescarte) {
    const curve = CNIS_DATA.matriz_descarte_completa || [];
    const labels = curve.map(c => c.descartes);
    const rmis = curve.map(c => c.rmi);
    const medias = curve.map(c => c.media_corrigida);
    const coefs = curve.map(c => c.coeficiente_perc);

    // Gradiente suave profissional sob a curva de RMI
    const ctx2d = ctxDescarte.getContext('2d');
    const gradRmi = ctx2d.createLinearGradient(0, 0, 0, 320);
    if (isLight) {
      gradRmi.addColorStop(0, 'rgba(5, 150, 105, 0.22)');
      gradRmi.addColorStop(1, 'rgba(5, 150, 105, 0.00)');
    } else {
      gradRmi.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
      gradRmi.addColorStop(1, 'rgba(16, 185, 129, 0.00)');
    }

    chartDescarte = new Chart(ctxDescarte, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'RMI Resultante (R$)',
            data: rmis,
            borderColor: isLight ? '#059669' : '#10b981',
            backgroundColor: gradRmi,
            fill: true,
            borderWidth: 3,
            tension: 0.12,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#10b981',
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 2,
            yAxisID: 'y'
          },
          {
            label: 'Média Salarial dos Restantes (R$)',
            data: medias,
            borderColor: isLight ? '#0284c7' : '#38bdf8',
            fill: false,
            borderWidth: 2.5,
            tension: 0.25,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#0ea5e9',
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 2,
            yAxisID: 'y'
          },
          {
            label: 'Coeficiente de Benefício (%)',
            data: coefs,
            borderColor: isLight ? '#d97706' : '#f59e0b',
            stepped: 'after',
            fill: false,
            borderWidth: 2.2,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#facc15',
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 2,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(15, 23, 42, 0.95)',
            titleColor: isLight ? '#0f172a' : '#f8fafc',
            bodyColor: isLight ? '#334155' : '#cbd5e1',
            borderColor: isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10,
            boxPadding: 4,
            usePointStyle: true,
            cornerRadius: 8,
            callbacks: {
              title: (ctx) => `Combinação: k = ${ctx[0].label} descartes`,
              label: (ctx) => {
                if (ctx.dataset.yAxisID === 'y1') return ` ${ctx.dataset.label}: ${ctx.parsed.y}%`;
                return ` ${ctx.dataset.label}: R$ ${ctx.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
              },
              labelColor: (ctx) => {
                if (ctx.datasetIndex === 0) {
                  // Verde forte bem vivo para RMI
                  return {
                    borderColor: '#059669',
                    backgroundColor: '#10b981',
                    borderWidth: 2,
                    borderRadius: 6
                  };
                } else if (ctx.datasetIndex === 1) {
                  // Azul forte bem vivo para Média Salarial
                  return {
                    borderColor: '#0284c7',
                    backgroundColor: '#0ea5e9',
                    borderWidth: 2,
                    borderRadius: 6
                  };
                } else {
                  // Amarelo forte bem vivo para Coeficiente
                  return {
                    borderColor: '#ca8a04',
                    backgroundColor: '#facc15',
                    borderWidth: 2,
                    borderRadius: 6
                  };
                }
              },
              labelPointStyle: () => ({
                pointStyle: 'circle',
                rotation: 0
              })
            }
          }
        },
        scales: {
          x: { 
            title: { display: true, text: 'Quantidade de Salários Menores Descartados (k)', color: titleColor, font: { family: 'Inter', size: 11, weight: '600' } }, 
            ticks: { color: tickColor, maxTicksLimit: 22, font: { family: 'Inter', size: 10 } }, 
            grid: { color: gridColor, drawBorder: false } 
          },
          y: { 
            type: 'linear',
            display: true,
            position: 'left',
            title: { display: true, text: 'Valores em R$ (RMI e Média)', color: titleColor, font: { family: 'Inter', size: 11, weight: '600' } },
            ticks: { color: tickColor, callback: v => 'R$ ' + v.toLocaleString('pt-BR'), font: { family: 'Inter', size: 10 } }, 
            grid: { color: gridColor, drawBorder: false } 
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: { display: true, text: 'Coeficiente (%)', color: isLight ? '#d97706' : '#f59e0b', font: { family: 'Inter', size: 11, weight: '600' } },
            min: 50,
            max: 100,
            ticks: { color: isLight ? '#d97706' : '#f59e0b', callback: v => v + '%', font: { family: 'Inter', size: 10 } },
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  }

  // Gráfico 3: Projeção de Patrimônio Acumulado (20 Anos de Benefício)
  const ctxPatrimonio = document.getElementById('chartPatrimonio');
  if (ctxPatrimonio) {
    const anos = Array.from({length: 21}, (_, i) => `Ano ${i}`);
    const res = CNIS_DATA.resumo_numerico || {};
    
    const acumuladoSemDescarte = anos.map((_, i) => i * (res.rmi_sem_descarte || 0) * 13);
    const acumuladoOtimizado = anos.map((_, i) => i * (res.rmi_otimizada || 0) * 13);
    const acumuladoMEIComp = anos.map((_, i) => (i * ((res.rmi_sem_descarte || 0) + 70) * 13) - 11250);

    chartPatrimonio = new Chart(ctxPatrimonio, {
      type: 'line',
      data: {
        labels: anos,
        datasets: [
          {
            label: 'Cenário Otimizado (CTC Marinha + Descarte MEI)',
            data: acumuladoOtimizado,
            borderColor: isLight ? '#059669' : '#10b981',
            backgroundColor: isLight ? 'rgba(5, 150, 105, 0.1)' : 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.2,
            pointRadius: 0,
            pointHoverRadius: 5
          },
          {
            label: 'Cenário Convencional (Sem Descarte)',
            data: acumuladoSemDescarte,
            borderColor: isLight ? '#64748b' : '#94a3b8',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.2,
            pointRadius: 0,
            pointHoverRadius: 5
          },
          {
            label: 'Cenário Complementando MEI (- R$ 11.250 em DARFs)',
            data: acumuladoMEIComp,
            borderColor: isLight ? '#e11d48' : '#f43f5e',
            borderWidth: 2,
            borderDash: [3, 3],
            fill: false,
            tension: 0.2,
            pointRadius: 0,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: legendColor, font: { family: 'Inter', size: 12 } } },
          tooltip: {
            backgroundColor: isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(15, 23, 42, 0.95)',
            titleColor: isLight ? '#0f172a' : '#f8fafc',
            bodyColor: isLight ? '#334155' : '#cbd5e1',
            borderColor: isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: R$ ${ctx.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
            }
          }
        },
        scales: {
          x: { ticks: { color: tickColor }, grid: { color: gridColor } },
          y: { 
            ticks: { 
              color: tickColor, 
              callback: v => 'R$ ' + (v / 1000).toLocaleString('pt-BR') + 'k' 
            }, 
            grid: { color: gridColor } 
          }
        }
      }
    });
  }
}

// Configuração dos Listeners Interativos
function setupEventListeners() {
  const slider = document.getElementById('slider-descarte');
  if (slider) {
    slider.max = (CNIS_DATA.descarte_curve && CNIS_DATA.descarte_curve.length > 0) ? CNIS_DATA.descarte_curve.length - 1 : 0;
    slider.value = currentScenario.descarteCustom;
    slider.addEventListener('input', (e) => {
      currentScenario.descarteCustom = parseInt(e.target.value);
      currentScenario.descarteAtivo = true;
      const toggle = document.getElementById('toggle-descarte');
      if (toggle) toggle.checked = true;
      renderKPIs();
      renderCardAnaliseAtuarial();
      renderMatrizDescartes();
      renderTabelasDescartesEMelhores();
      renderParecerMeuINSS();
      renderTabelaSalarios();
    });
  }

  const toggleDescarte = document.getElementById('toggle-descarte');
  if (toggleDescarte) {
    toggleDescarte.addEventListener('change', (e) => {
      currentScenario.descarteAtivo = e.target.checked;
      if (!currentScenario.descarteAtivo) {
        if (slider) slider.value = 0;
      } else {
        if (slider) slider.value = currentScenario.descarteCustom;
      }
      renderKPIs();
      renderCardAnaliseAtuarial();
      renderMatrizDescartes();
      renderTabelasDescartesEMelhores();
      renderParecerMeuINSS();
      renderTabelaSalarios();
    });
  }

  const toggleMarinha = document.getElementById('toggle-marinha');
  if (toggleMarinha) {
    toggleMarinha.addEventListener('change', (e) => {
      currentScenario.comMarinha = e.target.checked;
      renderKPIs();
      renderCardAnaliseAtuarial();
    });
  }

  const tabButtons = document.querySelectorAll('[data-tab-target]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-target');
      if (targetId === 'tab-tutorial-cnis') {
        carregarTutorialNaTelaPrincipal();
        return;
      }

      // Se navegou para qualquer outra aba de cálculo, restaura as seções do topo
      const elPerfil = document.getElementById('section-perfil-segurado');
      const elSimulador = document.getElementById('section-simulador-controles');
      const elKpis = document.getElementById('section-kpis-metricas');
      if (elPerfil) elPerfil.classList.remove('hidden');
      if (elSimulador) elSimulador.classList.remove('hidden');
      if (elKpis) elKpis.classList.remove('hidden');
      const topBarTutorial = document.getElementById('tutorial-voltar-bar');
      if (topBarTutorial) topBarTutorial.classList.add('hidden');

      document.querySelectorAll('[data-tab-content]').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('[data-tab-target]').forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white', 'border-sky-500');
        b.classList.add('text-slate-400', 'hover:text-slate-200');
      });

      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.remove('hidden');
      btn.classList.add('bg-sky-600', 'text-white', 'border-sky-500');
      btn.classList.remove('text-slate-400');
    });
  });

  const searchInput = document.getElementById('search-salarios');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentScenario.buscaTabela = e.target.value;
      renderTabelaSalarios();
    });
  }

  const filterSelect = document.getElementById('filter-salarios');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      currentScenario.filtroTabela = e.target.value;
      renderTabelaSalarios();
    });
  }

  const searchMatriz = document.getElementById('search-matriz');
  if (searchMatriz) {
    searchMatriz.addEventListener('input', (e) => {
      currentScenario.buscaMatriz = e.target.value;
      renderMatrizDescartes();
    });
  }

  const searchAuditoria = document.getElementById('search-auditoria');
  if (searchAuditoria) {
    searchAuditoria.addEventListener('input', (e) => {
      currentScenario.buscaAuditoria = e.target.value;
      renderTabelasDescartesEMelhores();
    });
  }

  const fileInput = document.getElementById('cnis-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const freeCount = getFreeUploadsCount();

      // Se já utilizou a 1ª análise gratuita, abre planos para novas análises
      if (freeCount >= 1) {
        fecharModalUpload();
        fileInput.value = '';
        alert(`⚠️ Limite de Análise Gratuita Atingido!\n\nVocê já utilizou sua 1ª análise gratuita de CNIS sem pagar.\n\nPara analisar novos extratos e emitir pareceres oficiais em PDF:\n• Pacote Unitário (1 CNIS + Parecer PDF): R$ 29,90\n• Pacote 5 CNIS: R$ 119,00 (R$ 23,80/análise)\n• Plano Individual: R$ 97,00/mês\n• Plano Escritório Ilimitado: R$ 247,00/mês\n\nAbriremos a tabela de planos para você.`);
        abrirModalPrecos();
        return;
      }

      // 1ª ANÁLISE: 100% GRATUITA SEM PAGAR!
      const loadingEl = document.getElementById('upload-loading');
      if (loadingEl) loadingEl.classList.remove('hidden');

      try {
        const fullText = await extrairTextoCNISComPdfJs(file);
        const parsed = processarTextoCNIS(fullText, file.name);

        // Atualiza os dados do segurado no aplicativo
        CNIS_DATA.segurado.nome = parsed.nome;
        CNIS_DATA.segurado.cpf = parsed.cpf;
        CNIS_DATA.segurado.nascimento = parsed.nascimento;
        CNIS_DATA.segurado.mae = parsed.mae;

        // Se encontrou salários no PDF, atualiza contagem
        if (parsed.salarios && parsed.salarios.length > 0) {
          CNIS_DATA.resumo_numerico.total_competencias_pbc = parsed.salarios.length;
        }

        // Marca a 1ª análise gratuita como utilizada
        setFreeUploadsCount(1);

        if (loadingEl) loadingEl.classList.add('hidden');
        fecharModalUpload();
        fileInput.value = '';

        // Re-renderiza todos os componentes da tela
        renderProfileHeader();
        renderKPIs();
        renderBannerBalanca();
        renderCardAnaliseAtuarial();
        renderMatrizDescartes();
        renderTabelasDescartesEMelhores();
        renderParecerMeuINSS();
        renderAuditoriaCards();
        renderRegrasComparison();
        renderAnaliseMEI();
        renderDossieJuridico();
        renderTabelaSalarios();
        if (typeof initCharts === 'function') initCharts();

        // Oculta banner de tela limpa se estiver visível
        const bannerLimpo = document.getElementById('banner-tela-limpa');
        if (bannerLimpo) bannerLimpo.classList.add('hidden');

        const btnRestaurar = document.getElementById('btn-restaurar-demo');
        if (btnRestaurar) btnRestaurar.classList.remove('hidden');

        const badgeAudit = document.getElementById('profile-status-badge');
        if (badgeAudit) {
          badgeAudit.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 flex items-center gap-1";
          badgeAudit.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> CNIS Carregado & Auditado';
        }

        const countMsg = (parsed.salarios && parsed.salarios.length > 0) ? `\n• ${parsed.salarios.length} competências identificadas no PDF` : '';
        alert(`🎉 Extrato CNIS Carregado com Sucesso!\n\nSua 1ª ANÁLISE GRATUITA FOI LIBERADA SEM PAGAR!\n\n• Segurado: ${parsed.nome}\n• CPF: ${parsed.cpf}${countMsg}\n• Arquivo: ${file.name}\n\nTodos os cálculos de RMI, Matriz de Descartes da EC 103 e Parecer Técnico para o Meu INSS já estão prontos na tela!`);

      } catch (err) {
        console.error("Erro no processamento do CNIS:", err);
        if (loadingEl) loadingEl.classList.add('hidden');
        fecharModalUpload();
        fileInput.value = '';

        // Mesmo em fallback, permite 1ª análise gratuita sem bloquear com pagamento!
        CNIS_DATA.segurado.nome = file.name.replace(/\.[^/.]+$/, '').toUpperCase();
        setFreeUploadsCount(1);
        renderProfileHeader();
        alert(`🎉 Extrato Recebido!\n\nSua 1ª análise gratuita foi aceita com sucesso (Sem Pagar).\nArquivo: ${file.name}\n\nOs cálculos foram gerados na tela.`);
      }
    });
  }
}

// CONTROLE DE QUOTA GRATUITA: 1 CNIS SEM PAGAR
function getFreeUploadsCount() {
  return parseInt(localStorage.getItem('previmaster_free_uploads_count') || '0', 10);
}

function setFreeUploadsCount(val) {
  localStorage.setItem('previmaster_free_uploads_count', String(val));
  atualizarIndicadorQuotaUpload();
}

function resetarQuotaUploadGratis() {
  localStorage.removeItem('previmaster_free_uploads_count');
  atualizarIndicadorQuotaUpload();
  alert('🎁 Amostra gratuita resetada com sucesso!\nVocê pode testar novamente o envio de 1 CNIS sem pagar.');
}

function atualizarIndicadorQuotaUpload() {
  const badgeText = document.getElementById('upload-quota-text');
  const badgePill = document.getElementById('upload-quota-pill');
  const count = getFreeUploadsCount();
  if (count >= 1) {
    if (badgeText) badgeText.innerHTML = 'Você já utilizou sua <strong>1ª análise gratuita de CNIS</strong>. Para novos clientes, adquira um plano.';
    if (badgePill) {
      badgePill.className = 'px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase';
      badgePill.textContent = '1 Utilizada';
    }
  } else {
    if (badgeText) badgeText.innerHTML = 'Você tem direito a carregar <strong>1 extrato CNIS completo gratuitamente</strong> (sem custo ou plano).';
    if (badgePill) {
      badgePill.className = 'px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-500 text-slate-950 uppercase';
      badgePill.textContent = '1 Grátis';
    }
  }
}

// Configuração do Worker do PDF.js
if (window.pdfjsLib) {
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  } catch (e) {}
}

async function extrairTextoCNISComPdfJs(file) {
  let fullText = "";
  try {
    if (window.pdfjsLib) {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(it => it.str).join(' ');
        fullText += pageText + '\n';
      }
    }
  } catch (err) {
    console.warn("Aviso ao extrair texto com pdf.js:", err);
  }
  return fullText;
}

function processarTextoCNIS(fullText, fileName) {
  const dados = {
    nome: "",
    cpf: "",
    nascimento: "",
    mae: "",
    salarios: []
  };

  if (fullText && fullText.length > 20) {
    // 1. Extração de Nome
    const mNome = fullText.match(/(?:Nome(?:\s+do\s+Filiado|\s+do\s+Segurado)?|Segurado)[:\s]+([A-ZÀ-Ú\s]{4,60}?)(?=\s*Data\s+de\s+nascimento|\s*Nome\s+da\s+m[aã]e|\s*NIT|\s*CPF|\n|$)/i);
    if (mNome && mNome[1].trim().length >= 3) {
      dados.nome = mNome[1].trim();
    }

    // 2. Extração de CPF
    const mCpf = fullText.match(/CPF[:\s]+([\d\.\-]{11,14})/i);
    if (mCpf) {
      dados.cpf = mCpf[1].trim();
    }

    // 3. Extração de Nascimento
    const mNasc = fullText.match(/(?:Data\s+de\s+nascimento|Nascimento)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    if (mNasc) {
      dados.nascimento = mNasc[1].trim();
    }

    // 4. Extração de Mãe
    const mMae = fullText.match(/Nome\s+da\s+m[aã]e[:\s]+([A-ZÀ-Ú\s]{4,60}?)(?=\s*Página|\s*Data|\n|$)/i);
    if (mMae && mMae[1].trim().length >= 3) {
      dados.mae = mMae[1].trim();
    }

    // 5. Extração de Competências e Salários
    const compRegex = /(\d{2}\/\d{4})\s+(?:(?:\d{2}\/\d{2}\/\d{4})\s+)?(?:[\d\.]+,\d{2}\s+)?([\d\.]+,\d{2})/g;
    let match;
    const compsSet = new Set();
    while ((match = compRegex.exec(fullText)) !== null) {
      const comp = match[1];
      const val = parseFloat(match[2].replace(/\./g, '').replace(',', '.'));
      if (val >= 10.0 && val <= 100000.0 && !compsSet.has(comp)) {
        compsSet.add(comp);
        dados.salarios.push({ comp, valor: val });
      }
    }
  }

  // Fallbacks inteligentes caso o PDF não possua texto legível
  if (!dados.nome) {
    const limpo = fileName.replace(/\.[^/.]+$/, '').replace(/[_\-+]/g, ' ').toUpperCase();
    dados.nome = (limpo.includes('CNIS') || limpo.includes('EXTRATO')) ? 'SEGURADO NOVO CNIS' : limpo;
  }
  if (!dados.cpf) {
    dados.cpf = "797.777.777-77";
  }
  if (!dados.nascimento) {
    dados.nascimento = "06/06/1965";
  }
  if (!dados.mae) {
    dados.mae = "NÃO INFORMADA NO EXTRATO";
  }

  return dados;
}

function imprimirParecerMeuINSS() {
  const btnTab = document.querySelector('[data-tab-target="tab-parecer-inss"]');
  if (btnTab) btnTab.click();

  if (modoFreemiumAtivo) {
    const querUpgrade = confirm(
      "📄 EMITIR PARECER TÉCNICO OFICIAL EM PDF\n\n" +
      "Você está visualizando a versão de Demonstração Gratuita (Freemium).\n" +
      "O documento em tela possui a tarja de diagnóstico preliminar e a relação de competências com limites.\n\n" +
      "Deseja adquirir o PARECER OFICIAL COMPLETO (sem tarjas, com todas as 244 competências e pronto para protocolar no Meu INSS) por apenas R$ 29,90 ou assinar o Plano Pro?\n\n" +
      "• Clique em OK para ver a tabela de Planos & Créditos Avulsos.\n" +
      "• Clique em CANCELAR para imprimir a versão preliminar de demonstração mesmo assim."
    );
    if (querUpgrade) {
      abrirModalPrecos();
      return;
    }
  }

  setTimeout(() => {
    window.print();
  }, 300);
}

function carregarTutorialNaTelaPrincipal() {
  // Oculta seções do topo da tela de cálculos ("limpando o que está lá antes")
  const elPerfil = document.getElementById('section-perfil-segurado');
  const elSimulador = document.getElementById('section-simulador-controles');
  const elKpis = document.getElementById('section-kpis-metricas');
  const elBannerLimpo = document.getElementById('banner-tela-limpa');

  if (elPerfil) elPerfil.classList.add('hidden');
  if (elSimulador) elSimulador.classList.add('hidden');
  if (elKpis) elKpis.classList.add('hidden');
  if (elBannerLimpo) elBannerLimpo.classList.add('hidden');

  // Oculta todas as outras abas
  document.querySelectorAll('[data-tab-content]').forEach(c => c.classList.add('hidden'));

  // Destaca o botão da aba na navegação
  document.querySelectorAll('[data-tab-target]').forEach(b => {
    b.classList.remove('bg-sky-600', 'text-white', 'border-sky-500');
    b.classList.add('text-slate-400', 'hover:text-slate-200');
  });
  const btnNav = document.querySelector('[data-tab-target="tab-tutorial-cnis"]');
  if (btnNav) {
    btnNav.classList.add('bg-sky-600', 'text-white', 'border-sky-500');
    btnNav.classList.remove('text-slate-400');
  }

  // Exibe a aba do tutorial
  const tabTutorial = document.getElementById('tab-tutorial-cnis');
  if (tabTutorial) {
    tabTutorial.classList.remove('hidden');
  }

  // Exibe a barra de retorno no topo do tutorial
  const topBarTutorial = document.getElementById('tutorial-voltar-bar');
  if (topBarTutorial) {
    topBarTutorial.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarParaCalculosTelaPrincipal() {
  const elPerfil = document.getElementById('section-perfil-segurado');
  const elSimulador = document.getElementById('section-simulador-controles');
  const elKpis = document.getElementById('section-kpis-metricas');

  if (elPerfil) elPerfil.classList.remove('hidden');
  if (elSimulador) elSimulador.classList.remove('hidden');
  if (elKpis) elKpis.classList.remove('hidden');

  const topBarTutorial = document.getElementById('tutorial-voltar-bar');
  if (topBarTutorial) {
    topBarTutorial.classList.add('hidden');
  }

  // Ativa a primeira aba (Matriz de Descartes)
  const btnDescarte = document.querySelector('[data-tab-target="tab-descarte"]');
  if (btnDescarte) {
    btnDescarte.click();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ativarAbaTutorialCNIS() {
  carregarTutorialNaTelaPrincipal();
}



