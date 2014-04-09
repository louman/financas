class FinanciamentoController < ApplicationController

  def imovel
    @valor_total_pago, @tabela = financiamento(params[:valor_financiado].to_f, params[:taxa_juros].to_f, params[:parcelas].to_i)
  end

  def financiamento(valor_financiado, taxa, parcelas, incluir_tr=false)
    valor_financiado = valor_financiado.to_f
    taxa = taxa / 12.0 / 100
    tr = 1 + 0.5/100

    amortização = valor_financiado / parcelas
    valor_pago = 0

    tabela = []

    parcelas.times do
      juros = valor_financiado * taxa
      if incluir_tr
        juros = juros * tr
      end
      parcela = amortização + juros
      valor_financiado -= amortização

      valor_pago += parcela

      tabela << { valor_parcela: parcela, saldo_devedor: valor_financiado }
      # p amortização
      # p juros
      # p parcela
    end
    return valor_pago, tabela
  end

end
