import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}

  createReport(report: CreateReportDto) {
    const newReport = this.reportRepository.create(report);
    return this.reportRepository.save(newReport);
  }

  getReports() {
    return this.reportRepository.find();
  }
}
