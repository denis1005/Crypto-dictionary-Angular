export interface ICryptoTracer {
    asset_id: string;
  name: string;
  type_is_crypto: number;
  data_quote_start: string;
  data_quote_end: string;
  data_orderbook_start: string;
  data_orderbook_end: string;
  data_trade_start: string;
  data_trade_end: string;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  price_usd: number;
  id_icon?: string;
  data_start: string;
  data_end: string;
}