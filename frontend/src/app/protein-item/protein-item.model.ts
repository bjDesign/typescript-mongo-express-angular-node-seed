export class ProteinModel {
  // title: string;
  // score: number;
  // fdr: number;

  // constructor(title:string, score: number, fdr?: number){
  //   this.title = title;
  //   this.score = score;
  //   this.fdr = fdr;
  // }

  _id: string;
  _experimentid: string;
  _proteingroupid: string;
  groupfile: string;
  groupnum: number;
  membernum: number;
  proteinac: string;
  sequence: string;
  score: number;
  seqcov: number;
  tagcov: number;
  monomass: number;
  avgmass: number;
  pp: number;
  npep: number;
  nspec: number;
  mmsequencefmt: string;
  pepspecmatches: string[];
  fdr: number;

  constructor(_id: string, _experimentid: string, _proteingroupid: string, groupfile: string, groupnum: number, membernum: number, proteinac: string, sequence: string, score: number, seqcov: number, tagcov: number, monomass: number, avgmass: number, pp: number, npep: number, nspec: number, mmsequencefmt: string, pepspecmatches: string[], fdr: number){

    this._id = _id;
    this._experimentid = _experimentid;
    this._proteingroupid = _proteingroupid;
    this.groupfile = groupfile;
    this.groupnum = groupnum;
    this.membernum = membernum;
    this.proteinac = proteinac;
    this.sequence = sequence;
    this.score = score;
    this.seqcov = seqcov;
    this.tagcov = tagcov;
    this.monomass = monomass;
    this.avgmass = avgmass;
    this.pp = pp;
    this.npep = npep;
    this.nspec = nspec;
    this.mmsequencefmt = mmsequencefmt;
    this.pepspecmatches = pepspecmatches;
    this.fdr = fdr;
  };
    
}